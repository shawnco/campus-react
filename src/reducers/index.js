import {combineReducers} from 'redux';
import buildings from './buildings';
import classes from './classes';
import majors from './majors';
import user from './user';
import rooms from './rooms';
// import manage from './manage';
import error from './error';
import sections from './sections';

export default combineReducers({
    buildings,
    classes,
    majors,
    user,
    // manage,
    error,
    rooms,
    sections
});