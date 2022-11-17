import { request } from "@/.umi/plugin-request";

/**注册新用户 */
export async function addUserApi(
    data: API.UserInfoVO
) {
    return request<API.Result_UserInfo_>('/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data
    });
}
/**接口测试 */
export async function deleteAllUserApi() {
    return request<API.Result_UserInfo_>('/api/deleteAllUser', {
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
    return request<any>('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data
    });
}