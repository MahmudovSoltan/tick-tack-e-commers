import { configureStore } from "@reduxjs/toolkit";
import campingReduser from './slices/campingSlice'
import categoryReduser from './slices/categorySlice'
import productReduser from './slices/productSlice'
import basketReduser from './slices/basketSlice'
export const store = configureStore({
    reducer: {
        campings: campingReduser,
        categories: categoryReduser,
        products:productReduser,
        baskets:basketReduser
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
