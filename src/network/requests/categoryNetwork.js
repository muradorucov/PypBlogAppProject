import { baseManager } from "../base/baseManager";

export const categoryNetwork = {
  getAllCategories: () => {
    return baseManager.getAll("categories");
  },
};
