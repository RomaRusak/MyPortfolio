import style from './categorySort.module.css';

const CategorySort = ({
  categoryState,
  setCategoryState,
  setters,
  setShowFilter,
}) => {
  const {
    setMaxPizzaPriceState,
    setInputRangeValue,
    setPizzaNameState,
    setCurrentPage,
  } = setters;

  const categoryClassTogle = (category) => {
    setCategoryState(category);
    setMaxPizzaPriceState(40);
    setInputRangeValue(40);
    setPizzaNameState('');
    setCurrentPage(1);
  };

  return (
    <ul className={style.categorySortList}>
      <li
        onClick={() => {
          categoryClassTogle('all');
        }}
        className={
          categoryState == 'all'
            ? style.categoryLink + ' ' + style.activeCategoryLink
            : style.categoryLink
        }
      >
        {'все'}
      </li>
      <li
        onClick={() => {
          categoryClassTogle('withoutMushrooms');
        }}
        className={
          categoryState == 'withoutMushrooms'
            ? style.categoryLink + ' ' + style.activeCategoryLink
            : style.categoryLink
        }
      >
        {'без грибов'}
      </li>
      <li
        onClick={() => {
          categoryClassTogle('withoutOlives');
        }}
        className={
          categoryState == 'withoutOlives'
            ? style.categoryLink + ' ' + style.activeCategoryLink
            : style.categoryLink
        }
      >
        {'без оливок'}
      </li>
      <li
        onClick={() => {
          categoryClassTogle('withoutCucumbers');
        }}
        className={
          categoryState == 'withoutCucumbers'
            ? style.categoryLink + ' ' + style.activeCategoryLink
            : style.categoryLink
        }
      >
        {'без огурцов'}
      </li>
      <li
        onClick={() => {
          categoryClassTogle('light');
        }}
        className={
          categoryState == 'light'
            ? style.categoryLink + ' ' + style.activeCategoryLink
            : style.categoryLink
        }
      >
        {'легкая'}
      </li>
      <li
        onClick={() => {
          categoryClassTogle('hot');
        }}
        className={
          categoryState == 'hot'
            ? style.categoryLink + ' ' + style.activeCategoryLink
            : style.categoryLink
        }
      >
        {'острая'}
      </li>
      <li>
        <div
          className={style.closeFiltersWrapper}
          onClick={() => {
            setShowFilter(false);
          }}
        >
          скрыть фильтры
        </div>
      </li>
    </ul>
  );
};

export default CategorySort;
