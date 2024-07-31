import Hero from "../../components/Hero/Hero";
import Product from "../../components/Product/Product";

function Home() {
  return (
    <section>
      <Hero />
      <div className="py-16">
        <div className="container mx-auto mt-20 font-semibold">
          <h1 className="text-center text-5xl mb-20">All Products</h1>
          <Product />
        </div>
      </div>
    </section>
  );
}

export default Home;
