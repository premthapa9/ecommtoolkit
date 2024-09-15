import React, { useEffect } from "react";
import { Categories } from "../assets/Mockdata";
import Infosection from "../components/Infosection";
import Categorysection from "../components/Categorysection";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../store/productSlice";
import { products } from "../constant";
import Prodcard from "../components/Prodcard";
import Shop from "./Shop";
const Home = () => {
  const { totalProd, prodList } = useSelector((state) => state.prod);
  const dispatch = useDispatch();
  console.log(totalProd, prodList?.length);

  useEffect(() => {
    dispatch(getData(products));
  }, []);
  return (
    <div>
      <div className="bg-white mt-2 px-4 md:px-16 lg:px-24">
        <div className="container mx-auto py-4 flex flex-col md:flex-row space-x-2 ">
          <div className="w-full md:w-3/12">
            <div className="bg-red-600 text-white text-xs font-bold px-2 py-2.5">
              SHOP BY CATEGORIES
            </div>

            <ul className="space-y-4 bg-gray-100 p-3 border">
              {Categories.map((category, ind) => (
                <li className="flex items-center text-sm" key={ind}>
                  <div className="h-2 w-2 border border-red-500 rounded-full mr-2"></div>
                  {category}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-9/12 mt-8 md:mt-0 h-96 relative">
            <img
              src="https://images.unsplash.com/photo-1510238890104-d15a38f787b6?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="h-full w-full"
            />
            <div className="absolute top-16 left-8">
              <p className="text-white mb-4">Code WITH JOHN</p>
              <h2 className="text-3xl font-bold text-white">
                Welcome to E-Brand
              </h2>
              <p className="text-xl mt-2.5 font-bold text-white">
                Millions+ products
              </p>
              <button className="bg-red-600 px-8 py-1.5 text-white mt-4 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <Infosection />
        <Categorysection />
        <div className="container mx-auto py-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Top Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
            {prodList?.length > 0 &&
              prodList
                ?.slice(0, 5)
                .map((prod, index) => <Prodcard key={prod.id} prod={prod} />)}
          </div>
        </div>
      </div>
      <Shop />
    </div>
  );
};

export default Home;
