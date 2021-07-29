import { applyMiddleware, compose, createStore } from 'redux';
import { rootReducer } from './rootReducer';
import thunk from 'redux-thunk';

const composeEnhancers = (process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ) || compose;
export const store = createStore(rootReducer, {}, composeEnhancers(
  applyMiddleware(thunk)
));