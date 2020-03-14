import { createStore } from 'redux';
import { rootReducer } from './modules';

const DEBUG = process.env.NODE_ENV === 'development';
const devTools = (window.__REDUX_DEVTOOLS_EXTENSION__ && DEBUG) && window.__REDUX_DEVTOOLS_EXTENSION__();

export default createStore(
	rootReducer,
	devTools
);