// this component will be shown on the smaller devices

// importing icons
import { LuListChecks, LuHome } from "react-icons/lu";
import { CgOptions } from "react-icons/cg";
import { TbReportAnalytics } from "react-icons/tb";
import { LiaCommentSolid } from "react-icons/lia";

// importing react hook
import { useState } from "react";

export default function FooterMenu() {
  // state for changing the selected option
  let [selectedOption, setSelectedOption] = useState("home");

  return (
    <footer className="fixed bottom-0 hidden w-full h-12 text-white text-2xl bg-thematicColor justify-evenly items-center select-none sm:flex xs:text-xl xs:h-10">
      {/* analysis option */}
      <div
        className={`w-full h-full flex justify-center items-center ${
          selectedOption === "analysis" && " border-b-4 border-red-600"
        }`}
        onClick={() => setSelectedOption("analysis")}
      >
        <TbReportAnalytics />
      </div>

      {/* options tab */}
      <div
        className={`w-full h-full flex justify-center items-center ${
          selectedOption === "options" && " border-b-4 border-red-600"
        }`}
        onClick={() => setSelectedOption("options")}
      >
        <CgOptions />
      </div>

      {/* home tab */}
      <div
        className={`w-full h-full flex justify-center items-center ${
          selectedOption === "home" && " border-b-4 border-red-600"
        }`}
        onClick={() => setSelectedOption("home")}
      >
        <LuHome />
      </div>

      {/* comments tab */}
      <div
        className={`w-full h-full flex justify-center items-center ${
          selectedOption === "comments" && " border-b-4 border-red-600"
        }`}
        onClick={() => setSelectedOption("comments")}
      >
        <LiaCommentSolid />
      </div>

      {/* checklist tab */}
      <div
        className={`w-full h-full flex justify-center items-center ${
          selectedOption === "checks" && " border-b-4 border-red-600"
        }`}
        onClick={() => setSelectedOption("checks")}
      >
        <LuListChecks />
      </div>
    </footer>
  );
}
