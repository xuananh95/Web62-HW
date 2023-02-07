import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        index: 1,
        name: "Learn React",
        completed: true,
    },
    {
        index: 2,
        name: "Learn redux",
        completed: false,
    },
];

// export function todoListReducer(state = initialState, action) {
//     switch (action.type) {
//         case "todoList/addTodoList": {
//             const newState = [...state, action.payload];
//             return newState;
//         }
//         case "todoList/markCompleted": {
//             console.log(action.payload);
//             const newState = state.map((item) => {
//                 if (item.index === action.payload.index) {
//                     return item.completed
//                         ? { ...item, completed: false }
//                         : { ...item, completed: true };
//                 } else {
//                     return item;
//                 }
//             });
//             return newState;
//         }
//         default:
//             return state;
//     }
// }

export const todoListSlice = createSlice({
    name: "todoList",
    initialState,
    reducers: {
        addTodoList: (state, action) => {
            state.push(action.payload);
            return state;
        },
        markCompleted: (state, action) => {
            return state.map((item) => {
                if (item.index === action.payload.index) {
                    return item.completed
                        ? { ...item, completed: false }
                        : { ...item, completed: true };
                } else {
                    return item;
                }
            });
        },
    },
});
