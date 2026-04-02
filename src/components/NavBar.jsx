import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="nav-wrapper">
      <h1 className="logo">🍎 FoodFacts</h1>

      <nav className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/saved">Saved</NavLink>
      </nav>
    </div>
  );
}

export default NavBar;