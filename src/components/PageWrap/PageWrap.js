import { makeStyles } from '@material-ui/core';
import BackgroundImage from '@assets/images/app-background.jpg';
import { Footer } from '../Footer';
import { Header } from '../Header';

const useStyles = makeStyles((theme) => ({
  pageWrap: {
    color: theme.palette.primary.main,
    backgroundSize: '400px',
    backgroundRepeat: 'repeat',
    backgroundImage: `url(${BackgroundImage})`,
  },
  darkener: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: theme.palette.backgroundTransparent.main
  },
  main: {
    marginTop: theme.customVariables.headerHeightMobile*2,
    padding: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      marginTop: theme.customVariables.headerHeightDesktop,
      marginLeft: theme.customVariables.headerHeightDesktop,
      padding: theme.spacing(8),
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
  }
}));

export const PageWrap = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.pageWrap}>
      <div className={classes.darkener}>
        <Header />
        <main className={classes.main}>
          {props.children}
        </main>
        <Footer />
      </div>
    </div>
  );
};