import React, { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartContext from "../../context/CartContext";

const Cart = ({ setShowCartModal }) => {
    const cartCtx = useContext(CartContext);
    const cartAmount = cartCtx.state.cart.reduce(
        (accumulator, object) => accumulator + object.quantity,
        0
    );
    return (
        <div
            className="d-flex flex-row-reverse align-item-center"
            style={{ maxWidth: "1080px" }}
        >
            <p style={{ fontSize: "25px", marginLeft: "10px" }}>{cartAmount}</p>
            <AiOutlineShoppingCart
                fontSize="35px"
                style={{ color: "green", cursor: "pointer" }}
                onClick={() => setShowCartModal(true)}
            />
        </div>
    );
};

export default Cart;
