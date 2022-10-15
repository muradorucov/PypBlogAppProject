import React from 'react';
import {Button, Form, Input} from "antd";
import toast, {Toaster} from "react-hot-toast";
import {formStyle} from "../style.js"
import {categoryNetwork} from "../../../network/requests/categoryNetwork.js";

const AddCategory = () => {
  const form = Form.useFormInstance();

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

  function addCategory(values) {
    categoryNetwork.addCategory(values).then((data) => console.log(data));
    notify("Category added successfully");
    // navigate("/admin/posts");
    form.resetFields();
  }

  return (
    <>
      <Form
        form={form}
        name="nest-messages"
        onFinish={addCategory}
        style={formStyle}
      >
        <Form.Item
          style={{width: 350}}
          name="name"
          label="Category Name"
          rules={[{required: true}]}
        >
          <Input/>
        </Form.Item>

        <Form.Item
          style={{width: 350}}
          name="description"
          label="Description"
          rules={[{required: true}]}
        >
          <Input/>
        </Form.Item>

        <Form.Item>
          <Button type="danger" htmlType="submit"> Add Category </Button>
        </Form.Item>
      </Form>

      <Toaster/>
    </>
  );
};

export default AddCategory;
