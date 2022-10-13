import { createContext, useState } from "react";

export const providerContext = createContext(null);

function ContextProvider({ children }) {
  const [product, setProduct] = useState();
  const [suppliers, setSuppliers] = useState([]);
  const [categories, setCategories] = useState([]);

  const values = {
    product,
    setProduct,
    suppliers,
    setSuppliers,
    categories,
    setCategories,
  };
  return (
    <providerContext.Provider value={values}>
      {children}
    </providerContext.Provider>
  );
}

export default ContextProvider;
