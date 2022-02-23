import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface CustomersState {
    value: Customer[];
}

interface Customer {
    id: string;
    name: string;
    food: string[];
}

interface AddFoodToIdPayload {
    id: string;
    food: string;
}

const initialState: CustomersState = {
    value: []
};

export const customersSlice = createSlice({
    name: 'customers',
    initialState,
    reducers: {
        addCustomer: (state, action: PayloadAction<Customer>) => {
            state.value.push(action.payload)
        },
        addFoodToId: (state, action: PayloadAction<AddFoodToIdPayload>) => {
            const {id, food} = action.payload;
            console.log('payload', action.payload)
            state.value.find(customer => customer.id === id)?.food.push(food);
        }
    }
});

export const {
    addCustomer,
    addFoodToId
} = customersSlice.actions;

export default customersSlice.reducer;