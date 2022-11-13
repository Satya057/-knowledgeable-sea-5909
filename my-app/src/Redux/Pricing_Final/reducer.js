import { SET_FINAL_PRICE, SUBMIT_PRICING_VARIABLES } from "./actiontype";

const initState = {
    location : false,
    checkinDate : '',
    checkOutDate : '',
    noOfGuest : 0,
    price: 0
}

export const pricingReducer = (state = initState, {type, payload}) => {
    switch (type) {
        case SUBMIT_PRICING_VARIABLES:
            return {
                ...state,
                ...payload,
            }
        case SET_FINAL_PRICE:
            return {
                ...state,
                ...payload,
            }
    
        default:
            return state;
    }
}