import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleClose } from "../../store";
import CartItem from "../CartItem/CartItem";
import { clearCart, updateTotal, updateAmount } from "../../store";
import { useEffect } from "react";

function Sidebar() {
  const dispatch = useDispatch();

  const {
    sidebar: { isOpen },
    cart: { cart, itemAmount, total },
  } = useSelector((state) => {
    return {
      sidebar: state.sidebar,
      cart: state.cart,
    };
  });

  useEffect(() => {
    dispatch(updateTotal());
  }, [cart, dispatch]);

  useEffect(() => {
    dispatch(updateAmount());
  });

  return (
    <div
      className={`${isOpen ? "right-0" : "-right-full"}
  w-full h-full bg-white fixed top-0 shadow-2xl transition-all 
  duration-300 z-20 md:w-[55vw] xl:max-w-[30vw] px-[35px]`}
    >
      <div className=" flex  items-center justify-between py-6 border-b ">
        <span className=" capitalize text-sm font-semibold">
          Shopping Bag ({itemAmount})
        </span>
        <span
          className=" cursor-pointer "
          onClick={() => dispatch(handleClose())}
        >
          <IoMdArrowForward className="text-2xl" />
        </span>
      </div>
      <div
        className="flex flex-col gap-y-2 h-[355px] md:h-[800px] lg:h-[430px] px-1 
      overflow-y-auto overflow-x-hidden border-b"
      >
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </div>
      <div className=" flex justify-between items-center mt-3">
        <div className="font-semibold capitalize text-lg">
          <p>
            <span className="mr-2">Total:</span>$ {parseFloat(total).toFixed(2)}
          </p>
        </div>
        <div
          className="cursor-pointer  bg-red-500 text-white p-4 flex justify-center items-center text-xl"
          onClick={() => dispatch(clearCart())}
        >
          <FiTrash2 />
        </div>
      </div>
      <Link
        className="bg-gray-200 p-4 flex  justify-center items-center my-4 text-primary w-full font-medium"
        to="/"
      >
        View cart
      </Link>
      <Link
        className="bg-primary p-4 flex  justify-center items-center  text-white w-full font-medium"
        to="/"
      >
        Checkout
      </Link>
    </div>
  );
}

export default Sidebar;
