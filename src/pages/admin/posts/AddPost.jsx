import React, { useEffect, useState } from "react";
import { Button, Form, Input, Select } from "antd";
import toast, { Toaster } from "react-hot-toast";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
const { Option } = Select;
import axios from "axios";

const AddPost = () => {
  const [form] = Form.useForm();
  const [desc, setDesc] = useState({});
  const [img, setImg] = useState();
  const [categories, setCategories] = useState();

  function AddBlog(values) {
    notify("Post added successfully");

    const sendData = {
      title: values.title,
      category: values.category,
      desc: desc.data,
      username: "anar",
      photo: {
        src: img.name,
      },
      uploaded_file: img,
    };

    console.log(sendData);

    const body = new FormData();
    body.append("file", img, "uploaded_file");

    axios.request({
      method: "post",
      url: "http://localhost:5000/api/posts/",
      data: sendData,
      headers: { "Content-Type": "multipart/form-data" },
    });
    form.resetFields();
  }

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/categories/")
      .then((res) => setCategories(res.data));
  }, []);

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

  function uploadAdapter(loader) {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          loader.file.then((file) => {
            setImg(file);
          });
        });
      },
    };
  }

  function uploadPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return uploadAdapter(loader);
    };
  }

  console.log(categories)

  return (
    <div>
      <Form
        form={form}
        name="nest-messages"
        onFinish={AddBlog}
        validateMessages={validateMessages}
        style={formStyle}
      >
        <Form.Item
          style={{ width: 350 }}
          name="title"
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
          name="category"
          label="category"
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
            {categories?.data?.cats.map((category) => (
              <Option key={category._id} value={category.name}>{category.description}</Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item>
          <h2>Content</h2>

          <CKEditor
            editor={ClassicEditor}
            config={{
              extraPlugins: [uploadPlugin],
            }}
            data=""
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log({ data });
              setDesc({ data });
            }}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add Post
          </Button>
        </Form.Item>
      </Form>
      <Toaster />
    </div>
  );
};

export default AddPost;
