import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";

const StoryCard = ({ story }: any) => {
  return (
    <Card className="flex flex-col gap-2 shadow-lg w-full flex-shrink text-sm">
      <Image
        src={story.image}
        alt="story"
        width={200}
        height={200}
        className="h-1/6 w-full aspect-video object-cover object-center"
      />
      <CardContent className="space-y-2">
        <span className="font-semibold text-lg">{story.title}</span>
        <p>{story.content}</p>
      </CardContent>
    </Card>
  );
};

export default StoryCard;
