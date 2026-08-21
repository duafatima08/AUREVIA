import Hero from "../Components/Hero";
import ProductSection from "../Components/ProductSection";

function Home({ onAddToCart }) {
  return (
    <main>
      <Hero />
       <ProductSection
        onAddToCart={onAddToCart} />
    </main>
  );
}

export default Home;