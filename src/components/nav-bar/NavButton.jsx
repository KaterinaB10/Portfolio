import { NavLink } from "react-router-dom";

export function NavButton(property) {
  return <NavLink to={property.link}>{property.title}</NavLink>;
}
