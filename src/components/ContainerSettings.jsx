import { useVisibility } from "../hooks/useVisibility";
import BtnSettings from "./BtnSettings";
import FormSettings from "./FormSettings";
import ModalForm from "./ModalForm";

const ContainerSettings = () => {
  const { visibility, activeVisibility, hideVisibility } = useVisibility(false);
  return (
    <>
      <section className="container-settings">
        <BtnSettings activeVisibiliy={activeVisibility} />
      </section>
      <ModalForm visibility={visibility}>
        <FormSettings hideVisibility={hideVisibility} />
      </ModalForm>
    </>
  );
};

export default ContainerSettings;
