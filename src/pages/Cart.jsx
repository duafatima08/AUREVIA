import { useNavigate } from "react-router-dom";

function Cart({ cartItems, setCartItems }) {
  const navigate = useNavigate();

  // Increase quantity
  const increaseQuantity = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    setCartItems((items) =>
      items
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Remove product
  const removeItem = (id) => {
    setCartItems((items) =>
      items.filter((item) => item.id !== id)
    );
  };

  // Total price
  const total = cartItems.reduce(
    (sum, item) =>
      sum + Number(item.price) * Number(item.quantity),
    0
  );

  // Total quantity
  const totalItems = cartItems.reduce(
    (sum, item) => sum + Number(item.quantity),
    0
  );

  // Place order
  const placeOrder = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    alert("Your order has been placed successfully!");

    setCartItems([]);

    navigate("/");
  };

  return (
    <section
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, ivory, lavender, whitesmoke)",
        padding: "70px 6%",
        boxSizing: "border-box",
      }}
    >
      {/* Heading */}

      <div
        style={{
          textAlign: "center",
          marginBottom: "45px",
        }}
      >
        <p
          style={{
            color: "slateblue",
            fontSize: "12px",
            fontWeight: "600",
            letterSpacing: "4px",
            textTransform: "uppercase",
            margin: "0 0 12px",
          }}
        >
          Your Selection
        </p>

        <h1
          style={{
            color: "midnightblue",
            fontSize: "clamp(30px, 5vw, 48px)",
            lineHeight: "1.1",
            margin: 0,
          }}
        >
          Shopping Cart
        </h1>
      </div>

      {/* Empty Cart */}

      {cartItems.length === 0 ? (
        <div
          style={{
            backgroundColor: "white",
            width: "100%",
            maxWidth: "650px",
            margin: "0 auto",
            padding: "55px 30px",
            textAlign: "center",
            borderRadius: "18px",
            boxShadow: "0 15px 35px lightgray",
            boxSizing: "border-box",
            border: "1px solid lavender",
          }}
        >
          <p
            style={{
              color: "slateblue",
              fontSize: "35px",
              margin: "0 0 15px",
            }}
          >
            ♡
          </p>

          <h2
            style={{
              color: "midnightblue",
              margin: "0 0 10px",
            }}
          >
            Your Cart is Empty
          </h2>

          <p
            style={{
              color: "dimgray",
              margin: "0 0 25px",
              lineHeight: "1.6",
            }}
          >
            Add a beautiful timepiece from our collection.
          </p>

          <button
            onClick={() => navigate("/collection")}
            style={primaryButtonStyle}
          >
            Explore Collection
          </button>
        </div>
      ) : (
        <div
          style={{
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {/* Cart Layout */}

          <div
            className="cart-layout"
            style={{
              display: "grid",
              gridTemplateColumns:
                "minmax(0, 2fr) minmax(280px, 1fr)",
              gap: "30px",
              alignItems: "start",
            }}
          >
            {/* Cart Items */}

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "18px",
              }}
            >
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="cart-item"
                  style={{
                    backgroundColor: "white",
                    padding: "20px",
                    borderRadius: "16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "18px",
                    boxShadow: "0 8px 25px lightgray",
                    boxSizing: "border-box",
                    border: "1px solid lavender",
                  }}
                >
                  {/* Image */}

                  <div
                    className="cart-image"
                    style={{
                      width: "115px",
                      height: "115px",
                      background:
                        "linear-gradient(145deg, black, midnightblue)",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      overflow: "hidden",
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

                  <div
                    style={{
                      flex: 1,
                      minWidth: 0,
                    }}
                  >
                    <p
                      style={{
                        color: "slateblue",
                        fontSize: "11px",
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        margin: "0 0 7px",
                        fontWeight: "600",
                      }}
                    >
                      {item.category}
                    </p>

                    <h3
                      style={{
                        color: "midnightblue",
                        margin: "0 0 8px",
                        fontSize: "18px",
                        overflowWrap: "break-word",
                      }}
                    >
                      {item.name}
                    </h3>

                    <p
                      style={{
                        color: "black",
                        fontWeight: "700",
                        margin: 0,
                      }}
                    >
                      ${Number(item.price).toFixed(2)}
                    </p>
                  </div>

                  {/* Quantity */}

                  <div
                    className="quantity-controls"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      flexShrink: 0,
                    }}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        decreaseQuantity(item.id)
                      }
                      style={quantityButtonStyle}
                    >
                      −
                    </button>

                    <span
                      style={{
                        color: "midnightblue",
                        minWidth: "25px",
                        textAlign: "center",
                        fontWeight: "600",
                      }}
                    >
                      {item.quantity}
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        increaseQuantity(item.id)
                      }
                      style={quantityButtonStyle}
                    >
                      +
                    </button>
                  </div>

                  {/* Remove */}

                  <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                    style={removeButtonStyle}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* Order Summary */}

            <div
              className="order-summary"
              style={{
                background:
                  "linear-gradient(145deg, black, midnightblue, darkslategray)",
                color: "ivory",
                padding: "30px",
                borderRadius: "18px",
                boxSizing: "border-box",
                boxShadow: "0 12px 30px lightgray",
                position: "sticky",
                top: "100px",
              }}
            >
              <p
                style={{
                  color: "lavender",
                  fontSize: "11px",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  margin: "0 0 10px",
                }}
              >
                Aurevia
              </p>

              <h2
                style={{
                  color: "ivory",
                  margin: "0 0 30px",
                  fontSize: "25px",
                }}
              >
                Order Summary
              </h2>

              <div style={summaryRowStyle}>
                <span>Products</span>
                <span>{cartItems.length}</span>
              </div>

              <div style={summaryRowStyle}>
                <span>Total Items</span>
                <span>{totalItems}</span>
              </div>

              <div
                style={{
                  borderTop: "1px solid slategray",
                  paddingTop: "20px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "25px",
                }}
              >
                <strong
                  style={{
                    color: "ivory",
                  }}
                >
                  Total
                </strong>

                <strong
                  style={{
                    color: "lavender",
                    fontSize: "22px",
                  }}
                >
                  ${total.toFixed(2)}
                </strong>
              </div>

              <button
                type="button"
                onClick={placeOrder}
                style={primaryButtonStyle}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Responsive CSS */}

      <style>
        {`
          @media (max-width: 900px) {
            .cart-layout {
              grid-template-columns: 1fr !important;
            }

            .order-summary {
              position: static !important;
            }
          }

          @media (max-width: 600px) {
            .cart-item {
              display: grid !important;
              grid-template-columns: 85px 1fr !important;
              gap: 15px !important;
              padding: 15px !important;
            }

            .cart-image {
              width: 85px !important;
              height: 85px !important;
              grid-row: span 2;
            }

            .quantity-controls {
              grid-column: 2;
              justify-content: flex-start;
            }

            .cart-item > button {
              grid-column: 2;
              justify-self: start;
            }

            .order-summary {
              padding: 24px !important;
            }
          }

          @media (max-width: 400px) {
            .cart-item {
              grid-template-columns: 70px 1fr !important;
            }

            .cart-image {
              width: 70px !important;
              height: 70px !important;
            }

            .cart-item h3 {
              font-size: 15px !important;
            }
          }
        `}
      </style>
    </section>
  );
}

/* Primary Button */

const primaryButtonStyle = {
  width: "100%",
  background:
    "linear-gradient(135deg, midnightblue, mediumpurple)",
  color: "ivory",
  border: "1px solid slateblue",
  padding: "14px",
  borderRadius: "20px",
  cursor: "pointer",
  fontWeight: "700",
  fontSize: "14px",
  letterSpacing: "0.5px",
};

/* Quantity Button */

const quantityButtonStyle = {
  width: "32px",
  height: "32px",
  background:
    "linear-gradient(135deg, midnightblue, mediumpurple)",
  color: "ivory",
  border: "1px solid slateblue",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "18px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

/* Remove Button */

const removeButtonStyle = {
  backgroundColor: "transparent",
  border: "none",
  color: "firebrick",
  cursor: "pointer",
  fontSize: "12px",
  flexShrink: 0,
};

/* Summary Row */

const summaryRowStyle = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "15px",
  color: "lightgray",
  fontSize: "14px",
};

export default Cart;