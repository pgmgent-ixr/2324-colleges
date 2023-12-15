// Import external modules
import { Link } from "react-router-dom";

// Import custom modules
import Logo from "./logo";
import { ROUTES } from "../../routes";

export default function Navigation () {
  return (
    <nav className={``}>
      <ul className={`flex flex-col md:flex-row flex-nowrap items-start md:justify-end gap-4`}>
        <li className={``}>
          <Link to={ROUTES.Home}>Home</Link>
        </li>
        <li className={``}>
          <Link to={ROUTES.Blog}>Blog</Link>
        </li>
        <li>
          <Link to={ROUTES.About}>About</Link>
        </li>
        <li>
          <Link to={ROUTES.Contact}>Contact</Link>
        </li>
      </ul>
    </nav>
  )
};