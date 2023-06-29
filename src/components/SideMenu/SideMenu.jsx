import { FaUserAlt } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { FaAngleLeft } from "react-icons/fa";
import { GoCommentDiscussion } from "react-icons/go";
import { BiSolidDownArrow } from "react-icons/bi";
import { SiWebmoney } from "react-icons/si";

import { useState, useEffect } from "react";

export default function SideMenu() {
  let [showNav, setShowNav] = useState(false);
  let [selectedOption, setSelectedOption] = useState("discussion");

  useEffect(() => {
    if (window.innerWidth <= 912) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth <= 912) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
    });
  }, [setShowNav]);

  return (
    <aside className="flex">
      {showNav && (
        <nav className="w-72 bg-thematicColor flex flex-col  text-white">
          <div className="relative h-20 p-2 flex justify-between items-center gap-4 text-xl border-b-2 border-gray-500">
            <FaUserAlt />
            <div className="flex-1 flex justify-start items-center">
              Hello, User
            </div>
            <IoNotifications className="text-2xl" />
            <div className="absolute right-[11px] top-7 border-4 border-red-500 rounded-full"></div>
          </div>

          <div
            className={`mt-4 p-2 pl-4 pr-4 flex justify-between items-center gap-2 cursor-pointer ${
              selectedOption === "discussion" && " bg-blue-950"
            }`}
          >
            <GoCommentDiscussion />
            <div className="flex-1 flex justify-start items-center">
              Discussion Forum
            </div>
            <BiSolidDownArrow className="text-[9px]" />
          </div>

          <div className="p-2 pl-4 pr-4 flex justify-between items-center gap-2">
            <SiWebmoney />
            <div className="flex-1 flex justify-start items-center">
              Market Stories
            </div>
          </div>

          <div className="p-2 pl-10 pr-4">Sentiment</div>

          <div className="p-2 pl-10 pr-4">Market</div>

          <div className="p-2 pl-10 pr-4">Sector</div>

          <div className="p-2 pl-10 pr-4">Watchlist</div>

          <div className="p-2 pl-10 pr-4">Events</div>

          <div className="p-2 pl-10 pr-4">News/Interview</div>
        </nav>
      )}

      <div className="flex items-center">
        <button
          className="h-12 w-max bg-thematicColor text-2xl text-white rounded-tr-md rounded-br-md"
          onClick={() => setShowNav(!showNav)}
        >
          <FaAngleLeft className={`${showNav === false && "rotate-180"}`} />
        </button>
      </div>
    </aside>
  );
}
