import { useState, useEffect } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import CartModal from "./components/CartModal/CartModal";
import Header from "./components/Header/Header";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import ProductList from "./components/ProductList/ProductList";
const initialProduct = [
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

function App() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [cartAmount, setCartAmount] = useState(0);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const [showCartModal, setShowCartModal] = useState(false);
    const [total, setTotal] = useState(0);

    // Get products from server
    const calculateTotal = (cart) => {
        let tmpTotal = 0;
        cart.forEach((item) => {
            tmpTotal += item.amount * item.price;
        });
        setTotal(tmpTotal);
    };
    const calculateAmount = (cart) => {
        let tmpAmount = 0;
        cart.forEach((item) => {
            tmpAmount += item.amount;
        });
        setCartAmount(tmpAmount);
    };
    useEffect(() => {
        setProducts(initialProduct);
        calculateTotal(cart);
        calculateAmount(cart);
    }, [cart]);

    const onViewProductDetail = (id) => {
        let selected = products.find((item) => item.id === id);
        setSelectedProduct(selected);
    };
    const onAddToCart = (id) => {
        let added = products.find((item) => item.id === id);
        const found = cart.some((el) => el.id === added.id);
        if (!found) {
            setCart([...cart, { ...added, amount: 1 }]);
            calculateAmount(cart);
        } else {
            const tmp_item = cart.filter((el) => el.id === id);
            const tmp_cart = cart.filter((el) => el.id !== id);
            tmp_item[0].amount = Number(tmp_item[0].amount) + 1;
            setCart([...tmp_cart, ...tmp_item]);
            calculateAmount(cart);
        }
    };

    const handleIncreaseAmount = (id) => {
        let tmpCart = cart.map((el) => {
            if (el.id === id) {
                el.amount = Number(el.amount) + 1;
                calculateAmount(cart);
            }
            return el;
        });
        setCart(tmpCart);
        calculateTotal(cart);
    };

    const handleDecreaseAmount = (id) => {
        let tmpCart = cart.map((el) => {
            if (el.id === id) {
                el.amount = Number(el.amount) - 1;
                calculateAmount(cart);
            }
            return el;
        });
        setCart(tmpCart.filter((el) => el.amount !== 0));
        calculateTotal(cart);
    };

    const handleDeleteItem = (id) => {
        let tmpCart = cart.filter((el) => el.id !== id);
        setCart(tmpCart);
        calculateTotal(cart);
    };

    return (
        <div className="container">
            <Header />
            <Cart
                cart={cart}
                cartAmount={cartAmount}
                setShowCartModal={setShowCartModal}
            />
            <ProductList
                products={products}
                onViewProductDetail={onViewProductDetail}
                onAddToCart={onAddToCart}
            />
            <ProductDetail selectedProduct={selectedProduct} />
            {showCartModal && (
                <CartModal
                    cart={cart}
                    cartAmount={cartAmount}
                    total={total}
                    setCart={setCart}
                    handleIncreaseAmount={handleIncreaseAmount}
                    handleDecreaseAmount={handleDecreaseAmount}
                    setShowCartModal={setShowCartModal}
                    handleDeleteItem={handleDeleteItem}
                />
            )}
        </div>
    );
}

export default App;

/*
  App
    Header
    Cart
    ProductList
        Product
        Product
        Product
    ProductDetail

    Flow 1:
     - Render product list
    
    Flow 2: add product to cart
      - Event onClick ProductComponent
      - function (App) => button Product
      - Logic ...
      - Exist: push quantity
        Not exist: push new product with quantity = 1

      2.1 Increase/ decrease quantity => open cart popup +/-
      2.2 Delete cart item 

    Flow 3:
      - Event onClick on button View Detail
      - function onViewDetailHandler => button View Detail Product component
      - onViewDetailHandler => id => object select => pass props => Product Details
*/
