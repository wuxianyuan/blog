// 运行时配置

import { RequestConfig } from '@umijs/max';
import { RunTimeLayoutConfig } from '@umijs/max';
import { Footer } from 'antd/lib/layout/layout';

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://next.umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  const user = localStorage.getItem('user');
  if (!user && location.pathname !== '/login') {
    //未登录则跳转到登录页
    location.href = '/login';
  }
  if (user && location.pathname === '/login') {
    //未登录则跳转到登录页
    location.href = '/';
  }
  return { name: '@umijs/max' };
}

export const layout: RunTimeLayoutConfig = () => {
  return {
    // 常用属性
    title: 'blog',
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',

    // 默认布局调整
    rightContentRender: () => <></>,
    footerRender: () => <Footer />,
    menuHeaderRender: undefined,
  };
};

/**请求的统一拦截器 */
export const request: RequestConfig = {
  timeout: 2000,
  // other axios options you want
  errorConfig: {
    errorHandler() {},
    errorThrower() {},
  },
  requestInterceptors: [],
  responseInterceptors: [],
};
