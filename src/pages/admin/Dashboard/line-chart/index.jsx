import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/charts';
import { orderNetwork } from 'network/requests/orderNetwork';

const LineChart = () => {
    const [orders, setOrders] = useState([]);

    const getOrders = () => {
        orderNetwork.getAllOrders().then((data) => {
            setOrders(data)
        })
    }

    useEffect(() => {
        getOrders();
    }, [])

    const initialData = [];
    const lastData = [];

    orders.forEach(item => (
        initialData.push(
            {
                year: +item.orderDate?.substr(0, 4).concat(item.orderDate?.substr(5, 2)),
                price: +item.details?.reduce((accumulator, object) => (accumulator + object.unitPrice), 0)
            }
            )
    ))

    // sort
    initialData.sort((a, b) => a.year - b.year)

    // add
    initialData.forEach(item => {
        let data = item.year?.toString()
        data = data?.substring(0, 4) + "-" + data?.substring(4, data.length)
        item.year = data
    })

    initialData?.reduce(function (res, value) {
        if (!res[value.year]) {
            res[value.year] = { year: value.year, price: 0 };
            lastData.push(res[value.year])
        }
        res[value.year].price += value.price;
        res[value.year].price = Number(res[value.year].price.toFixed(2))
        return res;
    }, {});


    const config = {
        data: lastData,
        xField: 'year',
        yField: 'price',
        point: {
            size: 5,
            shape: 'diamond',
        },
        meta:{ 
            price:{
                formatter:(x)=>`$${new Intl.NumberFormat().format(x)}`
            }
          },
    };
    return <Line {...config} />;
};

export default LineChart;
