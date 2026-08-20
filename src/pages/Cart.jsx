import { useState } from "react";

function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Watch Men 01",
      category: "Men",
      price: 180,
      quantity: 1,
      image: "/watch-men-1.jpg",
    },
    {
      id: 2,
      name: "Watch Women 01",
      category: "Women",
      price: 190,
      quantity: 1,
      image: "/watch-women-1.jpg",
    },
  ]);

  const increaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems(
      cartItems
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const placeOrder = () => {
    alert("Your order has been placed successfully!");
  };

  return (
    <section
      style={{
        minHeight: "100vh",
        backgroundColor: "ivory",
        padding: "70px 7%",
        boxSizing: "border-box",
      }}
    >
      {/* Heading */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "50px",
        }}
      >
        <p
          style={{
            color: "darkgoldenrod",
            fontSize: "13px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}
        >
          Your Selection
        </p>

        <h1
          style={{
            color: "black",
            fontSize: "clamp(32px, 5vw, 48px)",
            margin: 0,
          }}
        >
          Shopping Cart
        </h1>
      </div>

      {cartItems.length === 0 ? (
        <div
          style={{
            backgroundColor: "white",
            maxWidth: "700px",
            margin: "0 auto",
            padding: "50px 30px",
            textAlign: "center",
            borderRadius: "8px",
            boxShadow: "0 5px 25px lightgray",
          }}
        >
          <h2
            style={{
              color: "black",
              marginBottom: "10px",
            }}
          >
            Your Cart is Empty
          </h2>

          <p
            style={{
              color: "dimgray",
              margin: 0,
            }}
          >
            Add a beautiful timepiece from our collection.
          </p>
        </div>
      ) : (
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "30px",
          }}
        >
          {/* Cart Items */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {cartItems.map((item) => (
              <div
                key={item.id}
                style={{
                  backgroundColor: "white",
                  padding: "20px",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  boxShadow: "0 5px 20px lightgray",
                }}
              >
                {/* Image */}
                <div
                  style={{
                    width: "120px",
                    height: "120px",
                    backgroundColor: "whitesmoke",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>

                {/* Details */}
                <div style={{ flex: 1 }}>
                  <p
                    style={{
                      color: "dimgray",
                      fontSize: "12px",
                      marginBottom: "6px",
                    }}
                  >
                    {item.category}
                  </p>

                  <h3
                    style={{
                      color: "black",
                      margin: "0 0 8px",
                      fontSize: "18px",
                    }}
                  >
                    {item.name}
                  </h3>

                  <p
                    style={{
                      color: "darkgoldenrod",
                      fontWeight: "600",
                      margin: 0,
                    }}
                  >
                    ${item.price}
                  </p>
                </div>

                {/* Quantity */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    style={quantityButtonStyle}
                  >
                    −
                  </button>

                  <span
                    style={{
                      color: "black",
                      minWidth: "20px",
                      textAlign: "center",
                    }}
                  >
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => increaseQuantity(item.id)}
                    style={quantityButtonStyle}
                  >
                    +
                  </button>
                </div>

                {/* Remove */}
                <button
                  onClick={() => removeItem(item.id)}
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    color: "firebrick",
                    cursor: "pointer",
                    fontSize: "13px",
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div
            style={{
              backgroundColor: "black",
              color: "white",
              padding: "30px",
              borderRadius: "8px",
              height: "fit-content",
              boxSizing: "border-box",
            }}
          >
            <h2
              style={{
                color: "white",
                marginTop: 0,
                marginBottom: "25px",
              }}
            >
              Order Summary
            </h2>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "15px",
                color: "lightgray",
              }}
            >
              <span>Items</span>
              <span>{cartItems.length}</span>
            </div>

            <div
              style={{
                borderTop: "1px solid dimgray",
                paddingTop: "20px",
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "25px",
              }}
            >
              <strong>Total</strong>

              <strong
                style={{
                  color: "gold",
                  fontSize: "20px",
                }}
              >
                ${total}
              </strong>
            </div>

            <button
              onClick={placeOrder}
              style={{
                width: "100%",
                backgroundColor: "gold",
                color: "black",
                border: "none",
                padding: "14px",
                borderRadius: "4px",
                cursor: "pointer",
                fontWeight: "600",
                fontSize: "14px",
              }}
            >
              Place Order
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

const quantityButtonStyle = {
  width: "30px",
  height: "30px",
  backgroundColor: "black",
  color: "white",
  border: "none",
  borderRadius: "3px",
  cursor: "pointer",
  fontSize: "18px",
};

export default Cart;