import { Categories } from '../../components/Categories';
import './MainPage.scss';

export const MainPage = () => ((
  <div className="main-page">
    <main className="main">
      <Categories extendedClass="categories--non-mobile"/>
    </main>
  </div>
));