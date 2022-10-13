import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.min.css';
import { Button, Modal } from 'antd';
import { axiosInstance } from '../../../../network/axiosInstance';

const DetailsModal = ({rowData}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const customerId = rowData?.customerId;
  const shipName = rowData?.shipName;
  const requiredDateString = rowData?.requiredDate !== "NULL" ? new Date(rowData?.requiredDate).toString() : 'No date provided';
  const orderDateString = rowData?.orderDate !== "NULL" ? new Date(rowData?.orderDate).toString() : 'No date provided';
  const shippedDateString = rowData?.shippedDate !== "NULL" ? new Date(rowData?.shippedDate).toString() : 'No date provided';
  const details = rowData?.details;
  let total = 0;
  let products = []

  
  if(rowData?.details && details.length){
    for(let i=0; i<details.length; i++){      
      const price = parseFloat(details[i].unitPrice);
      const quantity = parseFloat(details[i].quantity);
      const discount = parseFloat(details[i].discount);
      const productID = details[i].productId;
      const productTotal = price*quantity - (price*quantity*discount);
      products.push(productID)
      total = total + productTotal
    }
  }

  useEffect(() => { 
    return( setIsModalOpen(false));
  }, []);


  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Detail
      </Button>
      <Modal title="Order Details" open={isModalOpen} onCancel={handleCancel} footer={[<Button key="submit" type="primary" onClick={handleOk}>OK</Button>,
        ]}>
        {
          <>
           <p>Customer Id {customerId}</p>
           <p>Total payment {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(total)}</p>
           <p>Required Date {requiredDateString.substring(0,25)}</p>
           <p>Order Date {orderDateString.substring(0,25)}</p>
           <p>Shipped Date {shippedDateString.substring(0,25)}</p>
           <p>Ship Name {shipName}</p>
          </>
        }
      </Modal>
    </>
  );
};

export default DetailsModal;