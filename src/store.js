import { configureStore } from "@reduxjs/toolkit";
import reduxReducer from "./reduxSlice";
import logger from "redux-logger";

export const store = configureStore({
    reducer: { 
       user: reduxReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})      
