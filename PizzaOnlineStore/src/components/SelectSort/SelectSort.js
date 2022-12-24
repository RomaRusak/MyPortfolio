import style from './selectSort.module.css';

const SelectSort = ({ selectSortState, setSelectSortState }) => {
  const selectsValue = [
    { value: 'up', name: 'по возрастанию' },
    { value: 'down', name: 'по убыванию' },
    { value: 'alphabet', name: 'по алфавиту' },
  ];

  return (
    <div className={style.selectsortWrapper}>
      <p>Отсортировать:</p>
      <select
        onChange={(e) => setSelectSortState(e.target.value)}
        value={selectSortState}
      >
        <option disabled className={style.selectsortOption}>
          сортировать:
        </option>
        {selectsValue.map((select, id) => (
          <option
            key={id.toString()}
            value={select.value}
            className={style.selectsortOption}
          >
            {select.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectSort;
