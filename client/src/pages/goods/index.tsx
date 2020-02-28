import React, { useState } from 'react';
import { Button, InputNumber, Select, Modal } from 'antd';
import { payInfo, payOrder } from '../../service/index';

import styles from './index.less';

const { Option } = Select;

const GoodsList = [
  {
    id: 0,
    name: '口罩',
    price: 5,
  },
  {
    id: 1,
    name: '可乐',
    price: 2,
  },
  {
    id: 2,
    name: '消毒水',
    price: 100,
  },
  {
    id: 3,
    name: 'N95',
    price: 10,
  },
  {
    id: 4,
    name: '炸鸡',
    price: 20,
  },
];

export default function() {
  const [goods, setGoods] = useState(GoodsList[0]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [num, setNum] = useState(1);
  const [visible, setVisible] = useState(false);

  const onChange = (value: number) => {
    console.log('changed', value);
    setNum(value);
    setTotalPrice(value * goods.price);
  };
  const handleChange = (value: any, option: any) => {
    console.log('changed', value);
    setGoods(GoodsList[value]);
    setTotalPrice(GoodsList[value].price * num);
  };

  const handlerOrder = () => {
    const params = {
      payName: 'Test',
      goodsName: goods.name,
      price: goods.price,
      count: num,
      cost: (totalPrice || 5).toFixed(2),
    };
    payInfo(params).then((res: any) => {
      console.log(res);
      if (res.code === 200) {
        setVisible(true);
      }
    });
  };
  const handleOk = () => {
    const params = {
      payName: 'Test',
      goodsName: goods.name,
      price: goods.price,
      count: num,
      cost: (totalPrice || 5).toFixed(2),
    };
    let data;
    if (typeof params == 'object') {
      var str = '';
      for (var key in params) {
        str += key + '=' + params[key] + '&';
      }
      data = str.replace(/&$/, '');
    }
    payOrder(data).then((resAlipay: any) => {
      const div = document.createElement('div');
      div.innerHTML = resAlipay;
      document.body.appendChild(div);
      document.forms[0].submit();
    });
  };
  return (
    <div className={styles.goods_normal}>
      选择商品：
      <Select defaultValue={goods.id} style={{ width: 120 }} onChange={handleChange}>
        {GoodsList.map(item => (
          <Option value={item.id} key={item.id}>
            {item.name}
          </Option>
        ))}
      </Select>
      <div className={styles.goods_card}>
        <p>{'商品名称：' + goods.name}</p>
        <div className={styles.goods_card_li}>
          <p>单价：￥{goods.price}</p>
          <p>
            数量：
            <InputNumber min={1} max={10} value={num} onChange={onChange} />
          </p>
          <p>总价：{totalPrice || 5}</p>
        </div>
        <Button type="danger" onClick={handlerOrder}>
          购买
        </Button>
      </div>
      <Modal
        title="订单确认"
        cancelText="取消"
        okText="确认"
        visible={visible}
        onOk={handleOk}
        onCancel={() => setVisible(false)}
      >
        <div className={styles.goods_card_li}>
          <p>{'商品名称：' + goods.name}</p>
          <p>单价：￥{goods.price}</p>
          <p>数量：{num}</p>
          <p>总价：{totalPrice || 5}</p>
        </div>
      </Modal>
    </div>
  );
}
