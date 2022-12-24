import style from './footer.module.css';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerContainer}>
        <div className={style.footerTitle}>
          <p>Контактные данные</p>
        </div>
        <div className={style.footerInfo}>
          <div className={style.footerInfoContainer}>
            <ul>
              <li>
                <h3>Телефоны / email</h3>
              </li>
              <li>
                +375 29 111 22 33 (A1) <br /> +375 17 444 55 66 (городской)
              </li>
              <li>pizza@gmail.com</li>
            </ul>
          </div>
          <div className={style.footerInfoContainer}>
            <ul>
              <li>
                <h3>Адрес и режим работы</h3>
              </li>
              <li>22030, г.Минск, ул. к. Маркса, 21-14H</li>
              <li>Пн - Пт 10.00 - 21.00</li>
              <li>Сб, Вск 10.00 - 23.00</li>
            </ul>
          </div>
          <div className={style.footerInfoContainer}>
            <ul>
              <li>
                <h3>Режим работы доставки</h3>
              </li>
              <li>Прием заказов через сайт круглосуточно</li>
              <li>
                Пн - Пт 00.00 - 03.00, 10.00 - 24.00
                <br />
                Сб, Вск 00.00 - 04.00, 10.00 - 24.00
              </li>
            </ul>
          </div>
          <div className={style.footerInfoContainer}>
            <ul>
              <li>
                <h3>Реквизиты</h3>
              </li>
              <li>
                Общество с ограниченной ответственностью «СуперПицца», свид-во о
                гос.регистрации Мингорисполком №191422 от 03.11.2011. УНП
                120590313.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
