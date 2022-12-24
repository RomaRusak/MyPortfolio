import { useState, useEffect } from 'react';
import data from '../../data/data';
import PizzaCard from '../PizzaCard/PizzaCard';
import Pagination from '../Pagination/Pagination';
import FilterWrapper from '../FilterWrapper/FilterWrapper';
import CartWidget from '../CartWidget/CartWidget';
import style from './pizzasMainWrapper.module.css';

const PizzasMainWrapper = () => {
  const [pizzaAllData, setPizzaAllData] = useState(data);
  const [categoryState, setCategoryState] = useState('all');
  const [maxPizzaPriceState, setMaxPizzaPriceState] = useState(40);
  const [inputRangeValue, setInputRangeValue] = useState(40);
  const [pizzaNameState, setPizzaNameState] = useState('');
  const [selectSortState, setSelectSortState] = useState('up');

  const [currentPage, setCurrentPage] = useState(1);
  const pizzaOnCurrentPage = 6;
  const lastPizzaIndex = currentPage * pizzaOnCurrentPage;
  const firstPizzaIndex = lastPizzaIndex - pizzaOnCurrentPage;
  const currentPizza = pizzaAllData.slice(firstPizzaIndex, lastPizzaIndex);

  const changeCurrentPage = (number) => setCurrentPage(number);

  const sortAllPizzaData = () => {
    if (categoryState === 'all') {
      let newData = data.filter(({ price, name }) => {
        return (
          price < +maxPizzaPriceState &&
          name.toLowerCase().includes(pizzaNameState.toLowerCase())
        );
      });
      return sortBySelectSort(newData);
    }

    let newData = data.filter((pizza) => {
      return (
        pizza[categoryState] &&
        pizza.price < +maxPizzaPriceState &&
        pizza.name.toLowerCase().includes(pizzaNameState.toLowerCase())
      );
    });
    sortBySelectSort(newData);
  };

  useEffect(() => {
    sortAllPizzaData();
  }, [categoryState, maxPizzaPriceState, pizzaNameState]);

  useEffect(() => {
    sortBySelectSort();
  }, [selectSortState]);

  const sortBySelectSort = (newData) => {
    if (newData == undefined) newData = [...pizzaAllData];

    switch (selectSortState) {
      case 'up':
        {
          newData.sort((pizzaOne, pizzaTwo) => {
            return pizzaOne.price - pizzaTwo.price;
          });
          setPizzaAllData(newData);
        }
        break;
      case 'down':
        {
          newData.sort((pizzaOne, pizzaTwo) => {
            return pizzaTwo.price - pizzaOne.price;
          });
          setPizzaAllData(newData);
        }
        break;
      case 'alphabet':
        {
          newData.sort((pizzaOne, pizzaTwo) => {
            let nameA = pizzaOne.name.toLowerCase();
            let nameB = pizzaTwo.name.toLowerCase();
            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
            return 0;
          });
          setPizzaAllData(newData);
        }
        break;
    }
  };

  const setters = {
    setMaxPizzaPriceState,
    setInputRangeValue,
    setPizzaNameState,
    setCurrentPage,
  };

  const propsForFilter = {
    categoryState,
    setCategoryState,
    setters,
    maxPizzaPriceState,
    setMaxPizzaPriceState,
    inputRangeValue,
    setInputRangeValue,
    pizzaNameState,
    setPizzaNameState,
    setCurrentPage,
    selectSortState,
    setSelectSortState,
  };

  return (
    <div className={style.pizzasMainWrapper}>
      <CartWidget />
      <FilterWrapper propsForFilter={propsForFilter} />
      <PizzaCard data={currentPizza} />
      {pizzaAllData.length > pizzaOnCurrentPage && (
        <Pagination
          pizzaOnCurrentPage={pizzaOnCurrentPage}
          totalPizza={pizzaAllData.length}
          changeCurrentPage={changeCurrentPage}
          currentPage={currentPage}
        />
      )}
    </div>
  );
};

export default PizzasMainWrapper;
