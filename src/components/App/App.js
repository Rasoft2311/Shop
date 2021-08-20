import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useGetUserInfo } from '../../hooks/useGetUserInfo';
import { MainPage } from '../../pages';
import { getThemeByName } from '../../themes';
import { PageWrap } from '../PageWrap';
import { SignInPage } from '../../pages';
import { SignUpPage } from '../../pages';



export const App = () => {
  const theme = useSelector(state => state.theme.theme);
  useGetUserInfo();
  return (
    <MuiThemeProvider theme={getThemeByName(theme)}>
      <CssBaseline />
      <BrowserRouter>
        <PageWrap>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/sign-in" component={SignInPage} />
            <Route exact path="/sign-up" component={SignUpPage} />
          </Switch>
        </PageWrap>
      </BrowserRouter>
    </MuiThemeProvider>
  );
};