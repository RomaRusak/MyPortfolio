import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import style from './nav.module.css';
import setNav from '../../action/setNav';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const Nav = () => {
  const [activeLinkState, setActiveLinkState] = useState('home');
  const [closeMenu, setCloseMenu] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.nav.state);

  useEffect(() => {
    setActiveLinkState(data)
  }, [])

  const menuHandler = () => {
    setCloseMenu(!closeMenu);
  };

  window.addEventListener('resize', (e) => {
    if (e.target.innerWidth < 1024) setCloseMenu(false);
  });

  return (
    <nav className={style.nav}>
      <div className={style.navContainer}>
        <div
          className={closeMenu ? style.burgerMenuClose : style.burgerMenu}
          onClick={menuHandler}
        >
          <span className={style.burgerMenuItem}></span>
          <span className={style.burgerMenuItem}></span>
          <span className={style.burgerMenuItem}></span>
        </div>
        <ul className={closeMenu ? style.navActive : null}>
          <li>
            <Link
              className={
                activeLinkState === 'home'
                  ? style.navLink + ' ' + style.activeNavLink
                  : style.navLink
              }
              to={'/'}
              onClick={() => {
                dispatch(setNav('home'))
                setActiveLinkState('home');
              }}
            >
              Пицца
            </Link>
          </li>
          {/* <li><Link className={activeLinkState === 'pizzas' ? style.navLink + ' ' + style.activeNavLink : style.navLink} to={'pizzas'} onClick={() => {setActiveLinkState('pizzas')}}>О нас</Link></li> */}
          <li>
            <Link
              className={
                activeLinkState === 'info'
                  ? style.navLink + ' ' + style.activeNavLink
                  : style.navLink
              }
              to={'info'}
              onClick={() => {
                dispatch(setNav('info'))
                setActiveLinkState('info');
              }}
            >
              Информация
            </Link>
          </li>
          <li>
            <Link
              className={
                activeLinkState === 'cart'
                  ? style.navLink + ' ' + style.activeNavLink
                  : style.navLink
              }
              to={'cart'}
              onClick={() => {
                dispatch(setNav('cart'))
                setActiveLinkState('cart');
              }}
            >
              Корзина
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
