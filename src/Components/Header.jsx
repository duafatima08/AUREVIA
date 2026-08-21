import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header({ cartItems = [] }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= 768
  );

  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;

      setIsMobile(mobile);

      if (!mobile) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  // Total quantity of products in cart
  const cartCount = cartItems.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );

  return (
    <header style={{width: "100%",background:"linear-gradient(90deg, black, midnightblue, darkslategray, black)",
        color: "ivory",padding: isMobile ? "14px 5%" : "18px 6%",display: "flex",alignItems: "center",justifyContent: "space-between",boxSizing: "border-box",position: "sticky",        borderBottom: "1px solid slategray",
        boxShadow: "0 6px 25px black",
      }}
    >
      {/* Logo */}

      <Link
        to="/"
        onClick={closeMenu}
        style={{textDecoration: "none",color: "ivory",fontSize: isMobile ? "21px" : "26px",fontWeight: "bold",
          letterSpacing: isMobile ? "3px" : "4px",whiteSpace: "nowrap",textShadow: "0 0 14px lavender",}}>
        AUREVIA
      </Link>

      {/* Desktop Navigation */}

      {!isMobile && (
        <nav style={{display: "flex",alignItems: "center",gap: "20px",flexWrap: "wrap",justifyContent: "flex-end",}}>
        
          <NavItem to="/"text="Home"active={isActive("/")}/>

          <NavItem to="/collection" text="Collection" active={isActive("/collection")}/>

          <NavItem to="/add-product" text="Add Product" active={isActive("/add-product")}/>

          {/* Cart */}

          <Link to="/cart"
            style={{...navButtonStyle,color: isActive("/cart")
                ? "lavender": "ivory",display: "flex",alignItems: "center",gap: "8px",}}>Cart
         <CartBadge count={cartCount} />
          </Link>

          {/* Login */}

          <Link to="/auth"
            style={{backgroundColor: "transparent",color: "ivory",border: "1px solid slateblue",
              padding: "9px 18px",borderRadius: "20px",fontSize: "14px",textDecoration: "none",whiteSpace: "nowrap",
            }}>Login</Link>

          {/* Sign Up */}

          <Link to="/auth"
            style={{background:"linear-gradient(135deg, midnightblue, mediumpurple)",color: "ivory",border: "1px solid slateblue",padding: "10px 20px",borderRadius: "20px",fontSize: "14px",
              fontWeight: "600",textDecoration: "none",boxShadow: "0 5px 15px slateblue",whiteSpace: "nowrap",}}>
                Sign Up
          </Link>
        </nav>
      )}

      {/* Mobile Menu Button */}

      {isMobile && (
        <button onClick={() => setMenuOpen(!menuOpen)}aria-label="Toggle navigation menu"style={{backgroundColor: "transparent",color: "lavender",border: "none",fontSize: "28px",cursor: "pointer",padding: "4px",lineHeight: 1,}}>
          {menuOpen ? "×" : "☰"}
        </button>
      )}

      {/* Mobile Navigation */}

      {isMobile && menuOpen && (
        <div style={{position: "absolute",top: "100%",left: 0,width: "100%",
            background:"linear-gradient(180deg, black, midnightblue, darkslategray)",borderTop: "1px solid slategray",borderBottom: "1px solid slategray",padding: "22px 6%",display: "flex",flexDirection: "column",gap: "16px",boxSizing: "border-box",boxShadow: "0 12px 30px black",
          }}>
          <MobileItem to="/"text="Home"active={isActive("/")}onClick={closeMenu}/>
          <MobileIte to="/collection"text="Collection"    active={isActive("/collection")}onClick={closeMenu}/>

          <MobileItem to="/add-product" text="Add Product"active={isActive("/add-product")}onClick={closeMenu}/>

        <Link to="/cart" onClick={closeMenu}
            style={{...mobileButtonStyle,color: isActive("/cart")? "lavender": "ivory",display: "flex",alignItems: "center",justifyContent: "space-between",borderBottom: isActive("/cart")
                ? "1px solid mediumpurple": "1px solid transparent",paddingBottom: "8px",textDecoration: "none",}}>
            <span>Cart</span>
     <CartBadge count={cartCount} /></Link>

          {/* Mobile Login */}

          <Link to="/auth" onClick={closeMenu}
            style={{...mobileButtonStyle,border: "1px solid slateblue",padding: "11px", textAlign: "center",  borderRadius: "20px",textDecoration: "none",
            }}> Login</Link>

          <Link to="/auth" onClick={closeMenu}
            style={{...mobileButtonStyle,background:"linear-gradient(135deg, midnightblue, mediumpurple)",
              color: "ivory",border: "1px solid slateblue",padding: "11px",textAlign: "center",borderRadius: "20px",textDecoration: "none",fontWeight: "600",
            }}>Sign Up</Link>
        </div>
      )}
    </header>
  );
}

/* Cart Badge */

function CartBadge({ count }) {
  return (
    <span style={{background:"linear-gradient(135deg, mediumpurple, midnightblue)",color: "ivory",borderRadius: "50%",width: "22px",  height: "22px",   minWidth: "22px",
        display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px",fontWeight: "bold", boxShadow: "0 0 10px slateblue",
      }}    > {count}</span>
  );
}

/* Desktop Navigation Item */

function NavItem({ to, text, active }) {
  return (
    <Link to={to}
      style={{...navButtonStyle, color: active ? "lavender" : "ivory",  borderBottom: active
          ? "2px solid mediumpurple"  : "2px solid transparent", paddingBottom: "6px",  whiteSpace: "nowrap",
      }} > {text}
    </Link>
  );
}

/* Mobile Navigation Item */

function MobileItem({ to, text, active, onClick }) {
  return (
    <Link to={to}  onClick={onClick} style={{...mobileButtonStyle, color: active ? "lavender" : "ivory",
        borderBottom: active? "1px solid mediumpurple" : "1px solid transparent", paddingBottom: "8px",
  }} >{text}</Link>
  );
}

const navButtonStyle = {  backgroundColor: "transparent",color: "ivory",border: "none",  cursor: "pointer",fontSize: "14px",padding: "6px 0", textDecoration: "none",};

const mobileButtonStyle = {backgroundColor: "transparent",color: "ivory",border: "none",cursor: "pointer",fontSize: "15px",textAlign: "left",textDecoration: "none",
};
export default Header;