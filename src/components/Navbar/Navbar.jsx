// importing logo
import logo from "../../assets/logo.jpg";
import avatar from "../../assets/avatar.png";

// importing icons
import { RiSearchLine } from "react-icons/ri";

// importing hooks
import { useEffect, useState } from "react";

export default function Navbar() {
  // state for mananging the display of user icon
  let [showUserIcon, setShowUserIcon] = useState(false);

  // state for displaying the display of navbar menu
  let [navMenu, setNavMenu] = useState(true);

  // using useeffect because after every render we need to check whether to show the nav menu or user icon.
  useEffect(() => {
    if (window.innerWidth <= 912) {
      setShowUserIcon(true);
      setNavMenu(false);
    } else {
      setShowUserIcon(false);
      setNavMenu(true);
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth <= 912) {
        setShowUserIcon(true);
        setNavMenu(false);
      } else {
        setShowUserIcon(false);
        setNavMenu(true);
      }
    });
  }, [setNavMenu]);

  return (
    // navbar
    <nav className="w-full h-16 pl-8 pr-8 bg-white flex items-center gap-8 sticky top-0 left-0 z-[1000] mobile:gap-2 mobile:pl-2 mobile:pr-2">
      {/* logo */}
      <div className="h-full">
        <img src={logo} className="max-h-full" />
      </div>

      {/* search box */}
      <div className="h-[60%] flex-1 relative">
        <input
          type="text"
          className="w-full h-full p-2 pl-4 shadow-inner bg-bgColor rounded-md focus:outline-none"
        />
        <RiSearchLine className="text-xl text-thematicColor absolute top-[9px] right-2 cursor-pointer" />
      </div>

      {/* navbar menu conditionally rendering based on screen size */}
      {navMenu && (
        <div className="h-full flex-1 flex items-center justify-end gap-4 sm:absolute sm:top-16 sm:left-0 sm:bg-white sm:w-full sm:justify-center xs:text-xs xs:gap-2">
          <button>Contact Us</button>
          <button className="h-[50%] pl-6 pr-6 border border-gray-600 rounded shadow">
            SIGN UP
          </button>
          <button className="h-[50%] pl-6 pr-6 border border-gray-600 rounded shadow">
            SIGN IN
          </button>
        </div>
      )}

      {/* user icon conditionally rendering based on screen size */}
      {showUserIcon && (
        <div className="h-[50%] flex-1 items-center justify-end gap-4 flex sm:flex-grow-0 sm:basis-8">
          <img
            src={avatar}
            className="h-full"
            onClick={() => {
              setNavMenu(!navMenu);
            }}
          />
        </div>
      )}
    </nav>
  );
}
