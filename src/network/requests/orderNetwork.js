import { baseManager } from "../base/baseManager";

export const orderNetwork = {
  getAllOrders: () => {
    return baseManager.getAll("orders");
  },
  addOrder: (payload) => {
    return baseManager.add("orders", payload);
  },
};
