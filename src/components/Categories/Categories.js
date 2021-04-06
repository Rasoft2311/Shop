import ProductsIcon from '@assets/icons/products-icon.svg';
import MeatIcon from '@assets/icons/meat-icon.svg';
import DrinksIcon from '@assets/icons/drinks-icon.svg';
import SauceIcon from '@assets/icons/sauce-icon.svg';
import BakeryIcon from '@assets/icons/bakery-icon.svg';
import PropTypes from 'prop-types';
import './Categories.scss';

export const Categories = ({ extendedClass }) => ((
  <nav className={`categories container ${extendedClass}`}>
    <ul className="categories__list">
      <li className="categories__list-item categories__list-item--active">
        <button data-type="Всі" className="categories__button" type="button" name="button">
          <span className="categories__name">Всі продукти</span>
          <span className="categories__image">
            <ProductsIcon />
          </span>
        </button>
      </li>
      <li className="categories__list-item">
        <button data-type="М'ясо" className="categories__button" type="button" name="button">
          <span className="categories__name">М&apos;ясо</span>
          <span className="categories__image">
            <MeatIcon />
          </span>
        </button>
      </li>
      <li className="categories__list-item">
        <button data-type="Випічка" className="categories__button" type="button" name="button">
          <span className="categories__name">Випічка</span>
          <span className="categories__image">
            <BakeryIcon />
          </span>
        </button>
      </li>
      <li className="categories__list-item">
        <button data-type="Напої" className="categories__button" type="button" name="button">
          <span className="categories__name">Напої</span>
          <span className="categories__image">
            <DrinksIcon />
          </span>
        </button>
      </li>
      <li className="categories__list-item">
        <button data-type="Соус" className="categories__button" type="button" name="button">
          <span className="categories__name">Соуси</span>
          <span className="categories__image">
            <SauceIcon />
          </span>
        </button>
      </li>
    </ul>
  </nav>
));

Categories.propTypes = {
  extendedClass: PropTypes.string
};