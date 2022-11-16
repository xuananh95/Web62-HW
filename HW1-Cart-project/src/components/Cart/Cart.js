import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Cart = ({ cart, cartAmount, setShowCartModal }) => {
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
