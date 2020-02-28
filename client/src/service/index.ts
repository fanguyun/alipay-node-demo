import Api from '../utils/api';

// 提交订单
export function payInfo(params: any = {}) {
  return Api.get('api/alipay/payinfo', params);
}

// 发起支付
export function payOrder(params: any) {
  return Api.post('/api/alipay/createOrder', params, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
}

// 查询订单
export function queryOrder(params: any = {}) {
  return Api.get('/api/alipay/getorder', params);
}

// 支付成功信息
export function queryPayInfo(params: any = {}) {
  return Api.get('/api/alipay/payresult', params);
}
