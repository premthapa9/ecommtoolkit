import React from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { cartItem } = useSelector((state) => state.cart);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center">
        <div className="text-lg font-bold ">
          <Link to={"/"}>E-Brand</Link>
        </div>
        <div className="relative flex-1 mx-4">
          <form>
            <input
              type="text"
              placeholder="Search Product"
              className="w-full border py-2 px-4"
            />
            <FaSearch className="absolute top-3 right-3 text-red-500" />
          </form>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative ">
            <Link to={"/cart"}>
              <FaShoppingCart />
            </Link>
            {cartItem?.length > 0 && (
              <div className="absolute -top-2 -right-2 h-4 w-4 flex justify-center items-center rounded-full text-white bg-orange-500 ">
                <p className="font-light text-xs">{cartItem?.length}</p>
              </div>
            )}
          </div>
          <button className="hidden md:block">Login | Register</button>
          <button className="block md:hidden">
            <FaUser />
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center py-4 space-x-10 text-sm font-bold">
        <Link to={"/"} className="hover:underline underline-offset-8">
          HOME
        </Link>
        <Link to={"/shop"} className="hover:underline underline-offset-8">
          SHOP
        </Link>
        <Link to={"/"} className="hover:underline underline-offset-8">
          CONTACT
        </Link>
        <Link to={"/"} className="hover:underline underline-offset-8">
          ABOUT
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
