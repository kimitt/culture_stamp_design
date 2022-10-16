import React from 'react'

import Logo from "../assets/logo.jpg";
import Img1 from "../assets/1.JPG";
import Img2 from "../assets/2.JPG";
import Img3 from "../assets/3.JPG";
import Img4 from "../assets/4.JPG";
import Img5 from "../assets/5.JPG";
import Img6 from "../assets/6.JPG";
import Img7 from "../assets/7.JPG";
import Img8 from "../assets/8.JPG";
import Img9 from "../assets/9.JPG";

function Design_1() {
  return (
    <div className="flex flex-col px-6 mb-[200px]">
      <div className="flex justify-between items-center mt-10 w-full">
        <img src={Logo} width="300px" />
        <span className="flex text-xl font-bold pr-[50px]">Login</span>
      </div>
      <div className="flex justify-start mt-[200px] ml-2">
        <input
          type="search"
          className="w-[350px] h-[50px] border-2 border-black rounded-[30px] pl-2"
          placeholder="검색어를 입력하세요"
        />
      </div>
      <div className="flex mt-[80px]">
        <div className="flex flex-col pl-4 mr-[400px]">
          <span className="text-2xl font-bold ">Category</span>
          <span className="text-2xl font-bold mt-6">Date</span>
          <span className="text-2xl font-bold mt-6">Todo</span>
          <span className="text-2xl font-bold mt-[200px]">MyPage</span>
          <div>
            <button className="text-[80px] mt-[100px] ">+</button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6 ">
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
  );
}

export default Design_1