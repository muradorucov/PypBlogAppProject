/* eslint-disable no-template-curly-in-string */
import { providerContext } from "../../../context/ContextProvider";

import {
  Button,
  Input,
  InputNumber,
  Select,
  Checkbox,
  Modal,
  Form,
  Table,
  Space,
} from "antd";
import React, { useEffect, useState, useContext } from "react";
import toast, { Toaster } from "react-hot-toast";

import { productNetwork } from "../../../network/requests/productNetwork";
import { supplierNetwork } from "../../../network/requests/supplierNetwork";
import { categoryNetwork } from "../../../network/requests/categoryNetwork";
const { Option } = Select;

const ProductList = () => {
  const {
    product,
    setProduct,
    suppliers,
    setSuppliers,
    categories,
    setCategories,
  } = useContext(providerContext);
  const [updatedValue, setUpdatedValue] = useState({});
  const [deleteValue, setDeleteValue] = useState({});
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  //Styles
  const updateButtonStyle = {
    all: "unset",
    color: "royalblue",
    fontSize: "1rem",
    cursor: "pointer",
  };

  const deleteButtonStyle = {
    all: "unset",
    color: "red",
    fontSize: "1rem",
    cursor: "pointer",
  };

  const containerStyle = {
    padding: "2rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "4rem",
  };

  const getProducts = () => {
    productNetwork.getAllProducts().then((data) => {
      setProduct(data);
    });
  };

  const getSuppliers = () => {
    supplierNetwork.getAllSuppliers().then((data) => setSuppliers(data));
  };

  const getCategories = () => {
    categoryNetwork.getAllCategories().then((data) => setCategories(data));
  };

  useEffect(() => {
    getProducts();
    getSuppliers();
    getCategories();
  }, []);

  const validateMessages = {
    required: "${label} is required!",
  };

  function handleDelete() {
    console.log(deleteValue);
    productNetwork.deleteProduct(deleteValue.id).then((data) => getProducts());
    setIsModalOpen1(false);
    notify("Product deleted from API Successfully!");
  }

  const form = Form.useFormInstance();

  function handleUpdate(values) {
    console.log(values);
    setUpdatedValue(values);
  }

  useEffect(() => {
    console.log("Update values:", updatedValue);
  }, [updatedValue]);

  useEffect(() => {
    console.log("Update values:", product);
    let newProducts = [];

    if (product) {
      newProducts = product.map((prod) => {
        prod.unitPrice = `$${prod.unitPrice}`;
        return prod;
      });
    }
    console.log("hehehehehe", newProducts);
    console.log(newProducts[0]?.unitPrice.slice(2));
  }, [product]);

  const updateProduct = (values) => {
    console.log(values);
    setIsModalOpen2(false);
    productNetwork.updateProducts(values).then((data) => getProducts());
    notify("Product updated from API Successfully!");
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Product Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Unit Price",
      dataIndex: "unitPrice",
      sorter: (a, b) =>
        Number(a.unitPrice.slice(2)) - Number(b.unitPrice.slice(2)),
      key: `unitPrice`,
    },
    {
      title: "Units in Stock",
      dataIndex: "unitsInStock",
      sorter: (a, b) => a.unitsInStock - b.unitsInStock,
      key: "unitsInStock",
    },
    {
      title: "Quantity per Unit",
      dataIndex: "quantityPerUnit",
      key: "quantityPerUnit",
    },
    {
      title: "Delete Product",
      dataIndex: "id",
      key: "id",
      render: (text, record) => (
        <>
          <button
            style={deleteButtonStyle}
            onClick={() => {
              setIsModalOpen1(true);
              setDeleteValue(record);
            }}
          >
            Delete
          </button>
          <Modal
            title="Delete Product"
            open={isModalOpen1}
            centered
            onOk={() => handleDelete()}
            onCancel={() => setIsModalOpen1(false)}
          >
            <p>Are you sure?</p>
          </Modal>
        </>
      ),
    },
    {
      title: "Update Product",
      dataIndex: "id",
      key: "id",
      render: (text, record) => (
        <>
          <button
            style={updateButtonStyle}
            onClick={() => {
              setIsModalOpen2(true);
              handleUpdate(record);
            }}
          >
            Update
          </button>
          {updatedValue && isModalOpen2 && (
            <Modal
              title="Update Product"
              open={true}
              onOk={() => {
                setUpdatedValue(null);
                setIsModalOpen2(false);
              }}
              onCancel={() => {
                setUpdatedValue(null);
                setIsModalOpen2(false);
              }}
              footer={null}
            >
              <Form
                form={form}
                name="update form"
                initialValues={updatedValue}
                onFinish={updateProduct}
                validateMessages={validateMessages}
              >
                <Form.Item
                  style={{ width: 350 }}
                  name="name"
                  label="Product name"
                >
                  <Input />
                </Form.Item>
                <Form.Item name="supplierId" label="Supplier">
                  <Select style={{ width: 200 }}>
                    {suppliers?.map((supplier) => (
                      <Option key={supplier.id} value={supplier.id}>
                        {supplier.companyName}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item name="categoryId" label="Category">
                  <Select style={{ width: 200 }}>
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
                >
                  <InputNumber type="number" />
                </Form.Item>
                <Form.Item
                  style={{ width: 350 }}
                  name="quantityPerUnit"
                  label="Quantity Per Unit"
                >
                  <Input placeholder="48 - 6 oz jars" />
                </Form.Item>
                <Form.Item
                  style={{ width: 400 }}
                  name="reorderLevel"
                  label="Reorder Level"
                >
                  <InputNumber type="number" />
                </Form.Item>
                <Form.Item
                  style={{ width: 400 }}
                  name="unitPrice"
                  label="Unit Price"
                >
                  <InputNumber type="number" />
                </Form.Item>
                <Form.Item name="discontinued" label="Discontinued">
                  <Checkbox checked={updatedValue.discontinued}></Checkbox>
                </Form.Item>
                <Form.Item name="id"></Form.Item>
                <Space>
                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      Update Product
                    </Button>
                  </Form.Item>
                  <Form.Item>
                    <Button
                      type="secondary"
                      onClick={() => {
                        setUpdatedValue(null);
                        setIsModalOpen2(false);
                      }}
                    >
                      Cancel
                    </Button>
                  </Form.Item>
                </Space>
              </Form>
            </Modal>
          )}
        </>
      ),
    },
  ];

  //Toaster goes here
  const notify = (msg) => {
    toast.success(msg, {
      duration: 1000,
      position: "bottom-left",
      icon: "👏",
      theme: {
        primary: "green",
        secondary: "black",
      },
    });
  };

  return (
    <div style={containerStyle}>
      <Table
        dataSource={product
          ?.map((prod) => {
            // if (prod.unitPrice.slice(1, 2) !== '$') {

            // }
            prod.unitPrice = `$${prod.unitPrice}`;

            return prod;
          })
          .sort((a, b) => a.id - b.id)}
        columns={columns}
        rowKey={(product) => product.id}
      />
      <Toaster />
    </div>
  );
};

export default ProductList;
