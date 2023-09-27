import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { NavigationTypes } from "../utils/types";

const NavigationLink = ({ to, page }: NavigationTypes) => {
  const location = useLocation();
  const navigate = useNavigate();

  function pathMatchOut(route: string) {
    if (route === location.pathname) return true;
  }
  return (
    <NavLink
      to={to}
      onClick={() => navigate(to)}
      className={`text-white border-b-[3px] text-lg font-medium ${
        pathMatchOut(to) ? "border-red-500" : "border-transparent"
      }`}
    >
      {page}
    </NavLink>
  );
};

export default NavigationLink;
