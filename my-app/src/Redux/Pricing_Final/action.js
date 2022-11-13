import { SET_FINAL_PRICE, SUBMIT_PRICING_VARIABLES } from "./actiontype"

export const setPriceVariables = (payload) => {
    return {
        type : SUBMIT_PRICING_VARIABLES,
        payload
    }
}
export const setFinalPrice = (payload) => {
    return {
        type : SET_FINAL_PRICE,
        payload
    }
}