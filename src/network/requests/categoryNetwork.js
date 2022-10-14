import {baseManager} from "../base/baseManager";

export const categoryNetwork = {
  getAllCategories: () => {
    return baseManager.getAll("categories");
  },
  getCategoryById: (id) => {
    return baseManager.getAll(`categories/${id}`);
  },
  addCategory: (payload) => {
    return baseManager.add("categories", payload);
  },
  deleteCategory: (id) => {
    return baseManager.delete("categories", id);
  },
  updateCategory: (payload) => {
    return baseManager.update(`categories`, payload);
  },
};
