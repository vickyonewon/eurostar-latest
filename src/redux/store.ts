import {configureStore} from '@reduxjs/toolkit';
import roomReducer from './features/roomsSlice';

const store=configureStore({
    reducer: {
        rooms: roomReducer
    }
})

export default store;
