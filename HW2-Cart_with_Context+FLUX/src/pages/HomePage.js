import { useState, useEffect, useContext } from "react";
import CartContext from "../context/CartContext";
import Cart from "../components/Cart/Cart";
import CartModal from "../components/CartModal/CartModal";
import Header from "../components/Header/Header";
import ProductDetail from "../components/ProductDetail/ProductDetail";
import ProductList from "../components/ProductList/ProductList";

const initialState = [
    {
        id: 1,
        name: "Samsung Galaxy A10",
        price: "40906000",
        img: "images/samsung-galaxy.jpg",
        info: {
            screen: "AMOLED Full HD 9.0",
            os: "Android 9.0",
            frontCamera: "20MP",
            backCamera: "Chính 48MB, phụ 30MP",
        },
        ram: "4 GB",
        rom: "64 GB",
        amount: 0,
    },
    {
        id: 2,
        name: "IPhone12",
        price: "200306000",
        img: "images/iphone-12.jpg",
        info: {
            screen: "Full HD 12.0",
            os: "IOS 14",
            frontCamera: "20MP",
            backCamera: "Chính 100MB, phụ 30MP",
        },
        ram: "16 GB",
        rom: "32 GB",
        amount: 0,
    },
    {
        id: 3,
        name: "Xiaomi Note 10",
        price: "10005000",
        img: "images/xiaomi-redmi-note-10-5g.jpg",
        info: {
            screen: "OLED 10.0",
            os: "Android 8.0",
            frontCamera: "69MP",
            backCamera: "Chính 96MB, phụ 30MP",
        },
        ram: "10 GB",
        rom: "64 GB",
        amount: 0,
    },
];

function HomePage() {
    const cartContext = useContext(CartContext);
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const [showCartModal, setShowCartModal] = useState(false);

    useEffect(() => {
        setProducts(initialState);
    }, []);

    const onViewProductDetail = (id) => {
        let selected = products.find((item) => item.id === id);
        setSelectedProduct(selected);
    };

    return (
        <div className="container">
            <Header />
            <Cart setShowCartModal={setShowCartModal} />
            <ProductList
                products={products}
                onViewProductDetail={onViewProductDetail}
            />
            <ProductDetail selectedProduct={selectedProduct} />
            {showCartModal && <CartModal setShowCartModal={setShowCartModal} />}
        </div>
    );
}

export default HomePage;
