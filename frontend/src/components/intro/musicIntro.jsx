import React from "react";
import banner from "../../assets/banner.png";

function MusicIntro() {
  return (
    <div className="mt-[70px] flex">
      <div className="w-[500px] h-[540px]">
        <img src={banner} alt="banner" className="w-full h-full" />
      </div>
      <div className="ml-[50px]">
        <p className="font-bold text-amber-600 text-5xl">
          This Month’s Record Breaking
        </p>
        <div className=" font-medium">
          <p className=" my-[30px]  text-3xl text-blue-500 font-bold">ተዓምር ግዛው (ምነዋ)</p>
          <div className="  text-2xl text-white">
            በማለዳዉ ፍቅር ገብቶ
            <br />
            ልቤን ባንተ አስደስቶ <br />
            የነገርከኝ ግን ሰንብቶ <br />
            ምነዋ ምነዋ . . . . .
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicIntro;
