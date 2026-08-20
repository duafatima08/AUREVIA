import { useEffect, useState } from "react";
import heroWatch from "../assets/men 01.jpg";
import { Link } from "react-router-dom";

function Hero() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      style={{
        minHeight: isMobile ? "auto" : "calc(100vh - 80px)",
        background:
          "linear-gradient(135deg, black, midnightblue, darkslategray, black)",
        color: "ivory",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: isMobile ? "35px" : "30px",
        padding: isMobile ? "55px 6% 60px" : "45px 7%",
        boxSizing: "border-box",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Background Glow */}

      <div
        style={{
          position: "absolute",
          width: isMobile ? "250px" : "400px",
          height: isMobile ? "250px" : "400px",
          background:
            "radial-gradient(circle, slateblue, midnightblue, transparent)",
          borderRadius: "50%",
          right: isMobile ? "-80px" : "5%",
          top: isMobile ? "30%" : "15%",
          opacity: 0.25,
          filter: "blur(30px)",
        }}
      />

      {/* Hero Content */}

      <div
        style={{
          flex: "1",
          width: "100%",
          maxWidth: isMobile ? "100%" : "600px",
          position: "relative",
          zIndex: 2,
          textAlign: isMobile ? "center" : "left",
        }}
      >
        <p
          style={{
            color: "lavender",
            fontSize: isMobile ? "11px" : "13px",
            fontWeight: "600",
            letterSpacing: isMobile ? "3px" : "5px",
            textTransform: "uppercase",
            margin: "0 0 16px",
          }}
        >
          The Art of Time
        </p>

        <h1
          style={{
            fontSize: isMobile ? "42px" : "clamp(48px, 5vw, 68px)",
            lineHeight: "1",
            fontWeight: "700",
            letterSpacing: isMobile ? "1px" : "2px",
            margin: "0 0 22px",
          }}
        >
          TIMELESS.
          <br />

          <span
            style={{
              color: "lavender",
              textShadow: "0 0 20px slateblue",
            }}
          >
            ELEGANT.
          </span>

          <br />

          <span style={{ color: "ivory" }}>AUREVIA.</span>
        </h1>

        <p
          style={{
            color: "lightgray",
            fontSize: isMobile ? "14px" : "15px",
            lineHeight: "1.7",
            maxWidth: "500px",
            margin: isMobile ? "0 auto 28px" : "0 0 30px",
          }}
        >
          Discover carefully selected timepieces created for those
          who appreciate precision, elegance, and timeless design.
        </p>

        {/* Buttons */}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: isMobile ? "center" : "flex-start",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          <Link
            to="/collection"
            style={{
              display: "inline-block",
              background:
                "linear-gradient(135deg, midnightblue, mediumpurple)",
              color: "ivory",
              padding: "12px 24px",
              fontSize: "13px",
              fontWeight: "700",
              letterSpacing: "0.5px",
              textDecoration: "none",
              borderRadius: "25px",
              border: "1px solid slateblue",
              boxShadow: "0 8px 20px midnightblue",
            }}
          >
            Explore Collection
          </Link>

          <Link
            to="/about"
            style={{
              display: "inline-block",
              color: "ivory",
              borderBottom: "1px solid lavender",
              paddingBottom: "5px",
              fontSize: "13px",
              textDecoration: "none",
            }}
          >
            Discover Aurevia
          </Link>
        </div>

        {/* Features */}

        <div
          style={{
            display: "flex",
            justifyContent: isMobile ? "center" : "flex-start",
            gap: isMobile ? "25px" : "35px",
            marginTop: "35px",
            flexWrap: "wrap",
          }}
        >
          <Feature number="01" text="Premium Craft" />
          <Feature number="02" text="Timeless Design" />
          <Feature number="03" text="Made to Impress" />
        </div>
      </div>

      {/* Hero Image */}

      <div
        style={{
          flex: "1",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Glow */}

        <div
          style={{
            position: "absolute",
            width: isMobile ? "230px" : "350px",
            height: isMobile ? "230px" : "350px",
            background:
              "radial-gradient(circle, mediumpurple, midnightblue, transparent)",
            borderRadius: "50%",
            opacity: 0.35,
            filter: "blur(25px)",
          }}
        />

        {/* Watch Frame */}

        <div
          style={{
            position: "relative",
            width: isMobile ? "85%" : "90%",
            maxWidth: isMobile ? "320px" : "450px",
            padding: isMobile ? "15px" : "20px",
            borderRadius: isMobile ? "22px" : "28px",
            background:
              "linear-gradient(145deg, darkslategray, midnightblue, black)",
            border: "1px solid slategray",
            boxShadow: "0 20px 50px black",
            boxSizing: "border-box",
          }}
        >
          <img
            src={heroWatch}
            alt="Aurevia luxury men's watch"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
              display: "block",
              borderRadius: "15px",
            }}
          />
        </div>
      </div>
    </section>
  );
}

/* Feature Component */

function Feature({ number, text }) {
  return (
    <div>
      <p
        style={{
          color: "lavender",
          fontSize: "18px",
          fontWeight: "700",
          margin: "0 0 4px",
        }}
      >
        {number}
      </p>

      <p
        style={{
          color: "lightgray",
          fontSize: "11px",
          margin: 0,
        }}
      >
        {text}
      </p>
    </div>
  );
}

export default Hero;