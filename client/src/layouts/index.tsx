import React, { useState } from 'react';
import { Layout, Menu, Icon } from 'antd';
import router from 'umi/router';
import Redirect from 'umi/redirect';
import styles from './index.less';

interface Props {
  location: any;
  children: any;
}

const { Header, Content, Footer } = Layout;

const BasicLayout: React.FC = (props: Props) => {
  const {
    location: { pathname },
  } = props;
  if (pathname === '/') {
    return <Redirect to="/home" />;
  }
  const [menuKey, setMenuKey] = useState(pathname || '/home');
  const handlerSelect = ({ key }: any) => {
    console.log(key);
    setMenuKey(key);
    router.push(key);
  };
  return (
    <Layout className="layout">
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <Icon type="alipay-circle" theme="filled" style={{ color: '#1890ff', fontSize: '30px' }} />
        <div className={styles.logo}>AliPay Node Demo</div>
      </Header>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[menuKey]}
        style={{ lineHeight: '46px' }}
        onSelect={handlerSelect}
      >
        <Menu.Item key="/home">首页</Menu.Item>
        <Menu.Item key="/goods">商品购买</Menu.Item>
        <Menu.Item key="/order">订单列表</Menu.Item>
      </Menu>
      <Content>
        <div>{props.children}</div>
      </Content>
      {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
    </Layout>
  );
};

export default BasicLayout;
