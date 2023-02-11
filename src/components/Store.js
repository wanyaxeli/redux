import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import {  addToCartSlice, DataSlice} from "./Slices";
export const store = configureStore({
    reducer:{
        data:DataSlice.reducer,
    }
})
