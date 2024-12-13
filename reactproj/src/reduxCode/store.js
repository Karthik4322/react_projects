import { configureStore } from "@reduxjs/toolkit";
import apiReducer from './api/apiSlice.js';

const store =configureStore({
    reducer:{
        api:apiReducer
    }
});

export default store;
