import React from 'react'
// icons
import { GoArrowUpRight } from "react-icons/go";

const ButtonLight = ({title}) => {
  return (
            <div className="flex items-center">
              <a href="" className="bg-white text-gray-800 text-sm py-3 px-6 rounded-full tracking-wide font-light border border-gray-300">{title}</a>
              <a href="" className="bg-white text-gray-800 p-3 rounded-full text-xl border border-gray-300"><GoArrowUpRight /></a>
            </div>
  )
}

export default ButtonLight
