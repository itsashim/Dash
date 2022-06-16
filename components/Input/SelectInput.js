import React from "react";

function SelectInput({ option }) {
  option = [
    {
      value: "haha",
      label: "naha",
    },
    {
      value: "ha3ha",
      label: "na3ha",
    },
    {
      value: "ha3ha",
      label: "na3ha",
    },
  ];

  return (
    <select className="form-control">
      {option.map((item, index) => {
        return (
          <option key={index} value={item.value}>
            {item.label}
          </option>
        );
      })}
    </select>
  );
}

export default SelectInput;
