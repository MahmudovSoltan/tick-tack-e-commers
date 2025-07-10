import { configureStore } from "@reduxjs/toolkit";
import campingReduser from './slices/campingSlice'
import categoryReduser from './slices/categorySlice'
export const store = configureStore({
    reducer: {
        campings: campingReduser,
        categories: categoryReduser
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
