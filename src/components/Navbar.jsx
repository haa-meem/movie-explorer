import { Link } from "react-router";

export default function Navbar() {
  return (
    <div className="navbar bg-gradient-to-r from-neutral via-neutral/95 to-slate-900 text-neutral-content shadow-md">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          Movie Explorer
        </Link>
      </div>

      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
