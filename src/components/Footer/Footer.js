import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: 'auto',
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.customVariables.headerHeightDesktop,
    },
  }
}));

export const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      Footer
    </footer>
  );
} 