import Cookies from 'js-cookie';

type options = {
    expires?: number
}
export default {
    /**设置cookie */
    set: (keyName: string, value: string, options: options = {}) => {
        return Cookies.set(keyName, value, options)
    },
    /**获取cookie */
    get: (keyName: string): string => {
        return Cookies.get(keyName)
    },
    /**移除cookie */
    remove: (keyName: string) => {
        return Cookies.remove(keyName)
    }
}