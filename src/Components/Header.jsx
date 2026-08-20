import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{
        width: "100%",
        backgroundColor: "black",
        color: "white",
        padding: "18px 6%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxSizing: "border-box",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        borderBottom: "1px solid dimgray",
      }}
    >
      {/* Logo */}
      <div
        style={{
          fontSize: "26px",
          fontWeight: "bold",
          letterSpacing: "4px",
          color: "gold",
          whiteSpace: "nowrap",
        }}
      >
        AUREVIA
      </div>

      {/* Desktop Navigation */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          gap: "28px",
        }}
      >
        <button style={navButtonStyle}>Home</button>

        <button style={navButtonStyle}>Collection</button>

        <button style={navButtonStyle}>Add Product</button>

        <button
          style={{
            ...navButtonStyle,
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          Cart
          <span
            style={{
              backgroundColor: "gold",
              color: "black",
              borderRadius: "50%",
              width: "20px",
              height: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "11px",
              fontWeight: "bold",
            }}
          >
            0
          </span>
        </button>

        <button
          style={{
            backgroundColor: "transparent",
            color: "white",
            border: "1px solid gold",
            padding: "9px 18px",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          Login
        </button>

        <button
          style={{
            backgroundColor: "gold",
            color: "black",
            border: "1px solid gold",
            padding: "9px 18px",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: "600",
          }}
        >
          Sign Up
        </button>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: "none",
          backgroundColor: "transparent",
          color: "white",
          border: "none",
          fontSize: "28px",
          cursor: "pointer",
        }}
      >
        ☰
      </button>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "72px",
            left: 0,
            width: "100%",
            backgroundColor: "black",
            borderTop: "1px solid dimgray",
            borderBottom: "1px solid dimgray",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            boxSizing: "border-box",
          }}
        >
          <button style={mobileButtonStyle}>Home</button>

          <button style={mobileButtonStyle}>Collection</button>

          <button style={mobileButtonStyle}>Add Product</button>

          <button style={mobileButtonStyle}>Cart</button>

          <button
            style={{
              ...mobileButtonStyle,
              border: "1px solid gold",
              padding: "10px",
            }}
          >
            Login
          </button>

          <button
            style={{
              ...mobileButtonStyle,
              backgroundColor: "gold",
              color: "black",
              padding: "10px",
            }}
          >
            Sign Up
          </button>
        </div>
      )}
    </header>
  );
}

const navButtonStyle = {
  backgroundColor: "transparent",
  color: "white",
  border: "none",
  cursor: "pointer",
  fontSize: "14px",
  padding: "6px 0",
};

const mobileButtonStyle = {
  backgroundColor: "transparent",
  color: "white",
  border: "none",
  cursor: "pointer",
  fontSize: "15px",
  textAlign: "left",
};

export default Header;