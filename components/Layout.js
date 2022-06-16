import React from "react";
import SideNav from "./SideNav";

function Layout({ children, ...rest }) {
  return (
    <div className="flex flex-row w-screen h-screen bg-pinkWhite overflow-hidden">
      <div className="w-40">
        <SideNav />
      </div>
      <div {...rest}>{children}</div>
    </div>
  );
}

export default Layout;
