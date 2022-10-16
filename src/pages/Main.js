import React from 'react'
import { useNavigate } from "react-router-dom";

function Main() {
    let navigate = useNavigate();
    function handleClick() {
        navigate("/design1");
    }

    function handleClickTwo() {
        navigate("/design2");
    }
  return (
    <div className="flex justify-center mt-[400px]">
      <button
        onClick={handleClick}
        className="text-2xl font-bold"
      >
        첫번째 디자인(기존)
      </button>
      <button
        onClick={handleClickTwo}
        className="text-2xl font-bold ml-10"
      >
        두번째 디자인(새로)
      </button>
    </div>
  );
}

export default Main