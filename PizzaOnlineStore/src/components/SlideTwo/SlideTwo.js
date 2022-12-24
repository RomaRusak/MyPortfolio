import style from './slideTwo.module.css';

const SlideTwo = () => {
  return (
    <div className={style.sliderItem}>
      <h3 className={style.slideTitle}>Пицца «Пепперони» в подарок</h3>
      <p className={style.slidePromo}>3 + 1 !</p>
      <p className={style.slideDescription}>
        В любое время закажите любых 3 больших пиццы и получите пиццу
        «Пепперони» 23 см <span className={style.bold}>в ПОДАРОК!</span>
      </p>
    </div>
  );
};

export default SlideTwo;
