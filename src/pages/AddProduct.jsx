import { useState } from "react";

function AddProduct() {
  const [product, setProduct] = useState({
    name: "",
    category: "Men",
    price: "",
    image: "",
    description: "",
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Product:", product);
  };

  return (
    <section
      style={{
        minHeight: "100vh",
        backgroundColor: "ivory",
        padding: "70px 20px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "700px",
          margin: "0 auto",
          backgroundColor: "white",
          padding: "45px",
          borderRadius: "8px",
          boxSizing: "border-box",
          boxShadow: "0 8px 30px lightgray",
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
              color: "darkgoldenrod",
              fontSize: "13px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "10px",
            }}
          >
            Aurevia Collection
          </p>

          <h1
            style={{
              color: "black",
              fontSize: "32px",
              margin: "0 0 12px",
            }}
          >
            Add New Watch
          </h1>

          <p
            style={{
              color: "dimgray",
              fontSize: "14px",
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
              style={inputStyle}
              min="0"
              required
            />
          </div>

          {/* Image */}
          <div style={fieldStyle}>
            <label style={labelStyle}>Watch Image URL</label>

            <input
              type="text"
              name="image"
              value={product.image}
              onChange={handleChange}
              placeholder="Enter image URL"
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
              }}
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            style={{
              width: "100%",
              backgroundColor: "black",
              color: "white",
              border: "none",
              padding: "14px",
              borderRadius: "4px",
              fontSize: "15px",
              fontWeight: "600",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            Add Watch
          </button>
        </form>
      </div>
    </section>
  );
}

const fieldStyle = {
  marginBottom: "20px",
};

const labelStyle = {
  display: "block",
  color: "black",
  fontSize: "14px",
  fontWeight: "600",
  marginBottom: "8px",
};

const inputStyle = {
  width: "100%",
  padding: "13px",
  border: "1px solid lightgray",
  borderRadius: "4px",
  boxSizing: "border-box",
  fontSize: "14px",
  outline: "none",
  backgroundColor: "white",
};

export default AddProduct;