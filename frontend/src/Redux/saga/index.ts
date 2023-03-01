import { all, takeEvery } from 'redux-saga/effects'
import { handleAddDept, handleDeleteDept, handleGetDept, handleUpdateDept } from './HR/department'
import { deptType } from '../Constant/HR/deptType'
import { empType } from '../Constant/HR/empType'
import { handleAddFacilities, handleAddFaph, handleAddFapho, handleAddHotel, handleAddress, handleDeleteFacility, handleDeleteFaph, handleDeleteFapho, handleDeleteHotel, handleFacilities, handleFacilityID, handleFaph, handleFapho, handleHotel, handleHotelID, handleProvince, handleUpdateFacilities, handleUpdateFaph, handleUpdateFapho, handleUpdateHotel } from './Hotel/HotelSaga'
import { handleDetailEmployee, handleGetEmployees } from './HR/employees'
import HotelConstant from '../Constant/Hotel/HotelConstant'

export default function* rootSaga(){
    yield all([
        takeEvery(deptType.GET_DATA, handleGetDept),
        takeEvery(deptType.ADD_DATA, handleAddDept),
        takeEvery(deptType.UPDATE_DATA, handleUpdateDept),
        takeEvery(deptType.DELETE_DATA, handleDeleteDept),
        takeEvery(empType.GET_DATA, handleGetEmployees),
        takeEvery(empType.GET_DETAIL, handleDetailEmployee),

        takeEvery(HotelConstant.GET_HOTEL,handleHotel),
        takeEvery(HotelConstant.GET_HOTEL_ID,handleHotelID),
        takeEvery(HotelConstant.ADD_HOTEL,handleAddHotel),
        takeEvery(HotelConstant.UPDATE_HOTEL,handleUpdateHotel),
        takeEvery(HotelConstant.DEL_HOTEL,handleDeleteHotel),
        takeEvery(HotelConstant.GET_FACILITIES,handleFacilities),
        takeEvery(HotelConstant.GET_FACILITIES_ID,handleFacilityID),
        takeEvery(HotelConstant.ADD_FACILITIES,handleAddFacilities),
        takeEvery(HotelConstant.UPDATE_FACILITIES,handleUpdateFacilities),
        takeEvery(HotelConstant.DEL_FACILITIES,handleDeleteFacility),
        takeEvery(HotelConstant.GET_FAPHO,handleFapho),
        takeEvery(HotelConstant.ADD_FAPHO,handleAddFapho),
        takeEvery(HotelConstant.UPDATE_FAPHO,handleUpdateFapho),
        takeEvery(HotelConstant.DEL_FAPHO,handleDeleteFapho),
        takeEvery(HotelConstant.GET_FAPH,handleFaph),
        takeEvery(HotelConstant.ADD_FAPH,handleAddFaph),
        takeEvery(HotelConstant.UPDATE_FAPH,handleUpdateFaph),
        takeEvery(HotelConstant.DEL_FAPH,handleDeleteFaph),
        takeEvery(HotelConstant.GET_ADDRESS,handleAddress),
        takeEvery(HotelConstant.GET_PROVINCE,handleProvince)
    ])
}