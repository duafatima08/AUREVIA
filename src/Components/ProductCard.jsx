import { useEffect, useState } from "react";

function ProductCard({
  id,
  image,
  name,
  category,
  price,
  onAddToCart,
}) {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= 600
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart({
        id,
        image,
        name,
        category,
        price,
        quantity: 1,
      });
    }
  };

  return (
    <div style={{background:"linear-gradient(145deg, ivory, lavender, whitesmoke)",border: "1px solid lightsteelblue",borderRadius: isMobile ? "14px" : "18px",
        overflow: "hidden",boxShadow: "0 12px 30px lightgray",width: "100%",boxSizing: "border-box",
      }}>
      {/* Product Image */}

      <div style={{background:"linear-gradient(145deg, black, midnightblue, darkslategray)",height: isMobile ? "220px" : "280px",display: "flex",alignItems: "center",
          justifyContent: "center",padding: isMobile ? "18px" : "25px",boxSizing: "border-box",position: "relative",overflow: "hidden",
        }}>
        {/* Glow */}

        <div style={{position: "absolute",width: isMobile ? "150px" : "190px",height: isMobile ? "150px" : "190px",
            background:"radial-gradient(circle, mediumpurple, transparent)",borderRadius: "50%",opacity: 0.3,filter: "blur(25px)",
         }}/>
        {/* Category */}

        <span style={{position: "absolute",top: isMobile ? "10px" : "15px",left: isMobile ? "10px" : "15px",backgroundColor: "midnightblue",color: "lavender",padding: isMobile ? "5px 8px" : "7px 11px",fontSize: isMobile ? "9px" : "10px",
            letterSpacing: "1px",textTransform: "uppercase",borderRadius: "12px",border: "1px solid slateblue",zIndex: 2,
          }}>{category}
        </span>

        <img src={image} alt={name}
          style={{width: "100%",height: "100%",objectFit: "contain",display: "block",position: "relative",zIndex: 1,
          }}/>
      </div>

      {/* Product Details */}

      <div style={{padding: isMobile ? "16px" : "22px",boxSizing: "border-box",}}>
        <p style={{color: "slateblue",fontSize: isMobile ? "9px" : "11px",letterSpacing: "2px",textTransform: "uppercase",margin: "0 0 7px",fontWeight: "600",
          }}>{category}</p>

        <h3 style={{color: "midnightblue",fontSize: isMobile ? "16px" : "19px",fontWeight: "600",margin: "0 0 10px",lineHeight: "1.4",wordBreak: "break-word",
          }}>{name}
        </h3>

        <div style={{display: "flex",alignItems: "center",justifyContent: "space-between",gap: "8px",marginBottom: "15px",}}>
          <p style={{color: "black",fontSize: isMobile ? "16px" : "18px",fontWeight: "700",margin: 0,
            }}>${price}
          </p>

          <span style={{color: "slategray",fontSize: isMobile ? "10px" : "11px",}}>Premium
          </span>
        </div>

        {/* Add To Cart */}
      <button onClick={handleAddToCart}
          style={{width: "100%",background:"linear-gradient(135deg, midnightblue, mediumpurple)",
            color: "ivory",   border: "1px solid slateblue",padding: isMobile ? "10px" : "12px",borderRadius: "20px",
            cursor: "pointer",fontSize: isMobile ? "12px" : "13px",fontWeight: "600",letterSpacing: "0.5px",boxShadow: "0 6px 15px lightsteelblue",boxSizing: "border-box",
          }}>+ Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;