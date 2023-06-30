// importing icons
import { FaUserAlt } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { FaAngleLeft } from "react-icons/fa";
import { GoCommentDiscussion } from "react-icons/go";
import { BiSolidDownArrow } from "react-icons/bi";
import { SiWebmoney } from "react-icons/si";

// importing hooks
import { useState } from "react";

export default function SideMenu() {
  // state to control the display of aside bar
  let [showNav, setShowNav] = useState(false);

  // state to control highlighting selected option in asidebar
  let [selectedOption, setSelectedOption] = useState("discussion");

  return (
    <aside className="flex select-none sm:absolute sm:top-24 sm:bottom-0 sm:z-[10] xs:bottom-10">
      {showNav && (
        // aside bar
        <nav className="w-72 bg-thematicColor flex flex-col  text-white xs:w-56">
          {/* user tab */}
          <div className="relative h-20 p-2 flex justify-between items-center gap-4 text-xl border-b-2 border-gray-500 cursor-pointer xs:h-16 xs:text-lg">
            <FaUserAlt />
            <div className="flex-1 flex justify-start items-center">
              Hello, User
            </div>
            <IoNotifications className="text-2xl" />
            <div className="absolute right-[11px] top-7 border-4 border-red-500 rounded-full xs:top-5"></div>
          </div>

          {/* discussion tab */}
          <div
            className={`mt-4 p-2 pl-4 pr-4 flex justify-between items-center gap-2 cursor-pointer tall:mt-2 ${
              selectedOption === "discussion" && " bg-blue-950"
            }`}
            onClick={() => setSelectedOption("discussion")}
          >
            <GoCommentDiscussion />
            <div className="flex-1 flex justify-start items-center">
              Discussion Forum
            </div>
            <BiSolidDownArrow className="text-[9px]" />
          </div>

          {/* market stories tab */}
          <div
            className={`p-2 pl-4 pr-4 flex justify-between items-center gap-2 cursor-pointer ${
              selectedOption === "stories" && " bg-blue-950"
            }`}
            onClick={() => setSelectedOption("stories")}
          >
            <SiWebmoney />
            <div className="flex-1 flex justify-start items-center">
              Market Stories
            </div>
          </div>

          {/* sentiment tab */}
          <div
            className={`p-2 pl-10 pr-4 cursor-pointer ${
              selectedOption === "sentiment" && " bg-blue-950"
            }`}
            onClick={() => setSelectedOption("sentiment")}
          >
            Sentiment
          </div>

          {/* market tab */}
          <div
            className={`p-2 pl-10 pr-4 cursor-pointer ${
              selectedOption === "market" && " bg-blue-950"
            }`}
            onClick={() => setSelectedOption("market")}
          >
            Market
          </div>

          {/* sector tab */}
          <div
            className={`p-2 pl-10 pr-4 cursor-pointer ${
              selectedOption === "sector" && " bg-blue-950"
            }`}
            onClick={() => setSelectedOption("sector")}
          >
            Sector
          </div>

          {/* watchlist tab */}
          <div
            className={`p-2 pl-10 pr-4 cursor-pointer ${
              selectedOption === "watchlist" && " bg-blue-950"
            }`}
            onClick={() => setSelectedOption("watchlist")}
          >
            Watchlist
          </div>

          {/* events tab */}
          <div
            className={`p-2 pl-10 pr-4 cursor-pointer ${
              selectedOption === "events" && " bg-blue-950"
            }`}
            onClick={() => setSelectedOption("events")}
          >
            Events
          </div>

          {/* news tab */}
          <div
            className={`p-2 pl-10 pr-4 cursor-pointer ${
              selectedOption === "news" && " bg-blue-950"
            }`}
            onClick={() => setSelectedOption("news")}
          >
            News/Interview
          </div>
        </nav>
      )}

      {/* button to control the show and hide of aside bar */}
      <div className="flex items-center">
        <button
          className="h-12 w-max bg-thematicColor text-2xl text-white rounded-tr-md rounded-br-md xs:text-lg"
          onClick={() => setShowNav(!showNav)}
        >
          <FaAngleLeft className={`${showNav === false && "rotate-180"}`} />
        </button>
      </div>
    </aside>
  );
}
