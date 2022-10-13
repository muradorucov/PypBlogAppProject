import { baseManager } from "../base/baseManager";

export const productNetwork = {
  getAllProducts: () => {
    return baseManager.getAll("products");
  },
  getProductById: (id) => {
    return baseManager.getAll(`products/${id}`);
  },
  addProduct: (payload) => {
    return baseManager.add("products", payload);
  },
  deleteProduct: (id) => {
    return baseManager.delete("products", id);
  },
  updateProducts: (payload) => {
    return baseManager.update(`products`, payload);
  },
};
