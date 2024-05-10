import React from 'react'

const Header = () => {
  return (
    <div>
   
    <div className="flex justify-around h-24">
      <div className="logo">
        <img src="http://127.0.0.1:5500/images/Minimalist_White_Black_Cinematography_Business_Logo__1_-removebg-preview.png" 
        className="w-36 mb-20"/>
      </div>

      <div>
        <ul className="flex space-x-20  my-6 ml-80 text-[#f4bb01] text-xl">
          <li className="mt-2">Home</li>
          <li className="mt-2">Categories</li>
          <button className="bg-[#f4bb01] py-4 px-8 text-black text-sm  rounded-md">Watch on Netflix</button>
        </ul>
       
      </div>
    </div>
    <hr className="bg-[#f4bb01]"/>
    </div>
  )
}

export default Header