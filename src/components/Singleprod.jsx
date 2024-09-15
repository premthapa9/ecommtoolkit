import React, { useEffect, useState } from "react";
import { FaCar, FaQuestion } from "react-icons/fa";
import { MdKeyboardArrowLeft } from "react-icons/md";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addCart, removeCart } from "../store/cartSlice";

const Singleprod = () => {
  const { prodList } = useSelector((state) => state.prod);
  const { cartItem } = useSelector((state) => state.cart);
  const { id } = useParams();
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [item, setItem] = useState(null);

  const checkCart = (id) => {
    const final = cartItem?.find((el) => el.id === +id);
    return final ? true : false;
  };
  useEffect(() => {
    const myprod = prodList?.find((el) => el.id == id);
    setItem(myprod);
  }, []);
  console.log(cartItem);

  return (
    <div className="container  mt-2 px-4 md:px-16 lg:px-24 flex flex-col gap-6">
      <div className="container mx-auto  grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="border shadow-lg">
          <p
            onClick={() => navigate(-1)}
            className="flex justify-start items-center hover:underline ml-2 mt-2 cursor-pointer"
          >
            <MdKeyboardArrowLeft /> Back to result
          </p>
          <img src={item?.image} alt="" />
        </div>
        <div className="border shadow-lg flex justify-center items-center flex-col gap-3">
          <h2 className="px-5 font-bold">{item?.title}</h2>
          <p>${item?.price}</p>
          <button
            onClick={() => {
              checkCart(id)
                ? dispatch(removeCart(id))
                : dispatch(addCart(item));
            }}
            className="text-black px-3 py-1 border mt-2 rounded-lg bg-orange-500"
          >
            {checkCart(id) ? "Remove from cart" : "Add to cart"}
          </button>
          <p className="flex  items-center gap-2 text-gray-400">
            <FaCar /> Delivery & Return
          </p>
          <p className="flex  items-center gap-2 text-gray-400">
            <FaQuestion /> Ask a question
          </p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-2xl">Product Description</h1>
        <p className="my-4">{item?.description}</p>
      </div>
    </div>
  );
};

export default Singleprod;
