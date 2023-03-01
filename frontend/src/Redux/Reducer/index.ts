import { combineReducers } from "redux";
import HotelReducer from "./Hotel/HotelReducer";
import { DeptReducer } from "./HR/department";
import { employeesReducer } from "./HR/employees";
import { detailEmpReducer } from "./HR/detailEmp";

export default combineReducers({
  DeptReducer,
  employeesReducer,
  detailEmpReducer,
  HotelReducer,
});
