import React from "react";

const Categorysection = () => {
  const data = [
    {
      title: "Men",
      url: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Women",
      url: "https://images.pexels.com/photos/3615455/pexels-photo-3615455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Kids",
      url: "https://images.pexels.com/photos/1619801/pexels-photo-1619801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
      {data.map((category, index) => (
        <div
          key={index}
          className="relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer"
        >
          <img
            src={category.url}
            alt={category.title}
            className="w-full h-full object-fill rounded-lg shadow-md"
          />
          <div className="absolute top-20 left-12">
            <p className="text-xl text-white font-bold">{category.title}</p>
            <p className="text-white">View All </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categorysection;
