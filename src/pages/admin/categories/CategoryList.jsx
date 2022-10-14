import React, {useContext, useEffect} from 'react';
import {Button, Checkbox, Form, Input, InputNumber, Modal, Select, Space, Table} from 'antd';
import {providerContext} from "../../../context/ContextProvider.jsx";
import {categoryNetwork} from "../../../network/requests/categoryNetwork.js";


const columns = [
  // {
  //   title: "ID",
  //   dataIndex: "_id",
  //   key: "_id",
  // },
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
];

const CategoryList = () => {
  const {categories, setCategories} = useContext(providerContext);

  const getCategory = async () => {
    await categoryNetwork.getAllCategories().then((data) => {
      setCategories(data);
    });
  };

  useEffect(() => {
    getCategory();
  }, []);

  console.log(categories)
  return (
    <div>
      <Table
        dataSource={categories?.data?.cats?.sort((a, b) => a.id - b.id)}
        columns={columns}
        rowKey={(product) => product.id}
      />
    </div>
  );
};

export default CategoryList;
