import { useState } from "react";

export const useVisibility = ({ initialVisibility = false }) => {
  const [visibility, setVisibility] = useState(initialVisibility);

  const activeVisibility = () => setVisibility(true);
  const hideVisibility = () => setVisibility(false);
  const toggleVisibility = () => setVisibility(prevVisibility => !prevVisibility);

  return {
    visibility,
    activeVisibility,
    hideVisibility,
    toggleVisibility,
  };
};
