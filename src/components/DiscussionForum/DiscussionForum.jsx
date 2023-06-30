/* eslint-disable react/prop-types */
// importing hooks
import { useState } from "react";

// importing icons
import { RxCross1 } from "react-icons/rx";
import { RiSearchLine } from "react-icons/ri";
import {
  AiFillHeart,
  AiOutlineEye,
  AiOutlineComment,
  AiOutlineShareAlt,
} from "react-icons/ai";

// importing discussion data
import discussion from "../../data/discussions.json";

// importing the css for this component
import "./DiscussionForum.css";

export default function DiscussionForum() {
  // state to manage the selected filter option
  let [selectedFilter, setSelectedFilter] = useState("");

  return (
    <section className="flex-[1.5] flex flex-col gap-4">
      {/* title */}
      <h1 className="pt-4 text-lg font-semibold text-red-600">
        DISCUSSION FORUM
      </h1>

      {/* filter section */}
      <section className="p-2 flex gap-2 bg-white shadow-md rounded-md text-white">
        <button
          className={`p-1 pr-4 pl-4 bg-red-600 rounded-full ${
            selectedFilter === "sector1" &&
            " outline-2 outline outline-offset-2 outline-thematicColor"
          }`}
          onClick={() => setSelectedFilter("sector1")}
        >
          Sector 1
        </button>
        <button
          className={`p-1 pr-4 pl-4 bg-thematicColor rounded-full ${
            selectedFilter === "sector2" &&
            " outline-2 outline outline-offset-2 outline-thematicColor"
          }`}
          onClick={() => setSelectedFilter("sector2")}
        >
          Sector 2
        </button>
        <button
          className={`p-1 pr-4 pl-4 bg-yellow-500 rounded-full ${
            selectedFilter === "sector3" &&
            " outline-2 outline outline-offset-2 outline-thematicColor"
          }`}
          onClick={() => setSelectedFilter("sector3")}
        >
          Sector 3
        </button>
        <div className="relative h-full w-full flex-1">
          <input
            type="text"
            className="w-full h-full rounded-full bg-bgColor shadow-inner pl-10 text-black focus:outline-none"
            placeholder="Search here"
          />
          <RiSearchLine className="text-black absolute top-2 left-2 cursor-pointer" />
        </div>

        {/* button to clear filters */}
        {selectedFilter !== "" && (
          <button onClick={() => setSelectedFilter("")}>
            <RxCross1 className="text-thematicColor hover:text-red-500 hover:font-bold" />
          </button>
        )}
      </section>

      {/* section for the posts */}
      <section className="postSection flex-1 flex flex-col gap-4 overflow-y-scroll pr-2 pb-4">
        {filterPostArray(selectedFilter, discussion)}
      </section>
    </section>
  );
}

function Post({ postData, index }) {
  return (
    <article className="p-2 rounded-md bg-white shadow-md flex flex-col gap-4">
      {/* company logo for the first post only */}
      {index == 0 && (
        <div className="h-48 flex justify-center items-center">
          <img
            src="https://www.equitybulls.com/equitybullsadmin/uploads/Infibeam%20Avenues%20Limited%20-%20New%20Logo%202.jpg"
            className="h-full"
          />
        </div>
      )}

      {/* title */}
      <div className="flex gap-4 items-center">
        {/* profile pic */}
        <img src={postData.profileURL} className="w-10 h-10 rounded-full" />

        {/* user name */}
        <span className="font-bold text-xl">{postData.username}</span>

        {/* sector tag */}
        <div className="flex-1 flex justify-start items-center">
          <span
            className={`h-[60%] pr-4 pl-4 ${bgColorSelector(
              postData.sector
            )} rounded-full text-white`}
          >
            Sector {postData.sector}
          </span>
        </div>

        {/* post time stamp */}
        <span className="text-xs">{postData.timePosted}</span>
      </div>

      {/* post comments and data */}
      <div className="pl-14 text-justify pr-14">{postData.post}</div>

      {/* user interaction section */}
      <div className="pl-14 flex gap-8 justify-start items-center ">
        {/* likes */}
        <div className="flex gap-1 items-center cursor-pointer">
          <AiFillHeart className="text-red-600" /> <span>{postData.likes}</span>
        </div>

        {/* views */}
        <div className="flex gap-1 items-center cursor-pointer">
          <AiOutlineEye className="text-black" /> <span>{postData.views}</span>
        </div>

        {/* comments */}
        <div className="flex gap-1 items-center cursor-pointer">
          <AiOutlineComment className="text-black" />{" "}
          <span>{postData.comments}</span>
        </div>

        {/* share */}
        <div className="flex gap-1 items-center cursor-pointer">
          <AiOutlineShareAlt className="text-black" /> <span>Share</span>
        </div>
      </div>
    </article>
  );
}

// function to select the bg color according to the sector for the post label
function bgColorSelector(sector) {
  if (sector == 1) return " bg-red-600";
  else if (sector == 2) return " bg-thematicColor";
  else if (sector == 3) return " bg-yellow-500";
}

// funtion to return the array according to the filter option selected
function filterPostArray(selectedOption, discussion) {
  // if no filter option selected
  if (selectedOption == "") {
    return discussion.map((post, index) => {
      return <Post key={index + 1} postData={post} index={index} />;
    });
  }

  // if sector 1 filter option is selected
  else if (selectedOption == "sector1") {
    return discussion.map((post, index) => {
      if (post.sector == 1)
        return <Post key={index + 1} postData={post} index={index} />;
    });
  }

  // if sector 2 filter option is selected
  else if (selectedOption == "sector2") {
    return discussion.map((post, index) => {
      if (post.sector == 2)
        return <Post key={index + 1} postData={post} index={index} />;
    });
  }

  // if sector 3 filter option is selected
  else if (selectedOption == "sector3") {
    return discussion.map((post, index) => {
      if (post.sector == 3)
        return <Post key={index + 1} postData={post} index={index} />;
    });
  }
}
