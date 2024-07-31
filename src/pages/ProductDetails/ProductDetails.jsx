import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../../store";
import { useEffect } from "react";

function ProductDetails() {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const { id } = useParams();

  const product = products.find((item) => {
    return item?.id === parseInt(id);
  });

  if (!product) {
    return (
      <div className="h-screen flex justify-center items-center">
        <h1 className=" text-3xl">Loading...</h1>
      </div>
    );
  }

  const { title, price, description, image } = product;

  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img
              className="max-w-[150px] lg:max-w-sm"
              src={image}
              alt={title}
            />
          </div>

          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
              {title}
            </h1>

            <p className="text-xl text-red-500 font-medium mb-6">$ {price}</p>
            <p className="mb-8 lg:text-xl">{description}</p>

            <div className=" mb-10">
              <button
                onClick={() => dispatch(addToCart(product))}
                className="bg-primary py-4 px-8 text-white"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
