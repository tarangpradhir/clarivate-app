import {configureStore} from "@reduxjs/toolkit";
import itemReducer from "./itemSlice";

export const appStore = configureStore({
    reducer: itemReducer
});

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;