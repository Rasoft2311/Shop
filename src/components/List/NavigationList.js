import { Link, List, ListItem, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  link: {
    width: '100%',
    padding: theme.spacing(2),
    color: theme.palette.secondary[theme.palette.type],
    textAlign: 'center'
  },
  active: {
    color: theme.palette.third[theme.palette.type],
  }
}));

export const NavigationList = (props) => {
  const classes = useStyles();
  return (
    <List disablePadding>
      <ListItem disableGutters>
        <Link className={classes.link} href="https://www.google.com" variant="h3">
          Главная
        </Link>
      </ListItem>
      <ListItem disableGutters>
        <Link className={classes.link} href="https://www.google.com" variant="h3">
          Категории
        </Link>
      </ListItem>
      <ListItem disableGutters>
        <Link className={classes.link} href="https://www.google.com" variant="h3">
          О нас
        </Link>
      </ListItem>
      <ListItem disableGutters>
        <Link className={classes.link} href="https://www.google.com" variant="h3">
          Договор публичной оферты
        </Link>
      </ListItem>
      <ListItem disableGutters>
        <Link className={classes.link} href="https://www.google.com" variant="h3">
          Условия доставки
        </Link>
      </ListItem>
      <ListItem disableGutters>
        <Link className={classes.link} href="https://www.google.com" variant="h3">
          Акции
        </Link>
      </ListItem>
      <ListItem disableGutters>
        <Link className={classes.link} href="https://www.google.com" variant="h3">
          Акции
        </Link>
      </ListItem>
      <ListItem disableGutters>
        <Link className={classes.link} href="https://www.google.com" variant="h3">
          PreLast
        </Link>
      </ListItem>
      <ListItem disableGutters>
        <Link className={classes.link} href="https://www.google.com" variant="h3">
          SomeLast
        </Link>
      </ListItem>
    </List>
  );
};