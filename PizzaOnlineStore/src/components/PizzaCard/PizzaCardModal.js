import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { motion } from 'framer-motion';
import data from '../../data/data';
import addPizzaToCart from '../../action/addPizzaToCart';
import style from './pizzaCardModal.module.css';
import closeModalIcon from '../../images/closeIcon.png';

const PizzaCardModal = ({ modalId, closeModal }) => {
  let [modalData] = data.filter((item) => item.id == modalId);

  const [pizzaSizeValue, setPizzaSizeValue] = useState('medium');

  const changeValue = (e) => {
    setPizzaSizeValue(e.target.value);
  };

  const dispatch = useDispatch();

  const addToCart = () => {
    closeModal()
    switch (pizzaSizeValue) {
      case 'small':
        return dispatch(
          addPizzaToCart(
            modalData.name,
            modalData.priceSmall,
            modalData.image,
            modalData.idSmall
          )
        );
      case 'medium':
        return dispatch(
          addPizzaToCart(
            modalData.name,
            modalData.price,
            modalData.image,
            modalData.id
          )
        );
      case 'big':
        return dispatch(
          addPizzaToCart(
            modalData.name,
            modalData.priceBig,
            modalData.image,
            modalData.idBig
          )
        );
      default:
    }
  };

  return (
    <div className={style.cartModalWrapper}>
      <motion.div
        className={style.cartModalContainer}
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ x: -20, opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <div className={style.modalTop}>
          <div className={style.closeModalWrapper}>
            <img src={closeModalIcon} onClick={closeModal} />
          </div>
          <h2 className={style.modalTitle}>{modalData.name}</h2>
          <img src={modalData.image} className={style.modalImage} />
          {pizzaSizeValue == 'small' ? (
            <p className={style.modalPrice}>{modalData.priceSmall}</p>
          ) : pizzaSizeValue == 'medium' ? (
            <p className={style.modalPrice}>{modalData.price}</p>
          ) : (
            <p className={style.modalPrice}>{modalData.priceBig}</p>
          )}
        </div>
        <div className={style.modalBottomLeft}>
          <p className={style.modalComposition}>{modalData.composition}</p>
          <form>
            <div>
              <label htmlFor="small">
                <input
                  type="radio"
                  name="size"
                  id="small"
                  value={'small'}
                  onChange={changeValue}
                  checked={pizzaSizeValue == 'small' ? true : false}
                />
                маленькая
              </label>
            </div>
            <div>
              <label htmlFor="medium">
                <input
                  type="radio"
                  name="size"
                  id="medium"
                  value={'medium'}
                  onChange={changeValue}
                  checked={pizzaSizeValue == 'medium' ? true : false}
                />
                средняя
              </label>
            </div>
            <div>
              <label htmlFor="big">
                <input
                  type="radio"
                  name="size"
                  id="big"
                  value={'big'}
                  onChange={changeValue}
                  checked={pizzaSizeValue == 'big' ? true : false}
                />
                большая
              </label>
            </div>
          </form>
          <div className={style.modalButtonWrapper}>
            <button onClick={addToCart}>Добавить в корзину</button>
          </div>
        </div>
        <div className={style.modalBottonRight}>
          <h3>Пищевая ценность продукта</h3>
          <div>
            {pizzaSizeValue == 'small' ? (
              <ul>
                {modalData.calorific.small.map((calories, index) => (
                  <li key={index}>{calories}</li>
                ))}
              </ul>
            ) : pizzaSizeValue == 'medium' ? (
              <ul>
                {modalData.calorific.medium.map((calories, index) => (
                  <li key={index}>{calories}</li>
                ))}
              </ul>
            ) : (
              <ul>
                {modalData.calorific.big.map((calories, index) => (
                  <li key={index}>{calories}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PizzaCardModal;
