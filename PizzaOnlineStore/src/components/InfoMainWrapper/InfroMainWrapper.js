import { Outlet } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import NavInfo from '../NavInfo/NavInfo';
import style from './infoMainWrapper.module.css';

const InfoMainWrapper = () => {
  return (
    <div className={style.infoMainWrapper}>
      <CartWidget />
      <NavInfo />
      <Outlet />
    </div>
  );
};

export default InfoMainWrapper;
