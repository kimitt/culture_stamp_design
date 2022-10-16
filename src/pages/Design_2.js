import React from 'react'

import Img1 from "../assets/1.JPG";
import Img2 from "../assets/2.JPG";
import Img3 from "../assets/3.JPG";
import Img4 from "../assets/4.JPG";
import Img5 from "../assets/5.JPG";
import Img6 from "../assets/6.JPG";
import Img7 from "../assets/7.JPG";
import Img8 from "../assets/8.JPG";
import Img9 from "../assets/9.JPG";

function Design_2() {
  return (
    <div className="flex justify-center  bg-stone-200">
      <div className="w-full">
        <div className="flex justify-center mt-[200px]">
          <span className="text-[30px] font-semibold">C U L T U R E S T A M P</span>
        </div>
        <div className="flex justify-around">
          <div className="mt-[100px]">
            <span className="text-xl px-8">CATEGORY</span>
            <span className="text-xl px-8">DATE</span>
            <span className="text-xl px-8">TODO</span>
            <span className="text-xl px-8">MYPAGE</span>
            <span className="text-xl font-bold px-8">LOGIN</span>
          </div>
        </div>
        <div className='flex justify-center ml-[1500px] mt-[100px] '>
            <span className='text-[60px]'>+</span>
        </div>
        <div className="flex justify-center mt-[20px] mb-[200px]">
          <div className="grid grid-cols-3 gap-10 ">
            <img src={Img1} width="500px" />
            <img src={Img2} width="500px" />
            <img src={Img3} width="500px" />
            <img src={Img4} width="500px" />
            <img src={Img5} width="500px" />
            <img src={Img6} width="500px" />
            <img src={Img7} width="500px" />
            <img src={Img8} width="500px" />
            <img src={Img9} width="500px" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Design_2