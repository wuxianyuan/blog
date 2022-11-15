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