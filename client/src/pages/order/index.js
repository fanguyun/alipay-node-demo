import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import { queryOrder } from '../../service/index';
import styles from './index.less';

const columns = [
  {
    title: '商品',
    dataIndex: 'goods_name',
    key: 'goods_name',
  },
  {
    title: '数量',
    dataIndex: 'count',
    key: 'count',
  },
  {
    title: '金额',
    dataIndex: 'total_amount',
    key: 'total_amount',
  },
];

export default function() {
  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    queryOrder().then(res => {
      if (res.code === 200) {
        setDataSource(res.list);
      }
    });
  }, []);
  return (
    <div className={styles.normal}>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
}
