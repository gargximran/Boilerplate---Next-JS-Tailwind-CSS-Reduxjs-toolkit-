import { configureStore, combineReducers } from "@reduxjs/toolkit";


const RootReducer = combineReducers({

})






const store = configureStore({
    reducer: RootReducer
})


export default store