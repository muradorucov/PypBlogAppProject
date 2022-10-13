import React, { useEffect, useState } from "react";
import { Button, Form, Input, InputNumber, Select, Checkbox } from "antd";
import { productNetwork } from "../../../network/requests/productNetwork";
import { supplierNetwork } from "../../../network/requests/supplierNetwork";
import { categoryNetwork } from "../../../network/requests/categoryNetwork";
import toast, { Toaster } from "react-hot-toast";
import "./form.css";

const { Option } = Select;

const AddProduct = () => {
  const [product, setProduct] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [form] = Form.useForm();

  const getProducts = () => {
    productNetwork.getAllProducts().then((data) => setProduct(data));
  };

  const getSuppliers = () => {
    supplierNetwork.getAllSuppliers().then((data) => setSuppliers(data));
  };

  const getCategories = () => {
    categoryNetwork.getAllCategories().then((data) => setCategories(data));
  };

  useEffect(() => {
    getSuppliers();
    getCategories();
  }, []);

  function addProduct(values) {
    productNetwork.addProduct(values).then((data) => getProducts());
    notify("Product added successfully");
    form.resetFields();
  }

  const validateMessages = {
    required: "${label} is required!",
  };

  const formStyle = {
    flex: 1,
    marginTop: "6rem",
    marginLeft: "3rem",
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  //Toaster goes here
  const notify = (msg) => {
    toast.success(msg, {
      duration: 1000,
      position: "bottom-left",
      theme: {
        primary: "green",
        secondary: "black",
      },
    });
  };

  return (
    <div>
      <Form
        form={form}
        name="nest-messages"
        onFinish={addProduct}
        validateMessages={validateMessages}
        style={formStyle}
      >
        <Form.Item
          name="name"
          label="Product name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="supplierId"
          label="Supplier"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            defaultValue="Select Supplier"
            style={{ width: 200 }}
            onChange={handleChange}
          >
            {suppliers?.map((supplier) => (
              <Option key={supplier.id} value={supplier.id}>
                {supplier.companyName}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="categoryId"
          label="Category"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            defaultValue="Select Category"
            style={{ width: 200 }}
            onChange={handleChange}
          >
            {categories?.map((category) => (
              <Option key={category.id} value={category.id}>
                {category.name}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          style={{ width: 400 }}
          name="unitsInStock"
          label="Units in Stock"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <InputNumber type="number" />
        </Form.Item>

        <Form.Item
          style={{ width: 350 }}
          name="quantityPerUnit"
          label="Quantity Per Unit"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input placeholder="48 - 6 oz jars" />
        </Form.Item>

        <Form.Item
          style={{ width: 400 }}
          name="reorderLevel"
          label="Reorder Level"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <InputNumber type="number" />
        </Form.Item>

        <Form.Item
          className="ant-form-item-required"
          name="discontinued"
          valuePropName="checked"
          label="Discontinued"
        >
          <Checkbox></Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add Product
          </Button>
        </Form.Item>
      </Form>
      <Toaster />
    </div>
  );
};

export default AddProduct;
