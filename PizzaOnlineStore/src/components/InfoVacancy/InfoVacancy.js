import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import DeliveryCondition from '../DeliveryCondition/DeliveryCondition';
import style from './infoVacancy.module.css';

const InfoVacancy = () => {
  const [categoryCook, setCategoryCook] = useState(false);
  const [categoryDriver, setCategoryDriver] = useState(false);
  const [categoryCleaner, setCategoryCleaner] = useState(false);

  return (
    <AnimatePresence>
      <motion.div
        className={style.infoVacancyWrapper}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2 className={style.infoVacancyTitle}>Наши вакансии:</h2>
        <div
          className={style.accordionHead}
          onClick={() => {
            setCategoryCook(!categoryCook);
          }}
        >
          Повар
        </div>
        <AnimatePresence>
          {categoryCook == true && (
            <motion.div
              className={style.accordionBody}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeIn' }}
            >
              <div
                className={style.marginBottom + ' ' + style.accordionSection}
              >
                <h3 className={style.accordionTitle}>Условия:</h3>
                <ul className={style.accordionList}>
                  <li>полное обучение на рабочем месте «с нуля»</li>
                  <li>индивидуальное обучение и сопровождение</li>
                  <li>
                    1200-1300 рублей на руки за 180 часов уже в первый месяц
                    работы
                  </li>
                  <li>аванс в размере 300 рублей после 5 рабочих смен</li>
                  <li>возможность быстрого карьерного роста</li>
                </ul>
              </div>
              <div
                className={style.marginBottom + ' ' + style.accordionSection}
              >
                <h3 className={style.accordionTitle}>Работа:</h3>
                <ul className={style.accordionList}>
                  <li>готовить пиццу и закуски</li>
                  <li>
                    поддерживать оптимальное количество заготовок в течение
                    рабочего дня
                  </li>
                  <li>соблюдать правила санитарии и личной гигиены</li>
                </ul>
              </div>
              <div className={style.accordionSection}>
                <h3 className={style.accordionTitle}>
                  Что нужно для трудоустройства:
                </h3>
                <ul className={style.accordionList}>
                  <li>санитарная справка или готовность ее сделать</li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div
          className={style.accordionHead}
          onClick={() => {
            setCategoryDriver(!categoryDriver);
          }}
        >
          Водитель
        </div>
        <AnimatePresence>
          {categoryDriver == true && (
            <motion.div
              className={style.accordionBody}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeIn' }}
            >
              <div
                className={style.marginBottom + ' ' + style.accordionSection}
              >
                <h3 className={style.accordionTitle}>Условия:</h3>
                <ul className={style.accordionList}>
                  <li>
                    гарантированная оплата стажировки уже через 4 дня - минимум
                    300 рублей на руки
                  </li>
                  <li>
                    стоимость одной доставки: Фрунзенский, Московский, Советский
                    и Первомайский район - 4,3 рубля на руки; Центральный район
                    - 4,4-4,5 рубля на руки; Октябрьский и Ленинский район - 4,5
                    рубля на руки; Заводской район - 4,6 рубля на руки в
                    зависимости от объекта работы
                  </li>
                  <li>от 2 до 6 доставок за выезд, в среднем 1 выезд в час</li>
                  <li>
                    от 8 до 27 рублей за выезд, от 90 до 260 рублей за смену
                    (20-60 доставок)
                  </li>
                  <li>
                    средний доход 2850 рублей в месяц, максимальный - до 6300
                    рублей в месяц
                  </li>
                </ul>
              </div>
              <div
                className={style.marginBottom + ' ' + style.accordionSection}
              >
                <h3 className={style.accordionTitle}>Работа:</h3>
                <ul className={style.accordionList}>
                  <li>доставка заказов на небольшие расстояния</li>
                  <li>без опыта - быстрое обучение</li>
                </ul>
              </div>
              <div className={style.accordionSection}>
                <h3 className={style.accordionTitle}>
                  Что нужно для трудоустройства:
                </h3>
                <ul className={style.accordionList}>
                  <li>
                    наличие личного авто в исправном техническом состоянии,
                    отсутствие внешних дефектов автомобиля
                  </li>
                  <li>наличие смартфона</li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div
          className={style.accordionHead}
          onClick={() => {
            setCategoryCleaner(!categoryCleaner);
          }}
        >
          Администратор клининга
        </div>
        <AnimatePresence>
          {categoryCleaner == true && (
            <motion.div
              className={style.accordionBody}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeIn' }}
            >
              <div
                className={style.marginBottom + ' ' + style.accordionSection}
              >
                <h3 className={style.accordionTitle}>Условия:</h3>
                <ul className={style.accordionList}>
                  <li>своевременная выплата заработной платы</li>
                  <li>скидка 50% на питание</li>
                  <li>
                    график работы: 2 ночные (пн, ср. 23:30-9:00) и 3 утренние
                    (3-4 часа с 6.00/7.00) смены
                  </li>
                  <li>разъездной характер работы</li>
                  <li>компенсация топлива</li>
                </ul>
              </div>
              <div
                className={style.marginBottom + ' ' + style.accordionSection}
              >
                <h3 className={style.accordionTitle}>Работа:</h3>
                <ul className={style.accordionList}>
                  <li>обучение сотрудников</li>
                  <li>
                    организация процесса и контроль качества уборки на объектах
                  </li>
                  <li>оказание помощи в уборке</li>
                  <li>управление обслуживающим персоналом</li>
                  <li>
                    оперативное решение рабочих вопросов, замена сотрудника во
                    время отсутствия
                  </li>
                </ul>
              </div>
              <div className={style.accordionSection}>
                <h3 className={style.accordionTitle}>
                  Что нужно для трудоустройства:
                </h3>
                <ul className={style.accordionList}>
                  <li>активная жизненная позиция</li>
                  <li>
                    организаторские способности, стрессоустойчивость,
                    коммуникабельность
                  </li>
                  <li>высокий уровень ответственности</li>
                  <li>умение находить общий язык с людьми</li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <DeliveryCondition />
      </motion.div>
    </AnimatePresence>
  );
};

export default InfoVacancy;
