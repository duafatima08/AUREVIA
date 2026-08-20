function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "60px 7% 25px",
        boxSizing: "border-box",
      }}
    >
      {/* Footer Main */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "40px",
          maxWidth: "1300px",
          margin: "0 auto",
          paddingBottom: "45px",
        }}
      >
        {/* Brand */}
        <div>
          <h2
            style={{
              color: "gold",
              fontSize: "25px",
              letterSpacing: "4px",
              marginBottom: "18px",
            }}
          >
            AUREVIA
          </h2>

          <p
            style={{
              color: "lightgray",
              lineHeight: "1.8",
              fontSize: "14px",
              maxWidth: "300px",
            }}
          >
            Timeless watches designed with elegance, precision, and
            sophistication for every moment.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3
            style={{
              fontSize: "16px",
              marginBottom: "20px",
              letterSpacing: "1px",
            }}
          >
            Quick Links
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <button style={footerLinkStyle}>Home</button>
            <button style={footerLinkStyle}>Collection</button>
            <button style={footerLinkStyle}>Cart</button>
            <button style={footerLinkStyle}>Login</button>
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3
            style={{
              fontSize: "16px",
              marginBottom: "20px",
              letterSpacing: "1px",
            }}
          >
            Collections
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <button style={footerLinkStyle}>Men's Watches</button>
            <button style={footerLinkStyle}>Women's Watches</button>
            <button style={footerLinkStyle}>Unisex Watches</button>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3
            style={{
              fontSize: "16px",
              marginBottom: "20px",
              letterSpacing: "1px",
            }}
          >
            Contact
          </h3>

          <p
            style={{
              color: "lightgray",
              fontSize: "14px",
              marginBottom: "10px",
            }}
          >
            Email: info@aurevia.com
          </p>

          <p
            style={{
              color: "lightgray",
              fontSize: "14px",
              marginBottom: "10px",
            }}
          >
            Phone: +92 300 0000000
          </p>

          <p
            style={{
              color: "lightgray",
              fontSize: "14px",
            }}
          >
            Karachi, Pakistan
          </p>
        </div>
      </div>

      {/* Divider */}
      <div
        style={{
          borderTop: "1px solid dimgray",
          paddingTop: "22px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "gray",
            fontSize: "13px",
            margin: 0,
          }}
        >
          © 2026 AUREVIA. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

const footerLinkStyle = {
  backgroundColor: "transparent",
  color: "lightgray",
  border: "none",
  padding: 0,
  textAlign: "left",
  cursor: "pointer",
  fontSize: "14px",
};

export default Footer;