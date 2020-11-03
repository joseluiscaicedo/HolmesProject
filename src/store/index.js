//------------------------------ import libraries
import {
  createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';

// Import and combine reducers
import reducer from '../reducers';

const rootReducer = combineReducers({
  reducer,
});

// Get the enhancer to redux devtools
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Made a function that return the store
function generateStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)),
  );
  return store;
}

export default generateStore;
