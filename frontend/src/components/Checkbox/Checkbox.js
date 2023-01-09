import React from "react";
import { useState } from "react";
import { Wrapper } from "./Checkbox.styles";

const Checkbox = ({ label }) => {
  const [isChecked, setIsChecked] = useState(true);
  return (
    <Wrapper>
        <input type="checkbox" checked={isChecked} onChange={() => setIsChecked((prev) => !prev)}/>
        <span>{label}</span>
    </Wrapper>
  );
};

export default Checkbox;