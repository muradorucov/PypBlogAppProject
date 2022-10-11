import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Mycomponents/layouts/navbar";

function Root() {
  return (
    <div>
      <Navbar/>
      <Outlet />
    </div>
  );
}

export default Root;
