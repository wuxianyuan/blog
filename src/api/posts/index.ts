import type { UmiApiRequest, UmiApiResponse } from "@umijs/max";
import { PrismaClient } from '@prisma/client'
import bcrypt from "bcryptjs";
import { signToken } from "@/utils/jwt";

export default async function (req: UmiApiRequest, res: UmiApiResponse) {
    switch (req.method) {
        case 'POST':
            try {
                const prisma = new PrismaClient();
                const user = await prisma.user.findUnique({
                    where: { email: req.body.email }
                });
                if (!user) {
                    return res.status(200).json({
                        code: 401,
                        message: '该用户不存在'
                    });
                }
                if (!bcrypt.compareSync(req.body.password, user.passwordHash)) {
                    return res.status(200).json({
                        code: 401,
                        message: '密码错误'
                    });

                }
                res.status(200)
                    .setCookie('token', await signToken(user.id))
                    .json({
                        code: 200,
                        data: { ...user, passwordHash: undefined }
                    });
                await prisma.$disconnect()
            } catch (error: any) {
                res.status(200).json({
                    code: 500,
                    message: error
                });
            }
            break;
        default:
            res.status(200).json({
                code: 405,
                message: 'Method not allowed'
            });
    }
}