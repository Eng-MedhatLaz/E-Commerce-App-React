import { BsBag } from "react-icons/bs";
import logo from "../../imgs/logo.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleToggle } from "../../store";
import { useEffect, useState } from "react";

function Navbar() {
  const dispatch = useDispatch();

  const { itemAmount } = useSelector((state) => state.cart);

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <nav
      className={`${
        isActive ? "bg-white shadow-md py-4" : "bg-none py-6"
      } fixed w-full z-10 transition-all`}
    >
      <div className=" flex justify-between items-center container mx-auto relative ">
        <Link to="/">
          <img className="w-[40px]" src={logo} alt="logo" />
        </Link>
        <div
          className=" cursor-pointer relative"
          onClick={() => dispatch(handleToggle())}
        >
          <BsBag className=" text-2xl" />
          <div
            className="bg-red-500 absolute -bottom-2 -right-2 text-[13px] w-[18px] h-[18px]
        text-white rounded-full flex justify-center items-center"
          >
            {itemAmount}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
