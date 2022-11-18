export default [
    {
        path: "/",
        redirect: "/home",
    },
    {
        name: "首页",
        path: "/home",
        component: "@/pages/Home",
    },
    {
        name: "权限演示",
        path: "/access",
        component: "@/pages/Access",
    },
    { name: '新增', path: '/create', component: '@/pages/Home' },
    { name: '注册', path: '/register', component: '@/pages/register' },
    {
        name: '登录',
        path: '/login',
        component: '@/pages/login',
        // 不展示菜单
        menuRender: false,
        // 不展示顶栏
        headerRender: false,
        // 不展示页脚
        footerRender: false,
        // 隐藏自己和子菜单
        hideInMenu: true,
        // 在面包屑中隐藏
        hideInBreadcrumb: true,
    },
    { name: '查看', path: '/posts/:postId', component: '@/pages/Home' },
]