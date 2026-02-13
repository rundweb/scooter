import React, { useEffect, useState } from "react";

// ui
import Button from "../ui/Button";

// axios
import axios from "axios";

// icons
import { GoArrowUpRight } from "react-icons/go";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios
      .get("/scooter/data.json")
      .then((res) => {
        console.log(res.data);
        setArticles(res.data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="max-w-7xl m-auto">
      <div className="flex flex-col gap-10 p-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-0">
          <div className="md:col-span-2">
            <h1 className="text-gray-900 text-xl md:text-3xl lg:text-4xl tracking-wide">
              Explore our articles and news <br /> for the latest updates.
            </h1>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-gray-500 text-xs tracking-wider">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, a neque? Id repudiandae soluta laudantium.
            </p>
            <Button title="Check All" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {articles.map((item) => (
            <div key={item.id} className="flex flex-col gap-4">
              <div>
                <img src={item.images} alt={item.title} title={item.title} className="h-64 sm:h-80 w-full object-cover object-center rounded-2xl shadow-md"/>
              </div>
              <div className="bg-gray-100 rounded-2xl p-4">
                <div className="grid grid-cols-4">
                  <p className="col-span-3 text-sm text-gray-500 font-light">{item.title}</p>
                  <div className="flex items-center justify-end">
                    <GoArrowUpRight className="w-10 h-10 bg-white rounded-full p-2 border border-gray-200"/>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
