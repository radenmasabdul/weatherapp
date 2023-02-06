import React from "react";
import Navbar from "./Navbar";
import Content from "./Content";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Content />
      <div className="w-full h-full overflow-auto ">{children}</div>
    </>
  );
};

export default Layout;
