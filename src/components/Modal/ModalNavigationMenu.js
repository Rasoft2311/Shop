import { makeStyles } from '@material-ui/core';
import { NavigationList } from '../List';
import { ModalMenu } from './ModalMenu';

const useStyles = makeStyles((theme) => ({
  scrollable: {
    height: '100%',
    overflow: 'auto'    
  }
}));

export const ModalNavigationMenu = (props) => {
  const classes = useStyles();
  return (
    <ModalMenu {...props} title="Меню">
      <div className={classes.scrollable}>
        <NavigationList/>
      </div>
    </ModalMenu>
  );
};