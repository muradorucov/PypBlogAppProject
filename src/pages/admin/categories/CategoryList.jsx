import React, {useContext, useEffect} from 'react';
import {Space, Table, Tag} from 'antd';
import {providerContext} from "../../../context/ContextProvider.jsx";
import {categoryNetwork} from "../../../network/requests/categoryNetwork.js";

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
];

const CategoryList = () => {
  const {categories, setCategories} = useContext(providerContext);

  const getCategory = () => {
    categoryNetwork.getAllCategories().then((data) => {
      setCategories(data);
    });
  };

  useEffect(() => {
    getCategory();
  }, []);

  console.log(categories)
  return (
    <div>
      category
      {/*<Table columns={columns} dataSource={data}/>*/}
    </div>
  );
};

export default CategoryList;
