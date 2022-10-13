import React, { useState, useEffect } from 'react'
import { Pie } from '@ant-design/plots';
import { orderNetwork } from 'network/requests/orderNetwork';

const PieChart = () => {
  const [orders, setOrders] = useState([]);


  const data = [
    {
      type: 'Year 1996',
      value: orders.filter(order => order.orderDate?.startsWith('1996')).length,
    },
    {
      type: 'Year 1997',
      value: orders.filter(order => order.orderDate?.startsWith('1997')).length,
    },
    {
      type: 'Year 1998',
      value: orders.filter(order => order.orderDate?.startsWith('1998')).length,
    },
  ];

  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    label: {
      type: 'inner',
      offset: '-40%',
      content: `{percentage}`,
      style: {
        fontSize: 20,
        textAlign: 'center',
      },
    },
    interactions: [
      {
        type: 'pie-legend-active',
      },
      {
        type: 'element-active',
      },
    ],
  };

  useEffect(() => {
    orderNetwork.getAllOrders().then((data) => {
      setOrders(data)
    })
  }, [])

  if (!orders.length) return null;

  return (
      <Pie {...config} />
  )
}

export default PieChart