import axios from 'axios';
import { notification } from 'antd';
import router from 'umi/router';

axios.defaults = {
  headers: {
    post: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  },
  timeout: 20000,
};

const baseUrl = 'https://alipay-node.jasonfan.now.sh';
// const baseUrl = '';

// 添加请求拦截器
// axios.interceptors.request.use(
//   config => {
//     // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
//     // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
//     const token = localStorage.getItem('token');
//     // const token = '1234567890';
//     token && (config.headers['Ext-Token'] = token);
//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   },
// );

// // 添加响应拦截器
// axios.interceptors.response.use(
//   response => {
//     console.log(response);
//     // 对响应数据做点什么
//     if (response.status === 200) {
//       if (Object.hasOwnProperty.call(response.data, 'result')) {
//         switch (response.data.result) {
//           case 1:
//             return Promise.resolve(response);
//             break;
//           case 101:
//             localStorage.removeItem('token');
//             notification.error({ key: 'noAuth', message: '无权限', description: '请重新登录' });
//             router.push('/signin');
//             break;
//           default:
//             const errMsg = response.data.msg || JSON.stringify(response.data.data);
//             notification.error({ message: '操作失败', description: errMsg });
//         }
//       }
//       return Promise.reject(response);
//     } else {
//       return Promise.reject(response);
//     }
//     // return Promise.resolve(response);
//   },
//   error => {
//     // 对响应错误做点什么
//     if (error.response.status) {
//       switch (error.response.status) {
//         // 101: 未登录
//         // 未登录则跳转登录页面，并携带当前页面的路径
//         // 在登录成功后返回当前页面，这一步需要在登录页操作。
//         case 101:
//           localStorage.removeItem('token');
//           notification.error({ key: 'noAuth', message: '无权限', description: '请重新登录' });
//           router.push('/signin');
//           break;
//         // 403 token过期
//         // 登录过期对用户进行提示
//         // 清除本地token和清空vuex中token对象
//         // 跳转登录页面
//         case 403:
//           // 清除token
//           localStorage.removeItem('token');
//           router.push('/signin');
//           // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
//           break;
//         // 404请求不存在
//         case 404:
//           notification.error({ message: '操作失败', description: '请求的资源不存在！' });
//           break;
//         // 其他错误，直接抛出错误提示
//         default:
//           notification.error({ message: '操作失败', description: error.response.msg });
//       }
//       return Promise.reject(error.response);
//     }
//   },
// );

const Api = {
  get: (url: string, params?: any) => {
    return new Promise((resolve, reject) => {
      axios
        .get(baseUrl + url, { params })
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err.data);
        });
    });
  },
  post: (url: string, params?: any, config?: any) => {
    return new Promise((resolve, reject) => {
      axios
        .post(baseUrl + url, params, config)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err.data);
        });
    });
  },
};

export default Api;
