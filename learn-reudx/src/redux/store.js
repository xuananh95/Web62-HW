import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
// import { rootReducer } from "./reducer";
import { filterSlice } from "./slices/filtersSlice";
import { todoListSlice } from "./slices/todoListSlice";

const composedEnhancer = composeWithDevTools();

const store = configureStore({
    reducer: {
        todoList: todoListSlice.reducer,
        filters: filterSlice.reducer,
    },
    devTools: true,
    // enhancers: composedEnhancer,
});

export default store;
