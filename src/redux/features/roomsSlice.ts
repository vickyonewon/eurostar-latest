import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Room{
    image: ''
    title: '',
    adults: 0,
    size: 0,
    subTitle: '',
    price: 0,
}

const roomsSlice=createSlice({
    name: 'rooms',
    initialState: [] as Room[],
    reducers: {
        setRooms: (state, action:PayloadAction<Room[]>)=>{
            return action.payload;
        }
    }
})


export const {setRooms}=roomsSlice.actions;
export default roomsSlice.reducer;
