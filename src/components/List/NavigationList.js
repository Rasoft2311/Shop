import { Link, List, ListItem, ListItemText, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
  }
}));

export const NavigationList = (props) => {
  const classes = useStyles();
  return (
    <List>
      <ListItem>
        <Link href="https://www.google.com" className={classes.innerItem} aria-label="open our instagram page">
          Главная
        </Link>
      </ListItem>
      <ListItem href="https://www.google.com">
        <ListItemText primary="Facebook" />
      </ListItem>
    </List>
  );
};