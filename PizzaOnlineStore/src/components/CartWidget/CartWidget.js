import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import style from './cartWidget.module.css';
import cartWidgetIcon from '../../images/cartWidgetIcon.png';

const CartWidget = () => {
  const items = useSelector((state) => state.pizza);

  let counter = items.reduce((accum, { counter }) => {
    return accum + counter;
  }, 0);

  let sumCountertWidget = items
    .reduce((accum, { sumCounter }) => {
      return accum + sumCounter;
    }, 0)
    .toFixed(2);

  return (
    <Link to={'/cart'}>
      <div className={style.cartWidgetWrapper}>
        <div className={style.cartWidgetImgWrapper}>
          <img src={cartWidgetIcon} />
        </div>
        <h4>{counter == 0 ? 'Корзина пуста' : `единиц товара: ${counter}`}</h4>
        <h4>{sumCountertWidget > 0 && `сумма заказа: ${sumCountertWidget}`}</h4>
      </div>
    </Link>
  );
};

export default CartWidget;
