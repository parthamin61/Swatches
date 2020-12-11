import {combineReducers} from 'redux';

//import all the reducers files
import {color} from './color';

//create oner oot reducer byc ombining all independent ones
const rootReducer = combineReducers({
    color
});

export default rootReducer;