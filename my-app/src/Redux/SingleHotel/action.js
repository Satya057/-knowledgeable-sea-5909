import axios from "axios"
import { GET_HOTEL_FAILURE, GET_HOTEL_REQUEST, GET_HOTEL_SUCCESS } from "./actionType"

export const getHotelReq = ()=> {
    return {
        type : GET_HOTEL_REQUEST,
    }
}
export const getHotelSuc = (payload)=> {
    return {
        type : GET_HOTEL_SUCCESS,
        payload
    }
}
export const getHotelFail = (err)=> {
    return {
        type : GET_HOTEL_FAILURE,
        payload : err
    }
}

export const getHotel = (id) => (dispatch, getState) => {
    const reqAction = getHotelReq();
    dispatch(reqAction);

    return axios.get(`https://tripvilla.herokuapp.com/hotels/${id}`)
    .then(res => {
        const sucAction = getHotelSuc(res.data.data);
        dispatch(sucAction);
        return {success: true};
    })
    .catch(err => {
        const errAction = getHotelFail(err);
        dispatch(errAction);
    });
};