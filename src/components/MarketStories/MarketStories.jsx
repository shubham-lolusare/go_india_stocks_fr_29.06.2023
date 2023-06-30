/* eslint-disable react/prop-types */
// importng story data
import stories from "../../data/stories.json";

// importing hooks
import { useState, useMemo } from "react";

export default function MarketStories() {
  // stpry the stories data
  let [storiesArray] = useState(stories);

  // memoizing story post array
  let storiesPosts = useMemo(() => {
    return storiesArray.map((story, index) => {
      return <Story key={index + 1} story={story} />;
    });
  }, [storiesArray]);

  return (
    <section className="flex-1 flex flex-col gap-4 pb-4 select-none tall:gap-2 sm:p-2 sm:ml-6 sm:pb-14 xs:pb-12">
      {/* heading */}
      <h1 className="pt-4 text-lg font-semibold text-center text-red-600 sm:hidden">
        MARKET STORIES
      </h1>

      {/* story post section */}
      <section className="postSection flex-1 flex flex-wrap gap-4 justify-center overflow-y-scroll pr-2 sm:pr-0 sm:overflow-visible mobile:gap-2">
        {storiesPosts}
      </section>
    </section>
  );
}

function Story({ story }) {
  return (
    <article className="relative basis-[250px] max-w-[350px] h-[200px] flex-grow rounded-xl shadow-md">
      {/* story heading */}
      <h1 className="absolute bottom-0 left-0 bg-black/60 text-white rounded-br-xl rounded-bl-xl p-1 pl-4 pr-4 text-[14px] xs:text-xs">
        {story.storyTitle}
      </h1>

      {/* story bg image */}
      <img
        src={story.bgImage}
        className="w-full h-full rounded-xl object-cover object-center"
      />
    </article>
  );
}
