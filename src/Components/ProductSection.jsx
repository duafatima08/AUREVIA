import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

import watchMen1 from "../assets/men 01.jpg";
import watchMen2 from "../assets/men 2.jpg";

import watchWomen1 from "../assets/women 1.avif";

import watchUnisex1 from "../assets/unisex-1.jpg";

function ProductSection({ onAddToCart }) {
  const [screenSize, setScreenSize] = useState(
    window.innerWidth
  );

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = screenSize <= 600;
  const isTablet = screenSize > 600 && screenSize <= 1000;

  const featuredWatches = [
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
      id: 5,
      image: watchWomen1,
      name: "Watch Women 01",
      category: "Women",
      price: 190,
    },
    {
      id: 9,
      image: watchUnisex1,
      name: "Watch Unisex 01",
      category: "Unisex",
      price: 240,
    },
  ];

  return (
    <section style={{width: "100%",background:"linear-gradient(180deg, ivory, lavender, whitesmoke)",
        padding: isMobile? "60px 5%": isTablet? "70px 5%": "90px 7%",boxSizing: "border-box",  overflow: "hidden",
      }}>
      {/* Section Heading */}

      <div style={{textAlign: "center",width: "100%",maxWidth: "700px",margin: isMobile ? "0 auto 35px" : "0 auto 55px",boxSizing: "border-box",
        }}>
        <p style={{color: "slateblue",fontSize: isMobile ? "10px" : "12px",fontWeight: "600",letterSpacing: isMobile ? "3px" : "4px",textTransform: "uppercase",margin: "0 0 10px",
          }}>Featured Collection</p>

        <h2 style={{color: "midnightblue",fontSize: isMobile? "30px": isTablet? "38px": "clamp(32px, 5vw, 50px)",lineHeight: "1.1",margin: "0 0 15px",fontWeight: "700",
          }}  >Timeless Timepieces</h2>

        <div style={{width: "55px",height: "3px",background:"linear-gradient(90deg, midnightblue, mediumpurple)",margin: "0 auto 18px",borderRadius: "5px",
          }}/>

        <p style={{color: "dimgray",lineHeight: "1.7",fontSize: isMobile ? "13px" : "15px",margin: 0,
          }}>A curated selection of Aurevia's finest timepieces,
          chosen for elegance, precision, and timeless style.
        </p>
      </div>

      {/* Featured Product Grid */}

      <div style={{display: "grid",
          gridTemplateColumns: isMobile? "1fr": isTablet? "repeat(2, minmax(0, 1fr))": "repeat(4, minmax(0, 1fr))",
          gap: isMobile? "20px": isTablet? "24px": "28px",
            width: "100%",maxWidth: "1300px",margin: "0 auto",boxSizing: "border-box",
        }}>
        {featuredWatches.map((watch) => (
          <ProductCard
            key={watch.id}
            image={watch.image}
            name={watch.name}
            category={watch.category}
            price={watch.price}
            onAddToCart={onAddToCart}
          />))}
      </div>
    </section>
  );
}

export default ProductSection;