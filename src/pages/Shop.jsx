import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Prodcard from "../components/Prodcard";

const Shop = () => {
  const { prodList } = useSelector((state) => state.prod);
  return (
    <div className="mt-5 px-4 pb-6 md:px-16 lg:px-24">
      <h2 className="text-2xl font-bold mb-6 text-center">Shop</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
        {prodList?.length > 0 &&
          prodList?.map((prod, index) => (
            <Prodcard key={prod.id} prod={prod} />
          ))}
      </div>
    </div>
  );
};

export default Shop;
