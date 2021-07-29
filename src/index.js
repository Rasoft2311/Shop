import { Provider } from 'react-redux';
import { App } from './components/App';
import { store } from './store';
import './main.scss';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);