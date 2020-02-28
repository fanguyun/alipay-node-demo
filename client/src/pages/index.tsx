import React from 'react';
import { Button, Alert } from 'antd';
import Link from 'umi/link';
import styles from './index.less';

export default function() {
  return (
    <div className={styles.normal}>
      <Alert message="请先安装沙箱环境支付宝APP" banner />
      <div className={styles.welcome} />
      <div style={{ textAlign: 'center' }}>
        <p className={styles.tips}>
          目前沙箱钱包仅提供Android版本
          <br />
          扫码或
          <a href="https://sandbox.alipaydev.com/user/downloadApp.htm" target="_blank">
            点击下载
          </a>
        </p>
        {/* <Button type="primary">
          <Link to="/goods">已安装，开始购物</Link>
        </Button> */}
      </div>
    </div>
  );
}
