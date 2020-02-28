import { IConfig } from 'umi-types'; // ref: https://umijs.org/config/

const config: IConfig = {
  treeShaking: true,
  history: 'hash',
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        {
          path: '/home',
          component: '../pages/index',
        },
        {
          path: '/goods',
          component: '../pages/goods/index',
        },
        {
          path: '/order',
          component: '../pages/order/index',
        },
        {
          path: '/success',
          component: '../pages/success/index',
        },
      ],
    },
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: false,
        title: 'client',
        dll: false,
        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
      },
    ],
  ],
  proxy: {
    '/api': {
      target: 'http://h5-saas.seeapp.com:8888/',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/api',
      },
    },
  },
};
export default config;
