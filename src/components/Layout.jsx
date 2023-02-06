import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="w-full h-full overflow-auto ">{children}</div>
    </>
  );
};

export default Layout;