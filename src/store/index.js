import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './modules';

const DEBUG = process.env.NODE_ENV === 'development';

export default createStore(
	rootReducer,
	DEBUG && composeWithDevTools()
);