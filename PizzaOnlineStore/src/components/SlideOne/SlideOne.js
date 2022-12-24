import style from './slideOne.module.css';

const SlideOne = () => {
  return (
    <div className={style.sliderItem}>
      <div className={style.slideTop}>
        <h3 className={style.slideTitle}>
          Покупайте две пиццы, а третью получайте в ПОДАРОК!
        </h3>
        <p className={style.slideSubTitle}>
          Акция на все пиццы 30 см каждую ночь со среды на четверг с 23.00 до
          02.00.
        </p>
        <p className={style.slidePromo}>1 + 1 = 3 !</p>
      </div>
      <p className={style.slideDescription}>
        Покупайте две пиццы, а третью получайте{' '}
        <span className={style.bold}>в ПОДАРОК!</span> Акция распространяется на
        все средние пиццы. В подарок выдается пицца с меньшей стоимостью. Скидка
        не распространяется на дополнительные ингредиенты. Заказ на доставку
        можно оформить на сайте и в мобильном приложении. Акция действует при
        заказе только на доставку каждую ночь со среды на четверг с 23.00 до
        02.00. <span className={style.bold}>ПРОМОКОД NIGHT</span>
      </p>
    </div>
  );
};

export default SlideOne;
