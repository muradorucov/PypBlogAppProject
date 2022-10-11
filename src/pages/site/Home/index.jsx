import React, { useContext, useEffect } from "react";
import {ProviderContext} from "../../../context/ContextProvider";
import { categoryNetwork } from "../../../services/network/requests/categoryNetwork";

function Home() {
  useEffect(() => {
    categoryNetwork.getAllCategories()
  }, [])
  
  const {counter} = useContext(ProviderContext)
  console.log();
  
  return<>
   <div>Home {counter}</div>
  </>;
}

export default Home;
