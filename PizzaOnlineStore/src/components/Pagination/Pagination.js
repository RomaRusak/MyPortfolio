import style from './pagination.module.css';

const Pagination = ({
  pizzaOnCurrentPage,
  totalPizza,
  changeCurrentPage,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPizza / pizzaOnCurrentPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={style.pagintaionWrapper}>
      <ul className={style.pagination}>
        {pageNumbers.map((number, index) => (
          <li
            className={
              number == currentPage
                ? style.pageNumber + ' ' + style.pageNumberActive
                : style.pageNumber
            }
            key={index.toString()}
            onClick={() => {
              changeCurrentPage(number);
            }}
          >
            {number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
