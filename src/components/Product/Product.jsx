import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { addToCart } from "../../store";

function Product() {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredProducts = products.filter((product) => {
    return (
      product.category === "men's clothing" ||
      product.category === "women's clothing"
    );
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-[30px]">
      {filteredProducts.map((product) => {
        const { id, category, image, price, title } = product;

        return (
          <div className="relative overflow-hidden group transition" key={id}>
            <div
              className="border border-[#e4e4e4] h-[300px] mb-4 
    flex  justify-center items-center  group transition"
            >
              <img
                src={image}
                alt={title}
                className="max-h-[160px] group-hover:scale-110 transition duration-500"
              />
            </div>
            <div
              className="absolute top-6 -right-11 group-hover:right-5 p-2 
 opacity-0 group-hover:opacity-100 transition-all duration-300 "
            >
              <button
                className="text-white w-12 h-12 bg-red-500 flex items-center justify-center  "
                onClick={() => dispatch(addToCart(product))}
              >
                <BsPlus className="text-3xl" />
              </button>
              <Link
                className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"
                to={`product/${id}`}
              >
                <BsEyeFill />
              </Link>
            </div>
            <div className="text-sm capitalize text-center ">
              <p className="text-gray-500 mb-3">{category}</p>
              <h2 className="font-semibold mb-2 text-lg">
                {title.slice(0, 25)}
              </h2>
              <h5 className="font-semibold">$ {price}</h5>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Product;
