import React from "react";

const FindUs = () => {
  return (
    <div className="relative bg-black">

      <img src="https://i.ibb.co.com/59bdPdD/pexels-lum3n-44775-311039.jpg" 
        className="absolute inset-0 w-full h-full object-cover opacity-30"/>

      <div className="relative flex flex-col items-center justify-center min-h-[300px] text-center">

        <img src='' className="w-8 md:w-16" />
        <h1 className="text-sm px-1 md:px-0 md:text-2xl font-bold text-white">Keep up to date with our lates news and insights by subscribing to our regular newsletter</h1>

        {/* Input Form */}
        <div className="join mt-5">
            <input className="input text-xs md:text-base input-bordered bg-gray-200 join-item" placeholder="Email" />
            <button className="btn join-item bg-[#228B22] text-xs md:text-base  text-white hover:bg-[#196519] rounded-r-lg">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;