import heroWatch from "../assets/images/hero-watch.jpg";

function Hero() {
  return (
    <section
      style={{
        minHeight: "85vh",
        backgroundColor: "black",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "50px",
        padding: "70px 7%",
        boxSizing: "border-box",
      }}
    >
      {/* Hero Content */}
      <div
        style={{
          flex: "1",
          maxWidth: "600px",
        }}
      >
        <p
          style={{
            color: "gold",
            fontSize: "14px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            marginBottom: "20px",
          }}
        >
          Timeless Luxury
        </p>

        <h1
          style={{
            fontSize: "clamp(42px, 6vw, 76px)",
            lineHeight: "1.05",
            fontWeight: "700",
            letterSpacing: "2px",
            margin: "0 0 25px",
          }}
        >
          TIMELESS.
          <br />
          REFINED.
          <br />
          <span style={{ color: "gold" }}>AUREVIA.</span>
        </h1>

        <p
          style={{
            color: "lightgray",
            fontSize: "17px",
            lineHeight: "1.8",
            maxWidth: "500px",
            marginBottom: "35px",
          }}
        >
          Discover elegant timepieces designed for every moment.
          Explore our collection of men's, women's, and unisex watches.
        </p>

        <button
          style={{
            backgroundColor: "gold",
            color: "black",
            border: "none",
            padding: "14px 30px",
            fontSize: "15px",
            fontWeight: "600",
            letterSpacing: "1px",
            cursor: "pointer",
            borderRadius: "3px",
          }}
        >
          Explore Collection
        </button>
      </div>

      {/* Hero Image */}
      <div
        style={{
          flex: "1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={heroWatch}
          alt="Aurevia luxury watch"
          style={{
            width: "100%",
            maxWidth: "520px",
            height: "auto",
            objectFit: "contain",
            display: "block",
          }}
        />
      </div>
    </section>
  );
}

export default Hero;