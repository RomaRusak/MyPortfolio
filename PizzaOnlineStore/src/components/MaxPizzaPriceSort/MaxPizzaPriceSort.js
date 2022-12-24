import style from './maxPizzaPriceSort.module.css';

const MaxPizzaPriceSort = ({
  maxPizzaPriceState,
  setMaxPizzaPriceState,
  inputRangeValue,
  setInputRangeValue,
}) => {
  const inputRangeChange = (e) => {
    setInputRangeValue(e.target.value);
    setMaxPizzaPriceState(e.target.value);
  };

  return (
    <div className={style.sortInputWrapper}>
      <p>Отсортировать по цене</p>
      <input
        type="range"
        onChange={inputRangeChange}
        min={20}
        max={40}
        value={inputRangeValue}
      />
      <p>
        {maxPizzaPriceState == 40
          ? 'все пиццы'
          : `пиццы до ${maxPizzaPriceState} рублей`}
      </p>
    </div>
  );
};

export default MaxPizzaPriceSort;
