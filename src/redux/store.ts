import { configureStore } from '@reduxjs/toolkit';
import customersReducer from './slices/customers';
import reservationsReducer from './slices/reservations';

export const store = configureStore({
    reducer: {
        reservations: reservationsReducer,
        customers: customersReducer

    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;