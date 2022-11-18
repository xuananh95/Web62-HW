const reducer = (state, action) => {
    const { type, payload } = action;
    let newCart = [];
    let foundIndex = -1;
    switch (type) {
        case "ADD_TO_CART":
            foundIndex = state.cart.findIndex((el) => el.id == payload.id);
            console.log("payload", payload);
            if (foundIndex === -1) {
                const newItem = { ...payload, quantity: 1 };
                newCart = [...state.cart, newItem];
            } else {
                newCart = [...state.cart];
                newCart[foundIndex].quantity += 1;
            }
            return {
                ...state,
                cart: newCart,
            };
        case "INCREASE_QUANTITY":
            foundIndex = state.cart.findIndex((el) => el.id == payload.id);
            newCart = [...state.cart];
            newCart[foundIndex].quantity += 1;
            return {
                ...state,
                cart: newCart,
            };
        case "DECREASE_QUANTITY":
            foundIndex = state.cart.findIndex((el) => el.id == payload.id);
            newCart = [...state.cart];
            newCart[foundIndex].quantity -= 1;
            if (newCart[foundIndex].quantity === 0) {
                newCart.splice(foundIndex, 1);
            }
            return {
                ...state,
                cart: newCart,
            };
        case "DELETE":
            foundIndex = state.cart.findIndex((el) => el.id == payload.id);
            newCart = [...state.cart];
            newCart.splice(foundIndex, 1);
            return {
                ...state,
                cart: newCart,
            };
        default:
            return state;
    }
};
export default reducer;
