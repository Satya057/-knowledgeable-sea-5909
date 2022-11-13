import { GET_HOTEL_FAILURE, GET_HOTEL_REQUEST, GET_HOTEL_SUCCESS } from "./actionType";

const initState = {
    data : [],
    isLoading: true,
    isError: false,
}

export const hotelsReducer = (state = initState, {type, payload}) => {
    switch (type) {
        case GET_HOTEL_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false,
            };
        case GET_HOTEL_SUCCESS:
            return {
                ...state,
                data: payload,
                isLoading: false,
            };
        case GET_HOTEL_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        default:
            return state;
    }
}