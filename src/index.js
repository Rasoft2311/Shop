import { Provider } from 'react-redux';
import { compose, createStore } from 'redux';
import { App } from './components/App';
import './main.scss';
import { rootReducer } from './store/rootReducer';

const store = createStore(
  rootReducer, compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__()
  ));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);