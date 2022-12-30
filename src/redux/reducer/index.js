import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
});

export const Store = configureStore({
    reducer: rootReducer
})