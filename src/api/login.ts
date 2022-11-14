import type { UmiApiRequest, UmiApiResponse } from "@umijs/max";

export default async function (req: UmiApiRequest, res: UmiApiResponse) {
    switch (req.method) {
        case 'GET':
            res.json({ "foo": "is working" })
            break;
        default:
            res.status(405).json({ error: 'Method not allowed' })
    }
}
