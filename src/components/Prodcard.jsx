import React, { useEffect, useState } from "react";
import Rating from "./Rating";
import { useDispatch, useSelector } from "react-redux";
import { addCart, removeCart } from "../store/cartSlice";
import { Link } from "react-router-dom";

const Prodcard = ({ prod }) => {
  const {
    id = 1,
    title = "Sony WH-1000XM3 Bluetooth Wireless Over Ear Headphones with Mic (Silver)",
    image = "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947383286-714WUJlhbLS._SL1500_.jpg",
    price = 773,
    description = "Digital noise cancelling : Industry leading Active Noise Cancellation (ANC) lends a personalized, virtually soundproof experience at any situation\r\nHi-Res Audio : A built-in amplifier integrated in HD Noise Cancelling Processor QN1 realises the best-in-class signal-to-noise ratio and low distortion for portable devices.\r\nDriver Unit : Powerful 40-mm drivers with Liquid Crystal Polymer (LCP) diaphragms make the headphones perfect for handling heavy beats and can reproduce a full range of frequencies up to 40 kHz.\r\nVoice assistant : Alexa enabled (In-built) for voice access to music, information and more. Activate with a simple touch. Frequency response: 4 Hz-40,000 Hz",
    brand = "sony",
    model = "WH-1000XM3",
    color = "silver",
    category = "audio",
    discount = 11,
    val = 4,
  } = prod;
  const { cartItem } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log(cartItem);

  const checkCart = (id) => {
    const final = cartItem?.find((el) => el.id === id);
    return final ? true : false;
  };

  return (
    <div className="bg-white p-4 shadow rounded relative border transform transition-transform duration-300 hover:scale-105">
      <Link to={`/product/${id}`}>
        <div>
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-contain mb-4"
          />
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
      </Link>
      <p className="text-gray-500">${price}</p>
      <div>
        <Rating val={val} />
      </div>
      <div className="">
        <button
          onClick={() => {
            checkCart(prod.id)
              ? dispatch(removeCart(prod.id))
              : dispatch(addCart(prod));
          }}
          className="text-black px-3 py-1 border mt-2 rounded-lg bg-orange-500"
        >
          {checkCart(prod.id) ? "Remove from cart" : "Add to cart"}
        </button>
      </div>
    </div>
  );
};

export default Prodcard;
