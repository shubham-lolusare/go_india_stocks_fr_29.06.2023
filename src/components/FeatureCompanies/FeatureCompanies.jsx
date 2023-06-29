/* eslint-disable react/prop-types */
import { useState, useMemo } from "react";

// importing feature companies logo data
import logos from "../../data/featuredCompanies.json";

export default function FeatureCompanies() {
  let [logoArray] = useState(logos);

  //   memoizing the logo array components list
  let featuredCompaniesLogo = useMemo(() => {
    return logoArray.map((img) => {
      return <Logo key={img.name} image={img} />;
    });
  }, [logoArray]);

  return (
    <section className="w-full ">
      {/* title */}
      <h1 className="p-1 pl-2 text-lg font-semibold text-red-600 mobile:pl-1 sm:hidden tall:hidden">
        FEATURED COMPANIES
      </h1>
      {/* container for logos */}
      <div className="w-full h-16 bg-borderColor/30 p-2 mobile:pl-1 mobile:pr-1 overflow-hidden sm:bg-white sm:h-20 xs:h-16 tall:bg-white tall:h-20 ">
        <div className="pl-4 w-max h-full flex gap-4 animate-scroll-left-to-right sm:pl-2 sm:gap-2 tall:pl-2 tall:gap-2">
          <div className="h-full flex items-center gap-4 sm:gap-2 tall:gap-2">
            {featuredCompaniesLogo}
          </div>
          <div className="h-full flex items-center gap-4 sm:gap-2 tall:gap-2">
            {featuredCompaniesLogo}
          </div>
        </div>
      </div>
    </section>
  );
}

// logo component
function Logo({ image }) {
  return (
    <div className="h-full flex-shrink-0 sm:w-16 sm:h-16 tall:h-16 tall:w-16 sm:rounded-full xs:w-14 xs:h-14">
      <img
        src={image.link}
        className="h-full rounded-lg sm:rounded-full sm:object-contain tall:rounded-full tall:object-contain sm:border-2 sm:border-red-600 tall:border-2 tall:border-red-600"
      />
    </div>
  );
}
