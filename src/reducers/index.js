/**
 * Created by hessamemami on 12/2/16.
 */
import {combineReducers} from "redux";
import AuthReducer from "./AuthReducer";
import EmployeeFormReducer from "./EmployeeFormReducer";

export default combineReducers({
    auth: AuthReducer,
    employeeForm: EmployeeFormReducer
});
