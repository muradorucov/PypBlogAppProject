import React, { useState, useEffect } from "react";
import * as yup from "yup";
import "antd/dist/antd.css";
import { Form, Input, Button, DatePicker, Select, Row, Col } from "antd";
import { orderNetwork } from "../../../../network/requests/orderNetwork";
import { supplierNetwork } from "../../../../network/requests/supplierNetwork";
import { categoryNetwork } from "../../../../network/requests/categoryNetwork";

let schema = yup.object().shape({
  shipName: yup.string().required(),
  orderDate: yup.date().required(),
  requiredDate: yup.date().required(),
  shippedDate: yup.date().required(),
  shipVia: yup.number().required(),
  freight: yup.number().required(),
  street: yup.string().required(),
  city: yup.string().required(),
  region: yup.string().required(),
  postalCode: yup.number().required(),
  country: yup.string().required(),
  unitPrice: yup.number().required(),
  quantity: yup.number().required(),
  discount: yup.number().required(),
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
      <h1 style={{ textAlign: "center" }}>Add order</h1>
      <Form form={form} name="form1" onFinish={onFinish} style={formStyle}>
        <Row>
          {/* 24x */}
          <Col span={12}>
            <Form.Item name="shipName" rules={[yupSync]} label="Ship Name">
              <Input placeholder="Please input ship name" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Order Date" name="orderDate" rules={[yupSync]}>
              <DatePicker
                placeholder="orderDate"
                name="orderDate"
                style={{ width: "100%" }}
              />
            </Form.Item>
          </Col>
        </Row>

        <p>Required date</p>

        <Form.Item name="requiredDate" rules={[yupSync]}>
          <DatePicker
            placeholder="requiredDate"
            name="requiredDate"
            style={{ width: "100%" }}
          />
        </Form.Item>
        <p>Shipped date</p>

        <Form.Item name="shippedDate" rules={[yupSync]}>
          <DatePicker
            placeholder="shippedDate"
            name="shippedDate"
            style={{ width: "100%" }}
          />
        </Form.Item>
        <p>ShipVia</p>

        <Form.Item name="shipVia" rules={[yupSync]}>
          <Input placeholder="Please input ship Via" />
        </Form.Item>
        <p>Freight</p>
        <Form.Item name="freight" rules={[yupSync]}>
          <Input placeholder="Please input ship freight" />
        </Form.Item>
        <p>Street</p>
        <Form.Item name="street" rules={[yupSync]}>
          <Input placeholder="Please input ship street" />
        </Form.Item>
        <p>City</p>
        <Form.Item name="city" rules={[yupSync]}>
          <Input placeholder="Please input ship city" />
        </Form.Item>
        <p>Region</p>
        <Form.Item name="region" rules={[yupSync]}>
          <Input placeholder="Please input ship region" />
        </Form.Item>
        <p>Postal code</p>
        <Form.Item name="postalCode" rules={[yupSync]}>
          <Input placeholder="Please input postal code" />
        </Form.Item>
        <p>Country</p>
        <Form.Item name="country" rules={[yupSync]}>
          <Input placeholder="Please input country" />
        </Form.Item>
        <p>Unit price</p>
        <Form.Item name="unitPrice" rules={[yupSync]}>
          <Input placeholder="Please input unit price" />
        </Form.Item>
        <p>Quantity</p>
        <Form.Item name="quantity" rules={[yupSync]}>
          <Input placeholder="Please input quantity" />
        </Form.Item>
        <p>Discount</p>
        <Form.Item name="discount" rules={[yupSync]}>
          <Input placeholder="Please input discount" />
        </Form.Item>

        <Form.Item
          name="categoryId"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select defaultValue="Select Supplier" style={{ width: "100%" }}>
            {suppliers?.map((supplier) => (
              <Option key={supplier.id} value={supplier.id}>
                {supplier.companyName}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="supplierId"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select defaultValue="Select Category" style={{ width: "100%" }}>
            {categories?.map((category) => (
              <Option key={category.id} value={category.id}>
                {category.name}
              </Option>
            ))}
          </Select>
        </Form.Item>
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
