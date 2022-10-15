import React, {useContext, useEffect, useState} from 'react';
import {Table, Modal, Button} from 'antd';
import {providerContext} from "../../../context/ContextProvider.jsx";
import {categoryNetwork} from "../../../network/requests/categoryNetwork.js";
import toast from "react-hot-toast";

const CategoryList = () => {
  const {categories, setCategories} = useContext(providerContext);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deletedValue, setDeletedValue] = useState({});

  //! MESSAGE FORM
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

  //! GET CATEGORIES
  const getCategory = async () => {
    await categoryNetwork.getAllCategories().then((data) => {
      setCategories(data);
    });
  };

  useEffect(() => {
    getCategory();
  }, []);

  //! DELETE CATEGORY
  function handleDelete() {
    categoryNetwork.deleteCategory(deletedValue._id).then((data) => getCategory());
    setDeleteModal(false);
    notify("Product deleted from API Successfully!");
  }

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Delete Category",
      dataIndex: "id",
      key: "id",
      render: (text, record) => (
        <>
          <Button
            onClick={() => {
              setDeleteModal(true);
              setDeletedValue(record);
            }}
            type="danger" htmlType="submit"> Delete </Button>
          <Modal
            title="Delete Post"
            open={deleteModal}
            centered
            onOk={() => handleDelete()}
            onCancel={() => setDeleteModal(false)}
          >
            <p>Are you sure?</p>
          </Modal>
        </>
      ),
    },
  ];

  return (
    <div>
      <Table
        dataSource={categories?.data?.cats}
        columns={columns}
        rowKey={categories?.data?.cats?._id}
      />
    </div>
  );
};

export default CategoryList;
