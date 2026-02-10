import React from "react";
import Button from "../ui/Button";

// images
import heroImage from '../../assets/images/sc (4).jpg'

const Hero = () => {
  return (
    <div className="max-w-7xl m-auto p-4 min-h-screen flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        {/* grid 1 */}
        <div className="flex flex-col gap-2 md:gap-4">
          <h1 className="tracking-wide font-medium text-xl md:text-3xl text-gray-600">Smart Electric</h1>
          <h2 className="font-playfair font-bold text-blue-primary text-5xl md:text-8xl lg:text-9xl tracking-wider mb-2">Scooter</h2>
          <h3 className="text-sm tracking-wide md:text-justify line font-medium text-gray-600 leading-6 md:w-3/4 mb-6 md:mb-10">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
            cupiditate aliquam accusamus laudantium corrupti sed obcaecati
            praesentium, distinctio reprehenderit suscipit eos maxime odio
            dolorem hic harum, laborum omnis quasi dignissimos molestias ?
          </h3>
          <Button title="Ask Me How"/>
        </div>
        {/* grid 2 */}
        <div className="flex items-center md:justify-end mt-6 md:mt-0">
          <img src={heroImage} alt="hero" className=" w-full md:w-xl h-96 md:h-[600px] object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
