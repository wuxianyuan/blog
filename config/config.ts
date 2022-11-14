import { defineConfig } from "@umijs/max";
import routes from './routes'
export default defineConfig({
  antd: {},
  access: {},
  model: {},
  publicPath: '/src/',
  base: '/',
  initialState: {},
  request: {},
  layout: {
    title: "@umijs/max",
  },
  routes,
  npmClient: "pnpm",
  apiRoute: {
    platform: 'vercel'
  },
  // plugins: [require.resolve('@umijs/plugins/dist/tailwindcss')],
  tailwindcss: {},
});
