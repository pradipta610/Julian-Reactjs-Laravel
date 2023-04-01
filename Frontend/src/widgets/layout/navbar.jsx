import React, { useState } from "react";
import { Link } from "react-router-dom";
// import {Button, Menu, MenuItem} from '@material-tailwind/react';
export function Navbar() {
  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const [clickable, setClickable] = useState(false);

  const handleClickable = () => setClickable(!clickable);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      return setNavbar(true);
    } else {
      return setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <nav
        className={
          navbar
            ? "flex bg-[#F5F7F8] transition-all duration-300 ease-linear  justify-center item-center sticky top-0  z-50 "
            : "flex transition-all duration-300 ease-linear  justify-center item-center sticky top-0  z-50 "
        }
      >
        <div className="flex justify-center items-center h-20 max-w-7xl">
          <Link
            to={"/"}
            className={navbar ? 'text-black md:justify-self-start md:mr-5 cursor-pointer text-decoration-none md:text-2xl flex items-center absolute top-0 left-0 translate-x-[25%] translate-y-[120%] md:translate-y-[70%]': 'text-white md:justify-self-start md:mr-5 cursor-pointer text-decoration-none md:text-2xl flex items-center absolute top-0 left-0 translate-x-[25%] translate-y-[120%] md:translate-y-[70%]'}
          >
            <i className="fab fa-typo3"></i>Julian Photography
          </Link>
          <div
            className={navbar ? "lg:hidden block absolute top-0 right-0 z-10 text-black  translate-x-[-100%] translate-y-[60%] text-3xl cursor-pointer" : "lg:hidden block absolute top-0 right-0 z-10 text-white  translate-x-[-100%] translate-y-[60%] text-3xl cursor-pointer"}
            onClick={handleClick}
          >
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>

          <ul
            className={
             click
                ? "overflow-x-hidden lg:grid lg:grid-cols-4  lg:gap-2.5 lg:list-none lg:text-center lg:w-auto lg:justify-end lg:mr-16 flex flex-col w-full h-screen lg:flex-row lg:bg-transparent py-12 lg:py-0 lg:h-auto lg:left-auto lg:right-0  bg-[#F5F7F8] justify-center gap-2 absolute top-0 opacity-100 transition-all duration-500 ease-linear bg-slate-800 left-0 "
                : "overflow-x-hidden flex flex-col lg:mr-16 w-full lg:w-auto h-screen lg:flex-row lg:bg-transparent py-12 lg:py-0 lg:h-auto lg:left-auto lg:right-0  bg-[#F5F7F8] justify-center gap-2 absolute top-0 -left-[61rem] opacity-100 transition-all duration-500 ease-linear"

            }
            
          >
            <li className="h-[80px]">
              <Link
                to={"/"}
                className={
                  navbar ? "font-semibold lg:text-black  lg:text-base  lg:flex lg:items-center lg:no-underline lg:px-2 lg:py-4 lg:h-full text-center w-full table p-8 rounded-none" : "font-semibold text-white lg:text-base  lg:flex lg:items-center lg:no-underline lg:px-2 lg:py-4 lg:h-full text-center w-full table p-8 rounded-none"
                }
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            {clickable ? (
              <div className="">
              <li className="h-[80px]" onClick={handleClickable}>
                <Link
                  to={"/"}
                  className={
                    navbar ? "font-semibold lg:text-black  lg:text-base  lg:flex lg:items-center lg:no-underline lg:px-2 lg:py-4 lg:h-full text-center w-full table p-8 rounded-none" : "font-semibold text-white lg:text-base  lg:flex lg:items-center lg:no-underline lg:px-2 lg:py-4 lg:h-full text-center w-full table p-8 rounded-none"
                  }
                >
                  Gallery
                </Link>
              </li>
                <div className="bg-[#d2d2d2] lg:rounded-xl lg:px-10 lg:py-3 h-28 overflow-scroll w-[80%] lg:w-auto rounded-xl mx-auto my-0 scrollbar-hide inherit lg:mr-3 mt-3 lg:fixed right-0">
                  <li>
                    <Link
                      to={"/"}
                      className={
                        "text-black lg:text-base  lg:flex lg:items-center lg:no-underline lg:px-2 lg:py-4 lg:h-full text-center w-full table p-8 rounded-none"
                      }
                    >
                      Gallery Wedding
                    </Link>
                    <Link
                      to={"/"}
                      className={
                        "text-black lg:text-base  lg:flex lg:items-center lg:no-underline lg:px-2 lg:py-4 lg:h-full text-center w-full table p-8 rounded-none"
                      }
                    >
                      Gallery Baby
                    </Link>
                    <Link
                      to={"/"}
                      className={
                        "text-black lg:text-base  lg:flex lg:items-center lg:no-underline lg:px-2 lg:py-4 lg:h-full text-center w-full table p-8 rounded-none"
                      }
                    >
                      Gallery Family
                    </Link>
                    <Link
                      to={"/"}
                      className={
                        "text-black lg:text-base  lg:flex lg:items-center lg:no-underline lg:px-2 lg:py-4 lg:h-full text-center w-full table p-8 rounded-none"
                      }
                    >
                      Gallery Family
                    </Link>
                    <Link
                      to={"/"}
                      className={
                        "text-black lg:text-base  lg:flex lg:items-center lg:no-underline lg:px-2 lg:py-4 lg:h-full text-center w-full table p-8 rounded-none"
                      }
                    >
                      Gallery Family
                    </Link>
                    <Link
                      to={"/"}
                      className={
                        "text-black lg:text-base  lg:flex lg:items-center lg:no-underline lg:px-2 lg:py-4 lg:h-full text-center w-full table p-8 rounded-none"
                      }
                    >
                      Gallery Family
                    </Link>
                    <Link
                      to={"/"}
                      className={
                        "text-black lg:text-base  lg:flex lg:items-center lg:no-underline lg:px-2 lg:py-4 lg:h-full text-center w-full table p-8 rounded-none"
                      }
                    >
                      Gallery Family
                    </Link>
                    <Link
                      to={"/"}
                      className={
                        "text-black lg:text-base  lg:flex lg:items-center lg:no-underline lg:px-2 lg:py-4 lg:h-full text-center w-full table p-8 rounded-none"
                      }
                    >
                      Gallery Family
                    </Link>
                  </li>
                </div>
              </div>
            ) : (
              <li className="h-[80px]" onClick={handleClickable}>
                <Link
                  to={"/"}
                  className={
                    navbar ? "font-semibold lg:text-black lg:text-base  lg:flex lg:items-center lg:no-underline lg:px-2 lg:py-4 lg:h-full text-center w-full table p-8 rounded-none" : "font-semibold text-white lg:text-base  lg:flex lg:items-center lg:no-underline lg:px-2 lg:py-4 lg:h-full text-center w-full table p-8 rounded-none"
                  }
                >
                  Gallery
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
