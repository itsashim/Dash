import React from "react";
import { createPortal } from "react-dom";

const Portal = (Component) => (props) => {
  return createPortal(
    <Component {...props} />,
    document.querySelector("#modal-root")
  );
};
export default Portal;
