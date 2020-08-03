import React, { useState } from "react";

const DropDownList = ({ data, onSelect, changeOpen }) => {
  return (
    <ul>
      {data.map((singleData) => {
        return (
          <li
            key={singleData.id}
            onClick={() => {
              changeOpen(false);
              onSelect({ data: singleData.data, id: singleData.id });
            }}
          >
            {singleData.data}
          </li>
        );
      })}
    </ul>
  );
};

const Dropdown = (props) => {
  const { data } = props;

  const [isOpen, changeOpen] = useState(false);
  const [selectedVal, changeSelectedVal] = useState({
    data: "Please Select",
    id: 0,
  });

  const otherVals = data.map((val, index) => {
    return {
      data: val,
      id: index + 1,
    };
  });

  return (
    <div>
      <span
        onClick={() => {
          changeOpen(!isOpen);
        }}
      >
        {selectedVal.data}
      </span>
      {isOpen && (
        <DropDownList
          data={otherVals}
          onSelect={changeSelectedVal}
          changeOpen={changeOpen}
        />
      )}
      <span>{props.title}</span>
    </div>
  );
};

export default Dropdown;
