import { createContext, useState } from "react";

export const ProviderContext = createContext(null);

function ContextProvider({ children }) {
  const [counter, setcounter] = useState(0);
  const [suppliers, setSuppliers] = useState([]);
  const [categories, setCategories] = useState([]);

  const values = {
    counter,
    setcounter,
    suppliers,
    setSuppliers,
    categories,
    setCategories,
  };
  return (
    <ProviderContext.Provider value={values}>
      {children}
    </ProviderContext.Provider>
  );
}

export default ContextProvider;