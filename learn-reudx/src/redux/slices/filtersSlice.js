import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: "all",
    search: "",
};

export const filterSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setStatus: (state, action) => {
            state.status = action.payload;
            return state;
        },
        setSearch: (state, action) => {
            state.search = action.payload;
            return state;
        },
    },
});

// export function filtersReducer(state = initialState, action) {
//     switch (action.type) {
//         case "filters/setStatus": {
//             const newState = { ...state, status: action.payload };
//             return newState;
//         }
//         case "filters/setSearch": {
//             const newState = {
//                 ...state,
//                 search: action.payload,
//             };
//             return newState;
//         }
//         default:
//             return state;
//     }
// }
