import { AnimatePresence, motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import addPizzaToCart from '../../action/addPizzaToCart';
import removePizzaFromCart from '../../action/removePizzaFromCart';
import cleanCartAll from '../../action/cleanCartAll';
import OrderingWrapper from '../OrderingWrapper/OrderingWrapper';
import style from './cartMainWrapper.module.css';

const CartMainWrapper = () => {
  const data = useSelector((state) => state.pizza);
  const dispatch = useDispatch();

  const addToCart = (name, price, image, id) => {
    dispatch(addPizzaToCart(name, price, image, id));
  };

  const removeFromCart = (id) => {
    dispatch(removePizzaFromCart(id));
  };

  let totalCounter = data
    .reduce((accum, item) => {
      return accum + item.counter;
    }, 0)
    .toFixed(2);

  let totalSumCounter = data
    .reduce((accum, item) => {
      return accum + item.sumCounter;
    }, 0)
    .toFixed(2);

  return (
    <AnimatePresence>
      <motion.div
        className={style.cartMainWrapper}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2 className={style.cartMainTitle}>Оформление заказа:</h2>
        <div className={style.productsIncartContainer}>
          {data
            .sort((pizzaOne, pizzaTwo) => {
              let nameA = pizzaOne.name.toLowerCase();
              let nameB = pizzaTwo.name.toLowerCase();
              if (nameA < nameB) return -1;
              if (nameA > nameB) return 1;
              return 0;
            })
            .map((pizza, index) => {
              return (
                <div
                  key={index + 'cart'}
                  className={style.productInCartWrapper}
                >
                  <h2 className={style.productInCartTitle}>{`${pizza.name} ${
                    pizza.id.includes('Small')
                      ? '(маленькая)'
                      : pizza.id.includes('Big')
                      ? '(большая)'
                      : '(стандартная)'
                  }`}</h2>
                  {/* <div className={style.productInCartImgWrapper}>
                                    <img src={pizza.image} />
                                </div> */}
                  <p className={style.productInCartTotalCounter}>
                    единиц товара в корзине: {pizza.counter}
                  </p>
                  <p className={style.productInCartPriceCounter}>
                    стоимость товара {pizza.sumCounter.toFixed(2)} рублей
                  </p>
                  <div className={style.productInCartButtonsWrapper}>
                    <button
                      onClick={() => {
                        removeFromCart(pizza.id);
                      }}
                    >
                      -
                    </button>
                    <button
                      onClick={() => {
                        addToCart(
                          pizza.name,
                          pizza.price,
                          pizza.image,
                          pizza.id
                        );
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
        {totalCounter > 0 && totalCounter !== undefined ? (
          <div className={style.cartTotalCounters}>
            <h2>всего единиц товара в корзине: {totalCounter} шт.</h2>
            <h2>стоимость товара в корзине: {totalSumCounter} рублей</h2>
            <button
              onClick={() => {
                dispatch(cleanCartAll());
              }}
              className={style.cleanCartButton}
            >
              Очистить корзину
            </button>
          </div>
        ) : (
          <AnimatePresence>
            <motion.div
              className={style.cartEmptyWrapper}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className={style.cartEmptyTitle}>ваша Корзина пуста</h2>
              <div className={style.deliveryConditionContainer}>
                <div className={style.deliveryConditionWrapper}>
                  <p className={style.cartEmptyTime + ' ' + style.orange}>
                    45 Минут
                  </p>
                  <p className={style.deliveryConditionDescription}>
                    или пицца бесплатно <br />{' '}
                    <span className={style.orange}>
                      если мы не доставим заказ за{' '}
                      <span className={style.bold}>60 минут</span>
                    </span>{' '}
                    вы получите одну пиццу из заказа{' '}
                    <span className={style.orange + ' ' + style.bold}>
                      бесплатно
                    </span>
                  </p>
                </div>
              </div>
              <p>
                Минимальная сумма заказа для доставки –{' '}
                <span className={style.bold + ' ' + style.orange}>19.90</span>{' '}
                рублей
              </p>
            </motion.div>
          </AnimatePresence>
        )}
        <OrderingWrapper />
      </motion.div>
    </AnimatePresence>
  );
};

export default CartMainWrapper;
