import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Collection from "./Components/Collection";

import Home from "./pages/Home";
import Auth from "./pages/Auth";
import AddProduct from "./pages/AddProduct";
import Cart from "./pages/Cart";

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Add product to cart
  const handleAddToCart = (product) => {
    setCartItems((items) => {
      const existingItem = items.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        return items.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...items,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  return (
    <BrowserRouter>
      {/* Header */}
      <Header cartItems={cartItems} />

      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={
            <Home
              cartItems={cartItems}
              setCartItems={setCartItems}
              onAddToCart={handleAddToCart}
            />
          }
        />

        {/* Collection */}
        <Route
          path="/collection"
          element={
            <Collection
              onAddToCart={handleAddToCart}
            />
          }
        />

        {/* Authentication */}
        <Route
          path="/auth"
          element={<Auth />}
        />

        {/* Login */}
        <Route
          path="/login"
          element={<Auth />}
        />

        {/* Sign Up */}
        <Route
          path="/signup"
          element={<Auth />}
        />

        {/* Add Product */}
        <Route
          path="/add-product"
          element={<AddProduct />}
        />

        {/* Cart */}
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          }
        />
      </Routes>

      {/* Footer */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;