import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: {}
}
const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers:{
        dataWeather(state, action){
            state.data = action.payload
        }
    }
})
export const {dataWeather} = weatherSlice.actions
export default weatherSlice.reducer