import { AiOutlinePlus } from "react-icons/ai";

import DiscussionAndStories from "./components/DiscussionAndStories/DiscussionAndStories";
import FeatureCompanies from "./components/FeatureCompanies/FeatureCompanies";
import Navbar from "./components/Navbar/Navbar";
import StockList from "./components/StockList/StockList";
import FooterMenu from "./components/FooterMenu/FooterMenu";

export default function App() {
  return (
    <main className="h-screen w-screen">
      <section className="h-full w-full flex flex-col">
        <Navbar />
        <StockList />
        <FeatureCompanies />
        <DiscussionAndStories />
        <FooterMenu />

        {/* plus button to add post */}
        <button className="fixed bottom-8 right-8 w-14 h-14 bg-thematicColor text-white text-3xl rounded-full flex justify-center items-center z-[100000] sm:bottom-16 sm:right-4 sm:w-10 sm:h-10 sm:text-2xl xs:right-2 xs:bottom-12">
          <AiOutlinePlus />
        </button>
      </section>
    </main>
  );
}
