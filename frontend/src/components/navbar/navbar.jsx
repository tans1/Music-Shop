import React, { useState } from "react";
import guitar from "../../assets/guitar.png";
import {BiSolidUser} from 'react-icons/bi';
import {AiTwotoneHeart} from 'react-icons/ai';
import { Link } from "react-router-dom";


function Navbar() {
  const [backgroundColor, setBackgroundColor] = useState("transparent");

  const changeBackgroundColor = () => {
    if (window.scrollY >= 80) {
      setBackgroundColor("black");
    } else {
      setBackgroundColor("transparent");
    }
  };

  window.addEventListener("scroll", changeBackgroundColor);
  const currentUrl = window.location.href;
  const urlParts = currentUrl.split('/');
  const urlLastPart = urlParts[urlParts.length - 1]

  return (
    <nav
      style={{ backgroundColor: backgroundColor }}
      className="flex justify-between items-center text-white px-[80px] sticky top-0 z-[1000]">
      <div className="flex justify-center items-center h-[70px] ">
        <Link to={"/"}>
        <img
          src={guitar}
          alt="guitar logo"
          className="cursor-pointer w-[60px] h-[60px]"
        />
        </Link>
        <Link to={"/"}>
        <div className="text-3xl font-bold mx-2 cursor-pointer">Music Shop</div>
        </Link>
        <div>
          <ul className="flex items-center justify-center list-none text-base font-medium">
            <li className="ml-[80px] mr-[40px] cursor-pointer"><Link to={"/"}>Home</Link></li>
            <li className="cursor-pointer"><Link to={"/musics"}>Musics</Link></li>
            {
              urlLastPart !== "create" ? 
              <li className="cursor-pointer ml-[40px]"><Link to={"/create"}>Create Music</Link></li> : null
            }
          </ul>
        </div>
      </div>

      <div>
        <ul className="flex items-center justify-center list-none text-xl">
          <li className="mx-[30px] cursor-pointer"><BiSolidUser/></li>
          <li className="cursor-pointer"><AiTwotoneHeart /></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
