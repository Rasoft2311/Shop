import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
  }
}));

export const ModalCartMenu = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.darkener}>

      </div>
    </div>
  );
};
