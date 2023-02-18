import IconSettings from "./IconSettings";

const BtnSettings = ({ activeVisibiliy }) => {
  return (
    <button className="btn-settings" onClick={activeVisibiliy}>
      <IconSettings />
    </button>
  );
};

export default BtnSettings;
