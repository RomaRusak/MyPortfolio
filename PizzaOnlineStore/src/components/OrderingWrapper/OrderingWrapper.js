import { useState } from 'react';
import {motion} from 'framer-motion'
import style from './orderingWrapper.module.css';

const OrderingWrapper = () => {
  const [orderingValue, setOrderingValue] = useState({
    street: '',
    homeNumber: '',
    flatNumber: '',
    floor: '',
    entrance: '',
    doorCode: '',
    city: 'default',
  });

  const formHandler = (value, name) => {
    setOrderingValue({ ...orderingValue, [name]: value });
  };

  const [deliveryState, setDeliveryState] = useState('');
  const [paymentState, setPaymentState] = useState('');

  return (
    <div className={style.orderingWrapper}>
      <div className={style.orderingContainer}>
        <div className={style.addressInfro}>
          <h3>Адрес доставки:</h3>
          <form className={style.addressForm}>
            <select
              name="city"
              value={orderingValue.city}
              onChange={(e) => {
                formHandler(e.target.value, e.target.name);
              }}
            >
              <option disabled value="default">
                Ваш город:
              </option>
              <option value="Брест">Брест</option>
              <option value="Витебск">Витебск</option>
              <option value="Гомель">Гомель</option>
              <option value="Гродно">Гродно</option>
              <option value="Минск">Минск</option>
              <option value="Гродно">Могилев</option>
            </select>
            <input
              type="text"
              name="street"
              placeholder={'Улица'}
              value={orderingValue.street}
              onChange={(e) => {
                formHandler(e.target.value, e.target.name);
              }}
            />
            <input
              type="text"
              name="homeNumber"
              placeholder={'Номер дома'}
              value={orderingValue.homeNumber}
              onChange={(e) => {
                formHandler(e.target.value, e.target.name);
              }}
            />
            <input
              type="text"
              name="flatNumber"
              placeholder={'Квартира'}
              value={orderingValue.flatNumber}
              onChange={(e) => {
                formHandler(e.target.value, e.target.name);
              }}
            />
            <input
              type="text"
              name="floor"
              placeholder={'Этаж'}
              value={orderingValue.floor}
              onChange={(e) => {
                formHandler(e.target.value, e.target.name);
              }}
            />
            <input
              type="text"
              name="entrance"
              placeholder={'Подъезд'}
              value={orderingValue.entrance}
              onChange={(e) => {
                formHandler(e.target.value, e.target.name);
              }}
            />
            <input
              type="text"
              name="doorCode"
              placeholder={'Код двери'}
              value={orderingValue.doorCode}
              onChange={(e) => {
                formHandler(e.target.value, e.target.name);
              }}
            />
          </form>
        </div>
        <div className={style.deliveryInfo}>
          <h3>Доставка:</h3>
          <div className={style.deliveryContainer}>
            <div className={style.deliveryWrapper}>
              <div
                className={
                  deliveryState === 'default'
                    ? style.deliveryInnerBlock +
                      ' ' +
                      style.deliveryInnerBlockActive
                    : style.deliveryInnerBlock
                }
                onClick={() => {
                  setDeliveryState('default');
                }}
              >
                Привезите как обычно
              </div>
              <div
                className={
                  deliveryState === 'withoutContacts'
                    ? style.deliveryInnerBlock +
                      ' ' +
                      style.deliveryInnerBlockActive
                    : style.deliveryInnerBlock
                }
                onClick={() => {
                  setDeliveryState('withoutContacts');
                }}
              >
                Доставка без контакта с курьером
              </div>
            </div>
          </div>
        </div>
        <div className={style.deliveryPayment}>
          <h3>Способ оплаты:</h3>
          <div className={style.deliveryPaymentContainer}>
            <div className={style.deliveryPaymentWrapper}>
              <div
                className={
                  paymentState == 'cash'
                    ? style.deliveryPaymentInnerBlock +
                      ' ' +
                      style.deliveryPaymentInnerBlockActive
                    : style.deliveryPaymentInnerBlock
                }
                onClick={() => {
                  setPaymentState('cash');
                }}
              >
                Наличными
              </div>
              <div
                className={
                  paymentState == 'card'
                    ? style.deliveryPaymentInnerBlock +
                      ' ' +
                      style.deliveryPaymentInnerBlockActive
                    : style.deliveryPaymentInnerBlock
                }
                onClick={() => {
                  setPaymentState('card');
                }}
              >
                Картой
              </div>
              <div
                className={
                  paymentState == 'online'
                    ? style.deliveryPaymentInnerBlock +
                      ' ' +
                      style.deliveryPaymentInnerBlockActive
                    : style.deliveryPaymentInnerBlock
                }
                onClick={() => {
                  setPaymentState('online');
                }}
              >
                Онлайн
              </div>
              <div
                className={
                  paymentState == 'halva'
                    ? style.deliveryPaymentInnerBlock +
                      ' ' +
                      style.deliveryPaymentInnerBlockActive
                    : style.deliveryPaymentInnerBlock
                }
                onClick={() => {
                  setPaymentState('halva');
                }}
              >
                Халва
              </div>
            </div>
          </div>
        </div>
        <div className={style.buttonPayWrapper}>
          <motion.button className={style.buttonPay} initial={{x: 50, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: .2}} viewport={{amount: .2, once: true}}>
            Оплатить
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default OrderingWrapper;
