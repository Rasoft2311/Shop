import BasketIcon from '@assets/icons/basket-icon.svg';
import BlackShopLogo from '@assets/icons/black-shop-logo.svg';
import BurgerButtonIcon from '@assets/icons/burger-button-icon.svg';
import CloseButtonIcon from '@assets/icons/close-button-icon.svg';
import FacebookLogo from '@assets/icons/facebook-logo.svg';
import InstagramLogo from '@assets/icons/instagram-logo.svg';
import TwitterLogo from '@assets/icons/twitter-logo.svg';
import WhiteShopLogo from '@assets/icons/white-shop-logo.svg';
import { Categories } from '../Categories';
import './Header.scss';

export const Header = () => ((
  <header className="header">
    <div className="header__inner container">
        <div className="header__socials header__el header__socials--non-mobile">
          <a className="header__socials-link" href="/">
            <InstagramLogo />
          </a>
          <a className="header__socials-link" href="/">
            <FacebookLogo />
          </a>
          <a className="header__socials-link" href="/">
            <TwitterLogo />
          </a>
        </div>
        <div className="header__logo header__el">
          <a href="/">
            <WhiteShopLogo />
          </a>
        </div>
        <div className="header__basket">
          <div className="header__basket-icon">
            <span className="header__amount">
                0
            </span>
            <BasketIcon />
            <div className="header__order">
              <ul>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="header__telephone header__el header__telephone--no-phone">
          <span>Для замовлення телефонуйте</span>
          <span>+380535235525</span>
        </div>
        <button className="header__button header__button-open">
          <BurgerButtonIcon />
        </button>
        <div className="header__nav">
          <div className="header__nav-inner">
            <div className="header__nav-upper">
              <div className="header__logo header__logo--black">
                <a href="/">
                  <BlackShopLogo />
                </a>
              </div>
              <button className="header__button header__button-close">
                <CloseButtonIcon />
              </button>
            </div>
            <div className="header__telephone">
              <span>Для замовлення телефонуйте</span>
              <span>+380535235525</span>
            </div>
            <Categories />
            <div className="header__socials">
              <a className="header__socials-link" href="/">
                <InstagramLogo />
              </a>
              <a className="header__socials-link" href="/">
                <FacebookLogo />
              </a>
              <a className="header__socials-link" href="/">
                <TwitterLogo />
              </a>
            </div>
          </div>
        </div>
    </div>
  </header>
));