import { makeStyles } from '@material-ui/core';
import { NavigationList } from '../List';
import { ModalMenu } from './ModalMenu';

const useStyles = makeStyles((theme) => ({
  root: {
  }
}));

const ref = React.createRef();

export const ModalNavigationMenu = (props) => {
  const classes = useStyles();
  return (
    <ModalMenu scrollableElRef={ref} title="Меню">
      <NavigationList ref={ref}/>
    </ModalMenu>
  );
};