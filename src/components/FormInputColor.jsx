import { useState } from "react";

const FormInputColor = ({ defaultColor }) => {
  const [color, setColor] = useState(defaultColor);
  
  return (
    <>
      <input
        defaultValue={color}
        type="color"
        name="txt-main-color"
        id="txt-main-color"
        onChange={(e) => setColor(e.target.value.toLowerCase())}
      />
    </>
  );
};

export default FormInputColor;
