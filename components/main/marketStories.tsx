import React from "react";
import StoryCard from "./storyCard";
import marketStoriesData from "./marketStoriesData.json";

const MarketStories = () => {
  return (
    <div className="p-4 space-y-4 flex-shrink">
      <div className="max-w-4xl">
        <h1 className="text-red-400 text-2xl bg-gray-50 w-max p-1 font-semibold uppercase text-start">
          Market stories
        </h1>
      </div>
      <div className="space-y-2">
        {marketStoriesData.map((story) => (
          <StoryCard key={story.id} story={story} />
        ))}
      </div>
    </div>
  );
};

export default MarketStories;
