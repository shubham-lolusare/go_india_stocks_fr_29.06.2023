import { useEffect, useState } from "react";
import DiscussionForum from "../DiscussionForum/DiscussionForum";
import MarketStories from "../MarketStories/MarketStories";
import SideMenu from "../SideMenu/SideMenu";

export default function DiscussionAndStories() {
  let [view, setView] = useState("desktop");

  let [tabSelected, setTabSelected] = useState("stories");

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
    <section className="w-full h-full flex-1 flex gap-4 overflow-hidden">
      <SideMenu />
      <DiscussionForum />
      <MarketStories />
    </section>
  ) : (
    <section className="w-full h-full flex-1 overflow-y-scroll select-none">
      <SideMenu />

      <section className="w-full h-12 bg-thematicColor flex justify-evenly text-white xs:h-8 xs:text-sm">
        <div
          className={`w-full h-full flex justify-center items-center cursor-pointer ${
            tabSelected === "discussion" && " bg-blue-950"
          }`}
          onClick={() => setTabSelected("discussion")}
        >
          Discussion Forum
        </div>
        <div
          className={`w-full h-full flex justify-center items-center cursor-pointer ${
            tabSelected === "stories" && " bg-blue-950"
          }`}
          onClick={() => setTabSelected("stories")}
        >
          Market Stories
        </div>
      </section>

      {tabSelected === "discussion" && <DiscussionForum />}
      {tabSelected === "stories" && <MarketStories />}
    </section>
  );
}
