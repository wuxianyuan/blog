import { UmiApiRequest, UmiApiResponse } from "@umijs/max";
import { PrismaClient, User } from '@prisma/client'
export default async function (req: UmiApiRequest, res: UmiApiResponse) {
    // 建立一个 Prisma 客户端，他可以帮助我们连线到数据库



    try {

        const prisma = new PrismaClient();
        // 在数据库的 User 表中建立一个新的数据
        const user = await prisma.user.findMany()

        if (user?.length) {
            await prisma.user.deleteMany({
                where: { avatarUrl: null }
            })
        }

        res.status(200)
            .json({ ...user })

        // 处理完请求以后记得断开数据库链接 
        await prisma.$disconnect();

    } catch (e: any) {

        // 如果发生未预期的错误，将对应的错误说明的 Prisma 文档发给用户
        res.status(500).json({
            result: false,
            message: typeof e.code === 'string' ? 'https://www.prisma.io/docs/reference/api-reference/error-reference#' + e.code.toLowerCase() : e
        })
    }
}