import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes';

export default function Logo () {
  return (
    <>
      <Link to={ROUTES.Home} className={`flex flex-row flex-nowrap items-center`}>
        <img className={`mr-4`} src="https://via.placeholder.com/48" alt="Logo" />
        <span className={``}>Tweakers</span>
      </Link>
    </>
  )
};