/** @jsxImportSource @emotion/react */
import React from "react";
import { css, jsx } from "@emotion/react";
import image1 from "../../../assets/01.jpeg";
import image2 from "../../../assets/02.jpg";
import image3 from "../../../assets/03.jpg";
import image4 from "../../../assets/04.jpg";
import image5 from "../../../assets/05.jpg";
import { Link } from "react-router-dom";

function Trending() {
  return (
    <div>
      <div>
        <h1
          css={css`
            color: white;
            position: relative;
            font-size: 40px;
            font-weight: bold;
            color: rgb(217, 119, 6);
            &::after {
              content: "";
              position: absolute;
              width: 70%;
              max-width: 100%;
              height: 4px;
              border: 1px solid rgb(255, 255, 255);
              top: 5px;
              bottom: 0;
              margin: auto;
              margin-left: 10px;
              border-left: 0;
              border-radius: 0;
            }
          `}
          className="px-[100px]">
          Trending Artists
        </h1>
      </div>
      <div className="grid grid-cols-5 px-[50px] my-[50px]">
        <Link to={"/musics"}>
          <div
            className="w-[220px] h-[310px]"
            css={css`
              cursor: pointer;
              &:hover {
                transform: scale(0.97);
              }
            `}>
            <div className="w-[215px] h-[235px]  my-2">
              <img
                src={image1}
                alt="artist"
                className="w-full h-full  rounded-2xl"
              />
            </div>
            <p className="text-white  flex justify-center font-medium">
              One More Stranger
            </p>
            <p className="text-gray-400  flex justify-center">
              Anna Ellison, Claire Hudson
            </p>
          </div>
        </Link>
        <Link to={"/musics"}>
          <div
            className="w-[220px] h-[310px]"
            css={css`
              cursor: pointer;
              &:hover {
                transform: scale(0.97);
              }
            `}>
            <div className="w-[215px] h-[235px]  my-2">
              <img
                src={image2}
                alt="artist"
                className="w-full h-full  rounded-2xl"
              />
            </div>
            <p className="text-white  flex justify-center font-medium">
              Cloud Nine
            </p>
            <p className="text-gray-400  flex justify-center">
              Anna Ellison, Claire Hudson
            </p>
          </div>
        </Link>
        <Link to={"/musics"}>
          <div
            className="w-[220px] h-[310px]"
            css={css`
              cursor: pointer;
              &:hover {
                transform: scale(0.97);
              }
            `}>
            <div className="w-[215px] h-[235px]  my-2">
              <img
                src={image3}
                alt="artist"
                className="w-full h-full  rounded-2xl"
              />
            </div>
            <p className="text-white  flex justify-center font-medium">
              Desired Games
            </p>
            <p className="text-gray-400  flex justify-center">
              Anna Ellison, Claire Hudson
            </p>
          </div>
        </Link>
        <Link to={"/musics"}>
          <div
            className="w-[220px] h-[310px]"
            css={css`
              cursor: pointer;
              &:hover {
                transform: scale(0.97);
              }
            `}>
            <div className="w-[215px] h-[235px]  my-2">
              <img
                src={image4}
                alt="artist"
                className="w-full h-full  rounded-2xl"
              />
            </div>
            <p className="text-white  flex justify-center font-medium">
              Bloodlust 2
            </p>
            <p className="text-gray-400  flex justify-center">
              Anna Ellison, Claire Hudson
            </p>
          </div>
        </Link>
        <Link to={"/musics"}>
          <div
            className="w-[220px] h-[310px]"
            css={css`
              cursor: pointer;
              &:hover {
                transform: scale(0.97);
              }
            `}>
            <div className="w-[215px] h-[235px]">
              <img src={image5} alt="artist" className="w-full h-full" />
            </div>
            <p className="text-white  flex justify-center font-medium">
              Until I Met You 2
            </p>
            <p className="text-gray-400  flex justify-center">
              Anna Ellison, Claire Hudson
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Trending;
