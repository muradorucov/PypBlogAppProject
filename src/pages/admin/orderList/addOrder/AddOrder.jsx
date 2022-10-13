import React, { useState, useEffect } from "react";
import * as yup from "yup";
import "antd/dist/antd.css";
import { Form, Input, Button, DatePicker, Select, Row, Col } from "antd";
import { orderNetwork } from "../../../../network/requests/orderNetwork";
import { supplierNetwork } from "../../../../network/requests/supplierNetwork";
import { categoryNetwork } from "../../../../network/requests/categoryNetwork";

let schema = yup.object().shape({
  name: yup.string().required(),
  surname: yup.string().required(),
  email: yup.string().required(),
  password: yup.number().required(),
});

const yupSync = {
  async validator({ field }, value) {
    await schema.validateSyncAt(field, { [field]: value });
  },
};

const AddOrder = () => {
  const [form] = Form.useForm();
  const { Option } = Select;

  const [suppliers, setSuppliers] = useState([]);
  const [categories, setCategories] = useState([]);

  const getCategories = () => {
    categoryNetwork.getAllCategories().then((data) => setCategories(data));
  };

  const getSuppliers = () => {
    supplierNetwork.getAllSuppliers().then((data) => setSuppliers(data));
  };
  useEffect(() => {
    getSuppliers();
    getCategories();
  }, []);

  const onFinish = (values) => {
    console.log("Success:", values);
    const newdata = {
      customerId: values.customerId,
      employeeId: values.supplierId,
      orderDate: values.orderDate,
      requiredDate: values.requiredDate,
      shippedDate: values.shippedDate,
      shipVia: values.shipVia,
      freight: values.freight,
      shipName: values.shipName,
      shipAddress: {
        street: values.street,
        city: values.city,
        region: values.region,
        postalCode: values.postalCode,
        country: values.country,
      },
      details: [
        {
          unitPrice: values.unitPrice,
          quantity: values.quantity,
          discount: values.discount,
        },
      ],
    };
    orderNetwork.addOrder(newdata).then((data) => console.log(data));
    form.resetFields();
  };
  const formStyle = {
    width: "40%",
    margin: "auto",
  };
  const btnStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%)",
  };
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Add User</h1>
      <Form form={form} name="form1" onFinish={onFinish} style={formStyle}>
        <p>Name</p>
        <Form.Item name="name" rules={[yupSync]}>
          <Input placeholder="Name" />
        </Form.Item>
        <p>Surname</p>
        <Form.Item name="surname" rules={[yupSync]}>
          <Input placeholder="Surname" />
        </Form.Item>
        <p>Email</p>
        <Form.Item name="email" rules={[yupSync]}>
          <Input placeholder="Email" />
        </Form.Item>
        <p>Password</p>
        <Form.Item name="password" rules={[yupSync]}>
          <Input placeholder="Password" />
        </Form.Item>

        <Form.Item
          name="supplierId"
          rules={[
            {
              required: true,
            },
          ]}
        ></Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" style={btnStyle}>
            Add
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddOrder;
