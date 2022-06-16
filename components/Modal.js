import React from "react";
import Portal from "./Portal";
import { MdOutlineCancel } from "react-icons/md";
function Modal({ clickHanlder, cooridinates, style, children, ...rest }) {
  return (
    <div
      className={`absolute rounded-xl	 ${style}}`}
      style={{ ...cooridinates }}
      {...rest}
    >
      <MdOutlineCancel
        size={30}
        className="float-right text-black pr-2 pt-2 cursor-pointer"
        title="close"
        onClick={clickHanlder}
      />
      {children}
    </div>
  );
}

export default Portal(Modal);
