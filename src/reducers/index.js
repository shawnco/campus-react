import {combineReducers} from "redux";
import buildings from "./buildingsReducer";
import classes from "./classesReducer";
import majors from "./majorsReducer";
import user from "./userReducer";
import manage from "./manageReducer";

export default combineReducers({
    buildings,
    classes,
    majors,
    user,
    manage
});