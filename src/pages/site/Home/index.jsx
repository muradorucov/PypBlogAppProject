import React, { useContext } from "react";
import {ProviderContext} from "../../../context/ContextProvider";

function Home() {
  
  const {counter} = useContext(ProviderContext)
  
  return<>
   <div>Home {counter}</div>
  </>;
}

export default Home;
