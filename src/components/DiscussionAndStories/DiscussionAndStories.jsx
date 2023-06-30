import DiscussionForum from "../DiscussionForum/DiscussionForum";
import MarketStories from "../MarketStories/MarketStories";
import SideMenu from "../SideMenu/SideMenu";

export default function DiscussionAndStories() {
  return (
    <section className="w-full h-full flex-1 flex gap-4 overflow-hidden">
      <SideMenu />
      <DiscussionForum />
      <MarketStories />
    </section>
  );
}
