import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      style={{
        background:
          "linear-gradient(135deg, black, midnightblue, darkslategray)",
        color: "ivory",
        padding: "65px 7% 25px",
        boxSizing: "border-box",
        borderTop: "1px solid slateblue",
      }}
    >
      {/* Footer Main */}

      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1.3fr",
          gap: "45px",
          paddingBottom: "45px",
        }}
      >
        {/* Brand */}

        <div>
          <Link
            to="/"
            style={{
              color: "ivory",
              fontSize: "26px",
              fontWeight: "700",
              letterSpacing: "5px",
              textDecoration: "none",
            }}
          >
            AUREVIA
          </Link>

          <p
            style={{
              color: "lavender",
              fontSize: "11px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              margin: "10px 0 20px",
            }}
          >
            The Art of Time
          </p>

          <p
            style={{
              color: "lightgray",
              fontSize: "14px",
              lineHeight: "1.8",
              maxWidth: "330px",
              margin: 0,
            }}
          >
            Discover timeless watches designed with precision,
            elegance, and modern sophistication.
          </p>
        </div>

        {/* Quick Links */}

        <div>
          <h3 style={headingStyle}>Explore</h3>

          <div style={linkContainerStyle}>
            <Link to="/" style={footerLinkStyle}>
              Home
            </Link>

            <Link to="/collection" style={footerLinkStyle}>
              Collection
            </Link>

            <Link to="/add-product" style={footerLinkStyle}>
              Add Product
            </Link>

            <Link to="/cart" style={footerLinkStyle}>
              Shopping Cart
            </Link>
          </div>
        </div>

        {/* Collections */}

        <div>
          <h3 style={headingStyle}>Collections</h3>

          <div style={linkContainerStyle}>
            <Link to="/collection" style={footerLinkStyle}>
              Men's Watches
            </Link>

            <Link to="/collection" style={footerLinkStyle}>
              Women's Watches
            </Link>

            <Link to="/collection" style={footerLinkStyle}>
              Unisex Watches
            </Link>

            <Link to="/collection" style={footerLinkStyle}>
              Featured Watches
            </Link>
          </div>
        </div>

        {/* Contact */}

        <div>
          <h3 style={headingStyle}>Contact</h3>

          <p style={contactStyle}>
            Email
            <br />
            <span style={{ color: "lavender" }}>
              duafatimaoffical25@gmail.com
            </span>
          </p>

          <p style={contactStyle}>
            Phone
            <br />
            <span style={{ color: "lavender" }}>
              +92 300 0000000
            </span>
          </p>

          <p style={contactStyle}>
            Location
            <br />
            <span style={{ color: "lavender" }}>
              Karachi, Pakistan
            </span>
          </p>
        </div>
      </div>

      {/* Decorative Line */}

      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, slateblue, mediumpurple, transparent)",
        }}
      />

      {/* Bottom Footer */}

      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          paddingTop: "22px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "15px",
          flexWrap: "wrap",
        }}
      >
        <p
          style={{
            color: "gray",
            fontSize: "12px",
            margin: 0,
          }}
        >
          © 2026 AUREVIA. All Rights Reserved.
        </p>

        <p
          style={{
            color: "gray",
            fontSize: "12px",
            margin: 0,
          }}
        >
          Crafted for timeless moments.
        </p>
      </div>

      {/* Responsive Styling */}

      <style>
        {`
          @media (max-width: 900px) {
            footer > div:first-child {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }

          @media (max-width: 600px) {
            footer {
              padding: 50px 6% 20px !important;
            }

            footer > div:first-child {
              grid-template-columns: 1fr !important;
              gap: 35px !important;
            }

            footer > div:last-child {
              flex-direction: column !important;
              text-align: center !important;
              justify-content: center !important;
            }
          }
        `}
      </style>
    </footer>
  );
}

const headingStyle = {
  color: "ivory",
  fontSize: "15px",
  fontWeight: "600",
  letterSpacing: "1px",
  margin: "0 0 20px",
};

const linkContainerStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
};

const footerLinkStyle = {
  color: "lightgray",
  fontSize: "13px",
  textDecoration: "none",
  transition: "0.3s",
};

const contactStyle = {
  color: "gray",
  fontSize: "13px",
  lineHeight: "1.7",
  margin: "0 0 14px",
};

export default Footer;