import style from './pizzaNameSort.module.css';
import searchIcon from '../../images/searchIcon.png';

const PizzaNameSort = ({ name, setPizzaName, setCurrentPage }) => {
  const changeName = (value) => {
    setCurrentPage(1);
    setPizzaName(value);
  };

  return (
    <div className={style.searchWrapper}>
      <div className={style.inputSearchWrapper}>
        <input
          type="text"
          placeholder="введите название пиццы"
          value={name}
          onChange={(e) => changeName(e.target.value)}
        />
        <img src={searchIcon} alt="" />
      </div>
    </div>
  );
};

export default PizzaNameSort;
