import React from 'react'
// icons
import { GoArrowUpRight } from "react-icons/go";

const Button = ({title}) => {
  return (
            <div className="flex items-center">
              <a href="" className="bg-gray-900 text-white text-sm py-3 px-6 rounded-full tracking-wide font-light">{title}</a>
              <a href="" className="bg-gray-900 text-white p-3 rounded-full text-xl"><GoArrowUpRight /></a>
            </div>
  )
}

export default Button
