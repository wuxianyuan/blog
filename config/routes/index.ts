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
    {
        name: " CRUD 示例",
        path: "/table",
        component: "@/pages/Table",
    },
    { name: '新增', path: '/create', component: '@/pages/Home' },
    { name: '注册', path: '/register', component: '@/pages/register' },
    { name: '登录', path: '/login', component: '@/pages/Home' },
    { name: '查看', path: '/posts/:postId', component: '@/pages/Home' },
]