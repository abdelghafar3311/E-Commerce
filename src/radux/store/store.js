import {createStore} from 'redux';
import Reducers from '../AllReducers/AllReducer';
const store = createStore(Reducers);

export default store;