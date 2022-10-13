import { baseManager } from "../base/baseManager";

export const supplierNetwork = {
  getAllSuppliers: () => {
    return baseManager.getAll("suppliers");
  },
  getSupplierById: (id) => {
    return baseManager.getAll(`suppliers/${id}`);
  },
  addSupplier: (payload) => {
    return baseManager.add("suppliers", payload);
  },
  deleteSupplier: (id) => {
    return baseManager.delete("suppliers", id);
  },
};
