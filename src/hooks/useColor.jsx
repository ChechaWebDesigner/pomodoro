import { useEffect, useState } from "react";

let mainColor =
  getComputedStyle(document.body).getPropertyValue("--bg-main-color") ||
  "#ff7b54";

mainColor = mainColor.toLowerCase();

const initialColor = localStorage.getItem("mainColor");

export const useColor = () => {
  const [color, setColor] = useState(initialColor ?? mainColor);

  useEffect(() => {
    if (localStorage.getItem("mainColor")) {
      document.body.style.setProperty(
        "--bg-main-color",
        localStorage.getItem("mainColor")
      );
      return;
    }

    localStorage.setItem("mainColor", mainColor);
  }, []);

  const handleColor = (newColor) => {
    setColor(newColor);
  };

  return {
    color,
    handleColor,
  };
};
