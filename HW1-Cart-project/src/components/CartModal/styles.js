import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    from {
        transform: translateY(-1000px)
    }
    to {
        transform: translateY(0px)
    }
`;

export const SCartModal = styled.div`
    overflow: scroll;
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    .modal-wrapper {
        animation: ${rotate} 0.5s linear;
        background-color: white;
        border-radius: 10px;
        padding: 10px 20px;
        width: 100%;
        max-width: 1000px;
        .modal-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
    .modal-content {
        padding: 10px;
        display: flex;
        flex-direction: column;
        .content-header {
            display: grid;
            grid-template-columns: repeat(5, minmax(0, 1fr));
            margin-bottom: 10px;
        }
        .content-item {
            .item-wrap {
                width: 100%;
                display: grid;
                grid-template-columns: repeat(5, minmax(0, 1fr));
                align-items: center;
                margin-bottom: 10px;
                .item-right {
                    display: grid;
                    grid-template-columns: repeat(4, minmax(0, 1fr));
                    margin-right: 10px;
                    .amount-btn {
                        width: 35px;
                        height: 35px;
                        margin: 3px;
                        transform: translateY(-8px);
                    }
                    .up:hover {
                        background-color: #21eb21;
                        color: white;
                    }
                    .down:hover {
                        background-color: orange;
                        color: white;
                    }
                    .delete-btn:hover {
                        background-color: red;
                        color: white;
                    }
                }
            }
        }

        .total-amount {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
    }
`;
