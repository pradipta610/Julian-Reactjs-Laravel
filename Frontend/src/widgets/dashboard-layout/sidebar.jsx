import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BiPhotoAlbum } from "react-icons/bi";
import { GiPhotoCamera, GiBabyFace } from "react-icons/gi";
import { MdFamilyRestroom, MdPhotoAlbum, MdDevicesOther } from "react-icons/md";
import { FaPhotoVideo } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import BeatLoader from 'react-spinners/BeatLoader';

export function Sidebar({ sidebar, setSidebar, logoutHanlder, loading }) {
  const showSidebar = () => setSidebar(!sidebar);
  const menu = [
    { name: "Prewedding Gallery", icon: <BiPhotoAlbum />, link: "/prawedding" },
    { name: "Wedding Gallery", icon: <GiPhotoCamera />, link: "/wedding" },
    { name: "Baby Photo Gallery", icon: <GiBabyFace />, link: "/baby" },
    {
      name: "Family Photo Gallery",
      icon: <MdFamilyRestroom />,
      link: "/family",
    },
    {
      name: "Group Photo Gallery",
      icon: <HiOutlineUserGroup />,
      link: "/group",
    },
    { name: "Maternity Gallery", icon: <FaPhotoVideo />, link: "/maternity" },
    { name: "Photobooth Gallery", icon: <MdPhotoAlbum />, link: "/photobooth" },
    { name: "Others Gallery", icon: <MdDevicesOther />, link: "/other" },
  ];
  return (
    <>
      <div
        className={
          sidebar
            ? "h-screen border-r transition-all duration-800 ease-linear  -left-[100%] fixed shadow-lg border-gray-200 md:w-80 w-full px-9 py-10"
            : "h-screen border-r bg-[#ffffff] transition-all duration-800 ease-linear left-0  shadow-lg fixed border-gray-200 md:w-80 w-full px-9 py-10"
        }
      >
        <div className="flex flex-row items-center">
          <p className="w-25 h-9 flex ">
            <i className="fab fa-typo3 text-lg mr-5"></i>Julian Photography
          </p>
          <Link to={"#"} className="text-2xl ml-auto" onClick={showSidebar}>
            <AiOutlineClose />
          </Link>
        </div>
        <div className="pt-10">
          <ul>
            <div className="text-xl font-weight-bold mb-8">Menu </div>
            {menu.map((val, index) => {
              return (
                <Link to={val.link}>
                  <li className="mb-7 flex flex-row items-center" key={index}>
                    <div className="mr-5 text-gray-700">{val.icon}</div>
                    <div className="text-gray-700"> {val.name}</div>
                  </li>
                </Link>
              );
            })}
            <button onClick={logoutHanlder} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
            {loading ? <BeatLoader color="#FAE9E9" className="text-sm" /> :
                                'Logout'}
            </button>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
