import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MainPage, ProfilePage } from '../../pages';
import { getThemeByName } from '../../themes';
import { PageWrap } from '../PageWrap';
import { SignInPage, SignUpPage, ResetPasswordPage } from '../../pages';
import { ProvideAuth } from '../../hoc/ProvideAuth';
import { AuthorizedRoute, UnauthorizedRoute } from '../Routes';

export const App = () => {
  const theme = useSelector(state => state.theme.theme);
  return (
    <MuiThemeProvider theme={getThemeByName(theme)}>
      <CssBaseline />
      <ProvideAuth>
        <BrowserRouter>
          <PageWrap>
            <Switch>
              <Route exact path="/" component={MainPage} />
              <UnauthorizedRoute exact path="/sign-in" >
                <SignInPage />
              </UnauthorizedRoute>
              <UnauthorizedRoute exact path="/sign-up" >
                <SignUpPage />
              </UnauthorizedRoute>
              <UnauthorizedRoute exact path="/reset-password">
                <ResetPasswordPage />
              </UnauthorizedRoute>
              <AuthorizedRoute exact path="/profile">
                <ProfilePage />
              </AuthorizedRoute>
            </Switch>
          </PageWrap>
        </BrowserRouter>
      </ProvideAuth>
    </MuiThemeProvider>
  );
};