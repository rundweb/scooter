import React from "react";

// images
import imgCategory1 from "../../assets/images/sc (3).jpg";
import imgCategory2 from "../../assets/images/sc (1).jpg";
import imgCategory3 from "../../assets/images/sc (5).jpg";
import imgCategory4 from "../../assets/images/sc (6).jpg";

// ui
import Button from "../ui/Button";
import ButtonLight from "../ui/ButtonLight";

// icons
import { GoArrowUpRight } from "react-icons/go";

const Category = () => {
  return (
    <div className="max-w-7xl m-auto">
      <div className="p-6 flex flex-col gap-10">
        <div className="text-center flex flex-col gap-2.5">
          <h1 className="font-medium text-4xl tracking-wide text-gray-900">
            Browser by categories
          </h1>
          <p className="text-gray-600 tracking-wide text-sm">
            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Et,
            ducimus!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-6 bg-gray-100 p-5 sm:p-8 rounded-2xl sm:rounded-4xl justify-between">
            <div>
              <img
                src={imgCategory1}
                alt="images-category-scooter"
                title="images-category-scooter"
                className="h-full sm:h-96 w-full rounded-2xl border border-gray-200"
              />
            </div>
            <div className="flex flex-col gap-2.5">
              <h1 className="text-gray-800 text-xl tracking-wide">
                All Product
              </h1>
              <p className="text-gray-500 text-sm tracking-wide mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                debitis provident hic dignissimos. Eos, debitis fugiat.
              </p>
              <Button title="Browser All Products" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 bg-gray-100 rounded-2xl sm:rounded-4xl p-5 justify-between gap-6">
              <div className="flex flex-col justify-end gap-2">
                <h1 className="text-gray-800 text-xl tracking-wide">
                  Electrics
                </h1>
                <p className="text-gray-500 text-xs tracking-wide mb-16">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur, blanditiis.
                </p>
                <ButtonLight title="View More" />
              </div>
              <div>
                <img
                  src={imgCategory3}
                  alt="images-category-scooter"
                  title="images-category-scooter"
                  className="h-64 w-full object-cover rounded-2xl border border-gray-300"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col bg-gray-100 p-5 rounded-2xl sm:rounded-4xl gap-4">
                <div>
                  <img
                    src={imgCategory4}
                    alt="images-category-scooter"
                    title="images-category-scooter"
                    className="rounded-2xl h-56 object-cover w-full object-right"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="">
                    <h1 className="text-gray-800  text-xl tracking-wide">
                      Scooters
                    </h1>
                    <p className="text-gray-500 text-xs tracking-wide mt-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                  <div className="bg-white w-20 border border-gray-300 h-12 rounded-full flex items-center justify-center text-gray-900 text-2xl"><GoArrowUpRight/></div>
                </div>
              </div>
              <div className="flex flex-col bg-gray-100 p-5 rounded-2xl sm:rounded-4xl gap-4">
                <div>
                  <img
                    src={imgCategory2}
                    alt="images-category-scooter"
                    title="images-category-scooter"
                    className="rounded-2xl h-56 object-cover w-full object-right"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="">
                    <h1 className="text-gray-800 text-xl tracking-wide">
                      Scooters
                    </h1>
                    <p className="text-gray-500 text-xs tracking-wide mt-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                  <div className="bg-white w-20 border border-gray-300 h-12 rounded-full flex items-center justify-center text-gray-900 text-2xl"><GoArrowUpRight/></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
