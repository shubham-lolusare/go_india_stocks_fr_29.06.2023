import DiscussionAndStories from "./components/DiscussionAndStories/DiscussionAndStories";
import FeatureCompanies from "./components/FeatureCompanies/FeatureCompanies";
import Navbar from "./components/Navbar/Navbar";
import StockList from "./components/StockList/StockList";

export default function App() {
  return (
    <main className="h-screen w-screen">
      <section className="h-full w-full flex flex-col">
        <Navbar />
        <StockList />
        <FeatureCompanies />
        <DiscussionAndStories />
      </section>
    </main>
  );
}
