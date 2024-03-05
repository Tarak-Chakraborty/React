import {configureStore} from '@reduxjs/toolkit';//The first step to make a store is import the configureStore 
import todoReducer from '../features/todo/todoSlice';

export const store = configureStore({       //It takes only object inside it 
    reducer: todoReducer
})