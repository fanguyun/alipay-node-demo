import React, { useEffect, useState } from 'react';
import { Icon } from 'antd';
import { queryPayInfo } from '../../service/index';
import styles from './index.less';

export default function(props: any) {
  const {
    location: { query },
  } = props;
  return (
    <div className={styles.normal}>
      <div className={styles.su_tips}>
        <Icon type="check-circle" className={styles.su_icon} />
        <h1>支付成功</h1>
      </div>
      {query && (
        <div style={{ textAlign: 'center' }}>
          <p>{` 商户订单号:${query.out_trade_no}`}</p>
          <p>{`支付宝交易订单号: ${query.trade_no}`}</p>
          <p>{`交易金额: ￥${query.total_amount}`}</p>
          <p>{`交易时间: ${query.timestamp}`}</p>
        </div>
      )}
    </div>
  );
}
