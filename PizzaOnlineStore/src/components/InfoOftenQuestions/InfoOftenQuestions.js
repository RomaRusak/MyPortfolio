import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import style from './infoOftenQuestions.module.css';
import DeliveryCondition from '../DeliveryCondition/DeliveryCondition';

const InfoOftenQuestions = () => {
  const [questionOne, setQuestionOne] = useState(false);
  const [questionTwo, setQuestionTwo] = useState(false);
  const [questionThree, setQuestionThree] = useState(false);
  const [questionFour, setQuestionFour] = useState(false);
  const [questionFive, setQuestionFive] = useState(false);

  return (
    <AnimatePresence>
      <motion.div
        className={style.infoOftenQuestionsWrapper}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2 className={style.infoOftenQuestionsTitle}>
          Часто задаваемые вопросы:
        </h2>
        <div
          className={style.accordionHead}
          onClick={() => {
            setQuestionOne(!questionOne);
          }}
        >
          В каких странах, городах и под какими брендами мы работаем?
        </div>
        <AnimatePresence>
          {questionOne == true && (
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
                <h3 className={style.accordionTitle}>Ответ:</h3>
                <div className={style.accordionList}>
                  <p>
                    Мы работаем только в Минске и только под брендом суперПицца.
                    Также мы не открывали заведений по франшизе.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div
          className={style.accordionHead}
          onClick={() => {
            setQuestionTwo(!questionTwo);
          }}
        >
          Доставляем ли мы алкоголь и сигареты?
        </div>
        <AnimatePresence>
          {questionTwo == true && (
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
                <h3 className={style.accordionTitle}>Ответ:</h3>
                <div className={style.accordionList}>
                  <p>Мы не доставляем алкоголь и сигареты.</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div
          className={style.accordionHead}
          onClick={() => {
            setQuestionThree(!questionThree);
          }}
        >
          Как работает правило "вовремя или пицца бесплатно" при заказе на
          самовывоз онлайн или через колл-центр?
        </div>
        <AnimatePresence>
          {questionThree == true && (
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
                <h3 className={style.accordionTitle}>Ответ:</h3>
                <div className={style.accordionList}>
                  <p>
                    Если заказ на самовывоз, оформленный онлайн или через
                    колл-центр, не будет готов ко времени, указанному Вами при
                    оформлении заказа, то одну пиццу или другое блюдо с
                    наименьшей ценой из Вашего заказа Вы получите бесплатно.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div
          className={style.accordionHead}
          onClick={() => {
            setQuestionFour(!questionFour);
          }}
        >
          Как можно рассчитаться за заказ?
        </div>
        <AnimatePresence>
          {questionFour == true && (
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
                <h3 className={style.accordionTitle}>Ответ:</h3>
                <div className={style.accordionList}>
                  <p>
                    Мы принимаем белорусские рубли и пластиковые карты. Возможна
                    оплата банковской картой через интернет, а также безналичный
                    расчет.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div
          className={style.accordionHead}
          onClick={() => {
            setQuestionFive(!questionFive);
          }}
        >
          Как подписаться на нас в социальных сетях?
        </div>
        <AnimatePresence>
          {questionFive == true && (
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
                <h3 className={style.accordionTitle}>Ответ:</h3>
                <div className={style.accordionList}>
                  <p>
                    Официальный аккаунт в Инстаграм{' '}
                    <a
                      href="https://www.instagram.com/"
                      target={'_blank'}
                      className={style.instagramLink}
                    >
                      @superPizza
                    </a>
                    .
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <DeliveryCondition />
      </motion.div>
    </AnimatePresence>
  );
};

export default InfoOftenQuestions;
