import "./App.css";
import Header from "./components/Header/Header";
import CartState from "./context/CartState";
import HomePage from "./pages/HomePage";

function App() {
    return (
        <div>
            <CartState>
                <Header />
                <HomePage />
            </CartState>
        </div>
    );
}

export default App;
