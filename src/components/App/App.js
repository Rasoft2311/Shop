import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { MainPage } from '../../pages/MainPage/MainPage';
import { getThemeByName } from '../../themes';
import { Footer } from '../Footer';
import { HeaderContainer } from '../Header/HeaderContainer';
import { Main } from '../Main';
import { PageWrap } from '../PageContent';


export const App = () => {
  const theme = useSelector(state => state.theme.theme);
  return (
    <MuiThemeProvider theme={getThemeByName(theme)}>
      <CssBaseline />
      <PageWrap>
        <HeaderContainer />
        <Main>
          <MainPage />
        </Main>
        <Footer />
      </PageWrap>
    </MuiThemeProvider>
  );
};