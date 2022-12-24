import style from './slideThree.module.css';

const SlideThree = () => {
  return (
    <div className={style.sliderItem}>
      <div className={style.slideTop}>
        <h3 className={style.slideTitle}>Ночная доставка</h3>
        <p className={style.slideSubTitle}>
          при заказе двух пицц среднего размера и больше
        </p>
        <p className={style.slidePromo}>-30% !</p>
      </div>
      <div className={style.slideBottom}>
        <p className={style.slideDescription}>
          Скидка 30% по <span className={style.bold}>ПРОМОКОДУ NIGHT</span> при
          заказе 2 пицц среднего размера и выше (кроме пицц: Пепперони и
          колбаски, Баварская, Сырный цыпленок, Итальянская, Биф тейсти,
          Украинская, Острая чили, Кантри четыре сезона, Четыре сыра).
        </p>
        <p className={style.slideDescription}>
          Скидка распространяется на пиццу с наименьшей стоимостью.
        </p>
        <p className={style.slideDescription}>
          Акция действует с 23:00 до 02:00 при оформлении заказа на доставку в
          г. Минске.
        </p>
      </div>
    </div>
  );
};

export default SlideThree;
