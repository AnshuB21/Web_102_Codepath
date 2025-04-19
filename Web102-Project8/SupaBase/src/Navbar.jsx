import { Link, Outlet } from "react-router-dom";
//we use outliers
export const Navbar = () => {
  return (
    <div>
      <nav className="Navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/create"> Create </Link>
          </li>
          <li>
            <Link to="/get">Get</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};
