import Logo from "./logo";

export default function Navigation () {
  return (
    <nav className={``}>
      <ul className={`flex flex-col md:flex-row flex-nowrap items-start md:justify-end gap-4`}>
        <li className={`bg-twe_blue-300 text-twe_yellow-300`}>
          <a href="/">Home</a>
        </li>
        <li className={`bg-twe_yellow-300`}>
          <a href="/">Services</a>
        </li>
        <li>
          <a href="/">Blog</a>
        </li>
        <li>
          <a href="/">About Us</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
    </nav>
  )
};