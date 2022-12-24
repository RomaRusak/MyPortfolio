import { useSelector } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import addPizzaToCart from '../../action/addPizzaToCart';
import removePizzaFromCart from '../../action/removePizzaFromCart';
import style from './pizzaCartInner.module.css';

const PizzaCartInner = ({ name, price, img, id, openModal }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addPizzaToCart(name, price, img, id));
  };

  const addToCartFromInfroButton = (name, price, img, id) => {
    dispatch(addPizzaToCart(name, price, img, id));
  };

  const removePizzaFromInfoButton = (id) => {
    dispatch(removePizzaFromCart(id));
  };

  const pizzaInCart = useSelector((data) => data.pizza);
  let pizzaSelected = pizzaInCart.filter((pizza) => {
    return pizza.id.includes(id);
  });

  pizzaSelected.sort((pizzaOne, pizzaTwo) => pizzaOne.price - pizzaTwo.price);
  return (
    <motion.div
      initial={{ opacity: 0.7 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.55, ease: 'easeIn' }}
      className={style.pizzaCartInnerWrapper}
    >
      <div
        onClick={() => {
          openModal(id);
        }}
      >
        <h2 className={style.pizzaCartInnerTitle}>{name}</h2>
        <p className={style.pizzaCartInnerPrice}>{price}</p>
        <img src={img} />
      </div>
      <button onClick={addToCart} className={style.pizzaCartInnerButton}>
        Добавить в корзину
      </button>
      <div className={style.pizzaCartInfoBlockWrapper}>
        <AnimatePresence>
          {pizzaSelected.map((pizza, index) => {
            return pizza.id.includes('Small') ? (
              <motion.div
                className={style.pizzaCartInfoBlock}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                key={pizza.id.toString()}
              >
                <h3 className={style.pizzaCartInfoBlockTitle}>
                  маленькая пицца
                </h3>
                <button
                  onClick={() => {
                    removePizzaFromInfoButton(pizza.id);
                  }}
                >
                  -
                </button>
                <h3 className={style.pizzaCartInfoBlockCounter}>
                  {pizza.counter}
                </h3>
                <button
                  onClick={() => {
                    addToCartFromInfroButton(
                      pizza.name,
                      pizza.price,
                      pizza.image,
                      pizza.id
                    );
                  }}
                >
                  +
                </button>
              </motion.div>
            ) : pizza.id.includes('Big') ? (
              <motion.div
                className={style.pizzaCartInfoBlock}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                key={pizza.id.toString()}
              >
                <h3 className={style.pizzaCartInfoBlockTitle}>большая пицца</h3>
                <button
                  onClick={() => {
                    removePizzaFromInfoButton(pizza.id);
                  }}
                >
                  -
                </button>
                <h3 className={style.pizzaCartInfoBlockCounter}>
                  {pizza.counter}
                </h3>
                <button
                  onClick={() => {
                    addToCartFromInfroButton(
                      pizza.name,
                      pizza.price,
                      pizza.image,
                      pizza.id
                    );
                  }}
                >
                  +
                </button>
              </motion.div>
            ) : (
              <motion.div
                className={style.pizzaCartInfoBlock}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                key={pizza.id.toString()}
              >
                <h3 className={style.pizzaCartInfoBlockTitle}>средняя пицца</h3>
                <button
                  onClick={() => {
                    removePizzaFromInfoButton(pizza.id);
                  }}
                >
                  -
                </button>
                <h3 className={style.pizzaCartInfoBlockCounter}>
                  {pizza.counter}
                </h3>
                <button
                  onClick={() => {
                    addToCartFromInfroButton(
                      pizza.name,
                      pizza.price,
                      pizza.image,
                      pizza.id
                    );
                  }}
                >
                  +
                </button>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default PizzaCartInner;
