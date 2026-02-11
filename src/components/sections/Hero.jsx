import React from "react";
// icons
import { GoArrowUpRight } from "react-icons/go";

import product1 from '../../assets/images/sc (2).jpg'

const Hero = () => {
  return (
    <div className="max-w-7xl m-auto">
      <div className="w-full p-6 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
        {/* grid 1 */}
        <div className="flex flex-col gap-12 bg-gray-100 p-6 sm:p-8 rounded-2xl sm:rounded-4xl">
          <div className="flex flex-col gap-6">
            <h1 className="text-gray-900 font-medium text-3xl sm:text-4xl tracking-wide">
              Elevate your lifestyle <br /> with premium essentials.
            </h1>
            <h2 className="text-sm text-gray-500 tracking-wide">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
              nobis consequatur modi adipisci pariatur quasi omnis. Autem dolore.
            </h2>
            <div className="flex items-center">
              <a href="" className="bg-gray-900 text-white text-sm py-3 px-6 rounded-full tracking-wide font-light">Browser All Products</a>
              <a href="" className="bg-gray-900 text-white p-3 rounded-full text-xl"><GoArrowUpRight /></a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 sm:gap-10 bg-white rounded-2xl p-4">
            <div className="flex flex-col gap-10">
              <p className="bg-gray-100 w-fit py-2 px-4 rounded-full text-xs sm:text-sm tracking-wider text-gray-800">Featured</p>
              <div className="flex flex-col gap-2.5">
                <h1 className="text-gray-900 text-base sm:text-xl font-medium">Scooter VR 4</h1>
                <h2 className="text-gray-400 text-xs font-light tracking-wide">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis.</h2>
                <h3 className="text-gray-900 font-medium text-lg">USD 349.99</h3>
              </div>
            </div>
            <div>
              <img src={product1} alt="Scooter vr 4" title="scooter vr 4" className="w-full h-full rounded-2xl object-cover"/>
            </div>
          </div>
        </div>
        {/* grid 2 */}
        <div className="h-full relative rounded-2xl sm:rounded-4xl overflow-hidden -z-10">
          <div className="absolute top-4 left-5">
            <p className="bg-gray-100/50 text-gray-900  p-2 rounded-full px-4 text-xs sm:text-sm font-medium tracking-wide backdrop-filter backdrop-blur-sm  border border-gray-100">Featured</p>
          </div>
          <div className="h-full">
            <img src={product1} alt="Scooter vr 4" title="scooter vr 4" className="w-full h-full rounded-2xl sm:rounded-4xl object-cover" />
          </div>
          <div className="absolute left-0 bottom-0 p-5 bg-gray-100/50 backdrop-blur-xs flex items-center justify-between w-full gap-4">
            <div className="flex flex-col gap-2">
              <h1 className="text-gray-900 font-medium text-lg sm:text-2xl tracking-wide">New Scooter VR 4</h1>
              <h2 className="text-xs font-light tracking-wide text-gray-700 hidden sm:flex">Lorem, ipsum dolor sit amet consectetur <br /> adipisicing elit. Ratione incidunt at veniam!</h2>
            </div>
            <h3 className="font-medium text-base sm:text-xl">USD 349.99</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
