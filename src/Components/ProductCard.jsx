function ProductCard({ image, name, category, price }) {
  return (
    <div
      style={{
        backgroundColor: "white",
        border: "1px solid lightgray",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 5px 20px lightgray",
        transition: "0.3s",
      }}
    >
      {/* Watch Image */}
      <div
        style={{
          backgroundColor: "whitesmoke",
          height: "280px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <img
          src={image}
          alt={name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>

      {/* Watch Details */}
      <div
        style={{
          padding: "22px",
        }}
      >
        <p
          style={{
            color: "dimgray",
            fontSize: "12px",
            letterSpacing: "2px",
            textTransform: "uppercase",
            marginBottom: "8px",
          }}
        >
          {category}
        </p>

        <h3
          style={{
            color: "black",
            fontSize: "20px",
            margin: "0 0 10px",
          }}
        >
          {name}
        </h3>

        <p
          style={{
            color: "darkgoldenrod",
            fontSize: "18px",
            fontWeight: "600",
            marginBottom: "18px",
          }}
        >
          ${price}
        </p>

        <button
          style={{
            width: "100%",
            backgroundColor: "black",
            color: "white",
            border: "none",
            padding: "12px",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: "600",
          }}
        >
          + Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;