import DiscussionForum from "../DiscussionForum/DiscussionForum";
import MarketStories from "../MarketStories/MarketStories";
import SideMenu from "../SideMenu/SideMenu";

export default function DiscussionAndStories() {
  return (
    <section className="flex-1 flex gap-4">
      <SideMenu />
      <DiscussionForum />
      <MarketStories />
    </section>
  );
}
