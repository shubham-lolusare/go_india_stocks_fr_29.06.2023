// this component is used to display the market stories and discussion forum
// This component is displayed in tabular form in mobile view and column mode in desktop view. To
// achieve this conditional rendering is used with the help of state.

// importing hooks
import { useEffect, useState } from "react";

// importind components
import DiscussionForum from "../DiscussionForum/DiscussionForum";
import MarketStories from "../MarketStories/MarketStories";
import SideMenu from "../SideMenu/SideMenu";

export default function DiscussionAndStories() {
  // state to set the view
  let [view, setView] = useState("desktop");

  // state to manage the selected tab
  let [tabSelected, setTabSelected] = useState("discussion");

  // the view will automatically adjusted according to the viewport by setting state
  useEffect(() => {
    if (window.innerWidth <= 912) {
      setView("mobile");
    } else {
      setView("desktop");
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth <= 912) {
        setView("mobile");
      } else {
        setView("desktop");
      }
    });
  }, [view]);

  return view === "desktop" ? (
    // for desktop view this section will be rendered
    <section className="w-full h-full flex-1 flex gap-4 overflow-hidden">
      <SideMenu />
      <DiscussionForum />
      <MarketStories />
    </section>
  ) : (
    // for mobile view this section will be rendered
    <section className="w-full h-full flex-1 overflow-y-scroll select-none">
      <SideMenu />

      {/* tabs section */}
      <section className="w-full h-12 bg-thematicColor flex justify-evenly text-white xs:h-8 xs:text-sm">
        {/* discussion tab */}
        <div
          className={`w-full h-full flex justify-center items-center cursor-pointer ${
            tabSelected === "discussion" && " bg-blue-950"
          }`}
          onClick={() => setTabSelected("discussion")}
        >
          Discussion Forum
        </div>

        {/* market stories tab */}
        <div
          className={`w-full h-full flex justify-center items-center cursor-pointer ${
            tabSelected === "stories" && " bg-blue-950"
          }`}
          onClick={() => setTabSelected("stories")}
        >
          Market Stories
        </div>
      </section>

      {/* conditionally rendering DiscussionForum or MarketStories component based on tabSelected state */}
      {tabSelected === "discussion" && <DiscussionForum />}
      {tabSelected === "stories" && <MarketStories />}
    </section>
  );
}
