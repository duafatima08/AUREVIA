import ProductCard from "./ProductCard";

import watchMen1 from "../assets/images/men 01.jpg";
import watchMen2 from "../assets/images/men 2.jpg";
import watchMen3 from "../assets/images/men 03.jpg";
import watchMen4 from "../assets/images/men 04.jpg";

import watchWomen1 from "../assets/images/women 1.avif";
import watchWomen2 from "../assets/images/women 2.png";
import watchWomen3 from "../assets/images/women 3.jpg";
import watchWomen4 from "../assets/images/women 4.webp";

import watchUnisex1 from "../assets/images/unisex-1.jpg";
import watchUnisex2 from "../assets/images/unisex-2.jpg";

function ProductSection() {
  const watches = [
    {
      id: 1,
      image: watchMen1,
      name: "Watch Men 01",
      category: "Men",
      price: 180,
    },
    {
      id: 2,
      image: watchMen2,
      name: "Watch Men 02",
      category: "Men",
      price: 220,
    },
    {
      id: 3,
      image: watchMen3,
      name: "Watch Men 03",
      category: "Men",
      price: 250,
    },
    {
      id: 4,
      image: watchMen4,
      name: "Watch Men 04",
      category: "Men",
      price: 290,
    },
    {
      id: 5,
      image: watchWomen1,
      name: "Watch Women 01",
      category: "Women",
      price: 190,
    },
    {
      id: 6,
      image: watchWomen2,
      name: "Watch Women 02",
      category: "Women",
      price: 230,
    },
    {
      id: 7,
      image: watchWomen3,
      name: "Watch Women 03",
      category: "Women",
      price: 260,
    },
    {
      id: 8,
      image: watchWomen4,
      name: "Watch Women 04",
      category: "Women",
      price: 300,
    },
    {
      id: 9,
      image: watchUnisex1,
      name: "Watch Unisex 01",
      category: "Unisex",
      price: 240,
    },
    {
      id: 10,
      image: watchUnisex2,
      name: "Watch Unisex 02",
      category: "Unisex",
      price: 280,
    },
  ];

  return (
    <section
      style={{
        backgroundColor: "ivory",
        padding: "80px 7%",
        boxSizing: "border-box",
      }}
    >
      {/* Section Heading */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "50px",
        }}
      >
        <p
          style={{
            color: "darkgoldenrod",
            fontSize: "13px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}
        >
          Our Collection
        </p>

        <h2
          style={{
            color: "black",
            fontSize: "clamp(32px, 5vw, 48px)",
            margin: "0 0 15px",
          }}
        >
          Timeless Timepieces
        </h2>

        <p
          style={{
            color: "dimgray",
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: "1.7",
            fontSize: "15px",
          }}
        >
          Explore our carefully selected collection of men's, women's,
          and unisex watches designed to complement every style.
        </p>
      </div>

      {/* Product Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
          gap: "30px",
          maxWidth: "1300px",
          margin: "0 auto",
        }}
      >
        {watches.map((watch) => (
          <ProductCard
            key={watch.id}
            image={watch.image}
            name={watch.name}
            category={watch.category}
            price={watch.price}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductSection;