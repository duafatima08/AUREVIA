import { useState } from "react";
import { myDatabase } from "../supabase";

function AddProduct() {
  const [product, setProduct] = useState({
    name: "",
    category: "Men",
    price: "",
    image: "",
    description: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");

    const price = Number(product.price);

    if (price <= 0) {
      setMessage("Please enter a valid price.");
      return;
    }

    setLoading(true);

    try {
      const { error } = await myDatabase
        .from("products")
        .insert([
          {
            name: product.name.trim(),
            category: product.category,
            price: price,
            image: product.image.trim(),
            description: product.description.trim(),
          },
        ]);

      if (error) {
        console.error("Supabase error:", error);
        setMessage("Unable to add the watch. Please try again.");
        return;
      }

      setMessage("Watch added successfully!");

      setProduct({
        name: "",
        category: "Men",
        price: "",
        image: "",
        description: "",
      });
    } catch (error) {
      console.error("Unexpected error:", error);
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      style={{
        minHeight: "100vh",
        width: "100%",
        background:
          "linear-gradient(135deg, black, midnightblue, darkslategray, lavender)",
        padding: "70px 20px",
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "720px",
          background:
            "linear-gradient(145deg, ivory, lavender, whitesmoke)",
          padding: "clamp(25px, 5vw, 48px)",
          borderRadius: "24px",
          boxSizing: "border-box",
          boxShadow: "0 25px 70px black",
          border: "1px solid lightsteelblue",
        }}
      >
        {/* Heading */}

        <div
          style={{
            textAlign: "center",
            marginBottom: "35px",
          }}
        >
          <p
            style={{
              color: "slateblue",
              fontSize: "11px",
              fontWeight: "700",
              letterSpacing: "4px",
              textTransform: "uppercase",
              margin: "0 0 10px",
            }}
          >
            Aurevia Collection
          </p>

          <h1
            style={{
              color: "midnightblue",
              fontSize: "clamp(28px, 6vw, 42px)",
              margin: "0 0 12px",
              lineHeight: "1.2",
              fontWeight: "700",
            }}
          >
            Add New Watch
          </h1>

          <div
            style={{
              width: "55px",
              height: "3px",
              background:
                "linear-gradient(90deg, midnightblue, mediumpurple)",
              margin: "0 auto 18px",
              borderRadius: "5px",
            }}
          />

          <p
            style={{
              color: "dimgray",
              fontSize: "14px",
              lineHeight: "1.7",
              margin: 0,
            }}
          >
            Add a new timepiece to the Aurevia collection.
          </p>
        </div>

        {/* Form */}

        <form onSubmit={handleSubmit}>
          {/* Product Name */}

          <div style={fieldStyle}>
            <label style={labelStyle}>Watch Name</label>

            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              placeholder="Example: Watch Men 01"
              style={inputStyle}
              required
            />
          </div>

          {/* Category */}

          <div style={fieldStyle}>
            <label style={labelStyle}>Category</label>

            <select
              name="category"
              value={product.category}
              onChange={handleChange}
              style={inputStyle}
            >
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Unisex">Unisex</option>
            </select>
          </div>

          {/* Price */}

          <div style={fieldStyle}>
            <label style={labelStyle}>Price</label>

            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              placeholder="Enter price"
              min="1"
              step="0.01"
              style={inputStyle}
              required
            />
          </div>

          {/* Image */}

          <div style={fieldStyle}>
            <label style={labelStyle}>Watch Image URL</label>

            <input
              type="url"
              name="image"
              value={product.image}
              onChange={handleChange}
              placeholder="https://example.com/watch.jpg"
              style={inputStyle}
              required
            />
          </div>

          {/* Description */}

          <div style={fieldStyle}>
            <label style={labelStyle}>Description</label>

            <textarea
              name="description"
              value={product.description}
              onChange={handleChange}
              placeholder="Write a short description..."
              rows="5"
              style={{
                ...inputStyle,
                resize: "vertical",
                minHeight: "120px",
              }}
              required
            />
          </div>

          {/* Message */}

          {message && (
            <div
              style={{
                backgroundColor: message.includes("successfully")
                  ? "honeydew"
                  : "mistyrose",
                color: message.includes("successfully")
                  ? "seagreen"
                  : "firebrick",
                padding: "12px 15px",
                borderRadius: "10px",
                textAlign: "center",
                fontSize: "13px",
                marginBottom: "18px",
                border: "1px solid lightgray",
              }}
            >
              {message}
            </div>
          )}

          {/* Submit */}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              background: loading
                ? "slategray"
                : "linear-gradient(135deg, midnightblue, mediumpurple)",
              color: "ivory",
              border: "1px solid slateblue",
              padding: "14px",
              borderRadius: "20px",
              fontSize: "14px",
              fontWeight: "700",
              letterSpacing: "1px",
              cursor: loading ? "not-allowed" : "pointer",
              marginTop: "8px",
              boxShadow: "0 8px 20px lightsteelblue",
            }}
          >
            {loading ? "Adding Watch..." : "Add Watch"}
          </button>
        </form>
      </div>
    </section>
  );
}

const fieldStyle = {
  marginBottom: "19px",
};

const labelStyle = {
  display: "block",
  color: "midnightblue",
  fontSize: "13px",
  fontWeight: "700",
  marginBottom: "8px",
};

const inputStyle = {
  width: "100%",
  padding: "13px 14px",
  border: "1px solid lightsteelblue",
  borderRadius: "10px",
  boxSizing: "border-box",
  fontSize: "14px",
  outline: "none",
  backgroundColor: "white",
  color: "midnightblue",
};

export default AddProduct;