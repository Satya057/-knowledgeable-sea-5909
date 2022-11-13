import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { LoginReducer } from "./LoginAuth/reducer";
import { pricingReducer } from "./Pricing_Final/reducer";
import { hotelsReducer } from "./SingleHotel/reducer";

const rootreducer = combineReducers({
  login: LoginReducer,
  singleHotels: hotelsReducer,
  pricing: pricingReducer,
});

export const store = createStore(
  rootreducer,
    applyMiddleware(thunk)
);
