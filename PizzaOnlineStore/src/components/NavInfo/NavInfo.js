import { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './navInfo.module.css';
import { motion, AnimatePresence } from 'framer-motion';

const NavInfo = () => {
  const [activeLinkState, setActiveLinkState] = useState('info');

  return (
    <AnimatePresence>
      <motion.nav
        className={style.navInfo}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <Link
          to={'/info'}
          className={
            activeLinkState === 'info'
              ? style.navInfoLink + ' ' + style.activeNavInfoLink
              : style.navInfoLink
          }
          onClick={() => {
            setActiveLinkState('info');
          }}
        >
          Часто задаваемые вопросы
        </Link>
        <Link
          to={'vacancy'}
          className={
            activeLinkState === 'vacancy'
              ? style.navInfoLink + ' ' + style.activeNavInfoLink
              : style.navInfoLink
          }
          onClick={() => {
            setActiveLinkState('vacancy');
          }}
        >
          Наши вакансии
        </Link>
        <Link
          to={'promotions'}
          className={
            activeLinkState === 'promotions'
              ? style.navInfoLink + ' ' + style.activeNavInfoLink
              : style.navInfoLink
          }
          onClick={() => {
            setActiveLinkState('promotions');
          }}
        >
          Наши акции
        </Link>
      </motion.nav>
    </AnimatePresence>
  );
};

export default NavInfo;
