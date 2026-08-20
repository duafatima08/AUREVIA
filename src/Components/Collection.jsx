import ProductCard from "./ProductCard";

import watchMen1 from "../assets/men 01.jpg";
import watchMen2 from "../assets/men 2.jpg";
import watchMen3 from "../assets/men 03.jpg";
import watchMen4 from "../assets/men 04.avif";

import watchWomen1 from "../assets/women 1.avif";
import watchWomen2 from "../assets/women 2.png";
import watchWomen3 from "../assets/women 3.jpg";
import watchWomen4 from "../assets/women 4.webp";

import watchUnisex1 from "../assets/unisex-1.jpg";
import watchUnisex2 from "../assets/unisex-2.webp";

function Collection({ onAddToCart }) {
  const menWatches = [
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
  ];

  const womenWatches = [
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
  ];

  const unisexWatches = [
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
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, ivory, lavender, whitesmoke)",
        padding: "70px 6%",
        boxSizing: "border-box",
      }}
    >
      {/* Collection Header */}

      <section
        style={{
          maxWidth: "850px",
          margin: "0 auto 75px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "slateblue",
            fontSize: "12px",
            fontWeight: "700",
            letterSpacing: "4px",
            textTransform: "uppercase",
            margin: "0 0 14px",
          }}
        >
          Aurevia Collection
        </p>

        <h1
          style={{
            color: "midnightblue",
            fontSize: "clamp(34px, 6vw, 60px)",
            lineHeight: "1.05",
            margin: "0 0 20px",
            fontWeight: "700",
          }}
        >
          Discover Your Timepiece
        </h1>

        <div
          style={{
            width: "70px",
            height: "3px",
            background:
              "linear-gradient(90deg, midnightblue, mediumpurple)",
            borderRadius: "10px",
            margin: "0 auto 22px",
          }}
        />

        <p
          style={{
            color: "dimgray",
            fontSize: "15px",
            lineHeight: "1.8",
            margin: 0,
          }}
        >
          Explore our complete collection of carefully selected
          timepieces, created for elegance, precision, and timeless
          style.
        </p>
      </section>

      {/* Popular Collections */}

      <section
        style={{
          maxWidth: "1300px",
          margin: "0 auto 75px",
          padding: "35px",
          background:
            "linear-gradient(135deg, white, lavender)",
          borderRadius: "24px",
          border: "1px solid lightsteelblue",
          boxShadow: "0 15px 40px lightgray",
          boxSizing: "border-box",
        }}
      >
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
              letterSpacing: "3px",
              textTransform: "uppercase",
              margin: "0 0 8px",
            }}
          >
            Popular
          </p>

          <h2
            style={{
              color: "midnightblue",
              fontSize: "clamp(26px, 4vw, 40px)",
              margin: 0,
            }}
          >
            Popular Timepieces
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(4, minmax(0, 1fr))",
            gap: "22px",
          }}
          className="popular-grid"
        >
          <PopularCard
            image={watchMen1}
            title="Men's Collection"
            text="Bold designs for a confident style."
          />

          <PopularCard
            image={watchWomen1}
            title="Women's Collection"
            text="Elegant pieces for every occasion."
          />

          <PopularCard
            image={watchUnisex1}
            title="Unisex Collection"
            text="Modern watches for every style."
          />

          <PopularCard
            image={watchMen3}
            title="Premium Collection"
            text="Exceptional designs made to impress."
          />
        </div>
      </section>

      {/* Men's Collection */}

      <CollectionSection
        title="Men's Watches"
        subtitle="Designed for confidence and timeless character."
        watches={menWatches}
        onAddToCart={onAddToCart}
      />

      {/* Women's Collection */}

      <CollectionSection
        title="Women's Watches"
        subtitle="Elegant timepieces created for every occasion."
        watches={womenWatches}
        onAddToCart={onAddToCart}
      />

      {/* Unisex Collection */}

      <CollectionSection
        title="Unisex Watches"
        subtitle="Versatile designs made for every style."
        watches={unisexWatches}
        onAddToCart={onAddToCart}
      />

      {/* Bottom CTA */}

      <section
        style={{
          maxWidth: "1000px",
          margin: "20px auto 0",
          padding: "55px 25px",
          textAlign: "center",
          background:
            "linear-gradient(135deg, midnightblue, mediumpurple)",
          borderRadius: "25px",
          color: "ivory",
          boxShadow: "0 15px 40px lightgray",
        }}
      >
        <p
          style={{
            fontSize: "11px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "lavender",
            margin: "0 0 12px",
          }}
        >
          Your Time. Your Style.
        </p>

        <h2
          style={{
            fontSize: "clamp(25px, 4vw, 38px)",
            margin: "0 0 12px",
          }}
        >
          Find the Watch That Defines You
        </h2>

        <p
          style={{
            color: "lavender",
            fontSize: "14px",
            lineHeight: "1.7",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          Every Aurevia timepiece is selected to bring together
          precision, personality, and timeless design.
        </p>
      </section>

      {/* Responsive CSS */}

      <style>
        {`
          @media (max-width: 1000px) {
            .popular-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            }

            .collection-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            }
          }

          @media (max-width: 600px) {
            main {
              padding: 50px 5% !important;
            }

            .popular-grid {
              grid-template-columns: 1fr !important;
            }

            .collection-grid {
              grid-template-columns: 1fr !important;
            }

            .popular-grid > div {
              min-width: 0 !important;
            }
          }
        `}
      </style>
    </main>
  );
}

/* Popular Collection Card */

function PopularCard({ image, title, text }) {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "18px",
        overflow: "hidden",
        border: "1px solid lightsteelblue",
        boxShadow: "0 8px 25px lightgray",
      }}
    >
      <div
        style={{
          height: "220px",
          background:
            "linear-gradient(145deg, black, midnightblue, darkslategray)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>

      <div
        style={{
          padding: "20px",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            color: "midnightblue",
            fontSize: "18px",
            margin: "0 0 8px",
          }}
        >
          {title}
        </h3>

        <p
          style={{
            color: "dimgray",
            fontSize: "13px",
            lineHeight: "1.6",
            margin: 0,
          }}
        >
          {text}
        </p>
      </div>
    </div>
  );
}

/* Product Collection Section */

function CollectionSection({
  title,
  subtitle,
  watches,
  onAddToCart,
}) {
  return (
    <section
      style={{
        maxWidth: "1300px",
        margin: "0 auto 80px",
      }}
    >
      <div
        style={{
          marginBottom: "30px",
        }}
      >
        <p
          style={{
            color: "slateblue",
            fontSize: "11px",
            fontWeight: "700",
            letterSpacing: "3px",
            textTransform: "uppercase",
            margin: "0 0 8px",
          }}
        >
          Aurevia
        </p>

        <h2
          style={{
            color: "midnightblue",
            fontSize: "clamp(26px, 4vw, 38px)",
            margin: "0 0 8px",
            fontWeight: "700",
          }}
        >
          {title}
        </h2>

        <p
          style={{
            color: "dimgray",
            fontSize: "14px",
            margin: 0,
          }}
        >
          {subtitle}
        </p>
      </div>

      <div
        className="collection-grid"
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(4, minmax(0, 1fr))",
          gap: "25px",
        }}
      >
        {watches.map((watch) => (
          <ProductCard
            key={watch.id}
            id={watch.id}
            image={watch.image}
            name={watch.name}
            category={watch.category}
            price={watch.price}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
}

export default Collection;