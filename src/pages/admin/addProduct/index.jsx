import React, { useEffect, useState } from "react";
import { Button, Form, Input, InputNumber, Select, Checkbox } from "antd";
import { productNetwork } from "../../../network/requests/productNetwork";
import { supplierNetwork } from "../../../network/requests/supplierNetwork";
import { categoryNetwork } from "../../../network/requests/categoryNetwork";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const { Option } = Select;

const AddProduct = () => {
  const [product, setProduct] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [form] = Form.useForm();
  let navigate = useNavigate();

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
    navigate("/admin/products");
    form.resetFields();
  }

  const validateMessages = {
    // eslint-disable-next-line no-template-curly-in-string
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
          style={{ width: 350 }}
          name="namePost"
          label="Title"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
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

        <Form.Item>
          <h2>Content</h2>

          <CKEditor
            editor={ClassicEditor}
            data="<p>Content...</p>"
            onReady={(editor) => {
              // You can store the "editor" and use when it is needed.
              console.log("Editor is ready to use!", editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log({ event, editor, data });
            }}
            onBlur={(event, editor) => {
              console.log("Blur.", editor);
            }}
            onFocus={(event, editor) => {
              console.log("Focus.", editor);
            }}
          />
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
