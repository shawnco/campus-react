import {combineReducers} from 'redux';
import buildings from './buildings';
import classes from './classes';
import majors from './majors';
import user from './user';
// import manage from './manage';
import error from './error';

export default combineReducers({
    buildings,
    classes,
    majors,
    user,
    // manage,
    error
});