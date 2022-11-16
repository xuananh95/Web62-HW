import React, { useContext, useEffect, useState } from "react";
import { SCartModal } from "./styles";
import { FaTimes } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import CartContext from "../../context/CartContext";

const CartModal = ({ setShowCartModal }) => {
    const cartCtx = useContext(CartContext);
    const { state, dispatch } = cartCtx;
    const [total, setTotal] = useState(0);
    useEffect(() => {
        let tmp = 0;
        state.cart.forEach((el) => {
            tmp += el.price * el.quantity;
        });
        setTotal(tmp);
    });

    const formatPrice = (price) =>
        new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
        }).format(price);

    const handleIncreaseAmount = (id) => {
        const action = {
            type: "INCREASE_QUANTITY",
            payload: { id },
        };
        dispatch(action);
    };

    const handleDecreaseAmount = (id) => {
        const action = {
            type: "DECREASE_QUANTITY",
            payload: { id },
        };
        dispatch(action);
    };

    const handleDeleteItem = (id) => {
        const action = {
            type: "DELETE",
            payload: { id },
        };
        dispatch(action);
    };

    return (
        <SCartModal>
            <div className="modal-wrapper">
                <div className="modal-header">
                    <h1>Your Cart</h1>
                    <span
                        className="icon"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                            setShowCartModal(false);
                        }}
                    >
                        <FaTimes color="red" fontSize={"30px"} />
                    </span>
                </div>
                <div className="modal-content">
                    <div className="content-header">
                        <h5>Tên sản phẩm</h5>
                        <h5>Hình Ảnh</h5>
                        <h5>Giá</h5>
                        <h5>Số lượng</h5>
                        <h5>Thành tiền</h5>
                    </div>
                    <div className="content-item">
                        {state.cart.length > 0 &&
                            state.cart.map((item) => (
                                <div className="item-wrap">
                                    <p>{item.name}</p>
                                    <img
                                        width="50px"
                                        src={item.img}
                                        alt={item.name}
                                    />
                                    <p>{formatPrice(item.price)}</p>
                                    <div className="item-right">
                                        <span className="amount-text">
                                            {item.quantity}
                                        </span>
                                        <button
                                            className="amount-btn up"
                                            onClick={() =>
                                                handleIncreaseAmount(item.id)
                                            }
                                        >
                                            +
                                        </button>
                                        <button
                                            className="amount-btn down"
                                            onClick={() =>
                                                handleDecreaseAmount(item.id)
                                            }
                                        >
                                            -
                                        </button>
                                        <button
                                            className="amount-btn delete-btn"
                                            onClick={() =>
                                                handleDeleteItem(item.id)
                                            }
                                        >
                                            <AiOutlineDelete />
                                        </button>
                                    </div>
                                    <p>
                                        {formatPrice(item.price * item.amount)}
                                    </p>
                                </div>
                            ))}
                    </div>
                    <hr />
                    <div className="total-amount">
                        <h1>Tổng tiền: </h1>
                        <h1>{formatPrice(total)}</h1>
                    </div>
                </div>
            </div>
        </SCartModal>
    );
};

export default CartModal;
