import NavLink from "./NavLink";

const NavTime = () => {
  return (
    <section className="time-mode">
      <NavLink to="/" text="pomodoro" />
      <NavLink to="/short-break" text="short break" />
      <NavLink to="/long-break" text="long break" />
    </section>
  );
};

export default NavTime;
