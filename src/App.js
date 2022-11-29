import "./App.css";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import ItemListContainer from "./containers/ItemListContainer"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import CartContextProvider from "./components/CartContext";
import Checkout from "./components/Checkout";

const App = () => {
  return (
    <CartContextProvider >
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/Ecommerce-React" element={<HomeContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:idItem" element={<ItemDetailContainer />} /> 
          <Route path="/cart" element={<Cart />} /> 
          <Route path="/checkout" element={<Checkout />} /> 
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
    
  )
}

export default App;
