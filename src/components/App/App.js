import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ProductListPage, ProfilePage } from '../../pages';
import { getThemeByName } from '../../themes';
import { PageWrap } from '../PageWrap';
import { SignInPage, SignUpPage, ResetPasswordPage } from '../../pages';
import { ProvideAuth } from '../../hoc/ProvideAuth';
import { AuthorizedRoute, UnauthorizedRoute } from '../Routes';

export const App = () => {
  return (
    <MuiThemeProvider theme={getThemeByName('dark')}>
      <CssBaseline />
      <ProvideAuth>
        <BrowserRouter>
          <PageWrap>
            <Switch>
              <Route exact path="/" render={() => (<Redirect to="/products"/>)} />
              <Route exact path="/products" component={ProductListPage} />
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