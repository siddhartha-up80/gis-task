import React from "react";
import CommentCard from "./commentCard";
import discussionForumData from "./discussionForumData.json";

const DiscussionForum = () => {
  return (
    <div className="p-4 space-y-4 flex-shrink">
      <div className="">
        <h1 className="text-red-400 text-3xl bg-gray-50 w-max p-1 font-semibold uppercase text-start">
          discussion forum
        </h1>
      </div>

      <div className="md:space-y-8 space-y-2">
        {discussionForumData.map((forum) => (
          <CommentCard key={forum.id} forum={forum} />
        ))}
      </div>
    </div>
  );
};

export default DiscussionForum;
