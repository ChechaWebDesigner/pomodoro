const ModalForm = ({ children, visibility }) => {
  return (
    <section className={`container-modal ${!visibility ? "hidden" : "active"}`}>
      {children}
    </section>
  );
};

export default ModalForm;
