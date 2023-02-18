import { NavLink as Link } from "react-router-dom";

const NavLink = ({ to, text }) => {
  return (
    <Link
      to={to}
      className={`btn-time-mode ${({ isActive }) =>
        isActive ? "active" : undefined}`}
    >
      {text}
    </Link>
  );
};

export default NavLink;
