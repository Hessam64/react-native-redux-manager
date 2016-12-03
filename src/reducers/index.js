/**
 * Created by hessamemami on 12/2/16.
 */
import {combineReducers} from "redux";
import AuthReducer from "./AuthReducer";

export default combineReducers({
    auth: AuthReducer
});
