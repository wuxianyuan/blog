import { request } from "@/.umi/plugin-request";

/**注册新用户 */
export async function addUserApi(
    data: API.UseInfoReq
) {
    return request<API.requestRespon<API.UserInfo>>('/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data
    });
}
/**删除所有用户 */
export async function deleteAllUserApi() {
    return request<API.requestRespon<API.UserInfo>>('/api/deleteAllUser', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
}
/**登录 */
export async function loginApi(data: {
    email: string, password: string
}) {
    return request<API.requestRespon<API.UserInfo>>('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data
    });
}