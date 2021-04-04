import { MainPage } from '../../pages/MainPage/MainPage';
import { Header } from '../Header';
import { PageWrap } from '../PageContent';


export const App = () => ((
  <PageWrap>
    <Header />
    <MainPage />
  </PageWrap>
));