import style from './deliveryCondition.module.css';

const DeliveryCondition = () => {
  return (
    <div className={style.deliveryConditionContainer}>
      <div className={style.deliveryConditionWrapper}>
        <p className={style.cartEmptyTime + ' ' + style.orange}>45 Минут</p>
        <p className={style.deliveryConditionDescription}>
          или пицца бесплатно <br />{' '}
          <span className={style.orange}>
            если мы не доставим заказ за{' '}
            <span className={style.bold}>60 минут</span>
          </span>{' '}
          вы получите одну пиццу из заказа{' '}
          <span className={style.orange + ' ' + style.bold}>бесплатно</span>
        </p>
        <p>
          Минимальная сумма заказа для доставки –{' '}
          <span className={style.bold + ' ' + style.orange}>19.90</span> рублей
        </p>
      </div>
    </div>
  );
};

export default DeliveryCondition;
