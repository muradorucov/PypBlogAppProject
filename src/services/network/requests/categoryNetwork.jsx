import { baseManager } from "../baseManager"


export const categoryNetwork = {
   getAllCategories:  () => {
    return baseManager.getAll('categories')
  },
}