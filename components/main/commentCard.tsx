"use client";

import React from "react";

import { Avatar } from "../ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Eye, Heart, Info, Share } from "lucide-react";
import { Badge } from "../ui/badge";

const CommentCard = ({ forum }: any) => {
  return (
    <div className="flex md:p-4 p-2 flex-row max-w-4xl gap-3 shadow-lg rounded-lg border items-start text-xs md:text-base">
      <div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
        </Avatar>
      </div>
      <div className="md:flex-1 w-full">
        <div className="space-y-3">
          <div className="mt-1 gap-5 flex">
            <span className="font-semibold">{forum.name}</span>{" "}
            <span className="">
              <Badge className="px-4 bg-blue-800">{forum.sector}</Badge>
            </span>
          </div>

          <div>
            <span>{forum.content}</span>
          </div>
          <div className="flex justify-between gap-2">
            <span className="flex gap-2 items-center">
              <Heart /> 2k
            </span>
            <span className="flex gap-2 items-center">
              <Eye /> 2k
            </span>
            <span className="flex gap-2 items-center">
              <Info /> 2k Comments
            </span>
            <span className="flex gap-2 items-center">
              <Share /> Share
            </span>
          </div>
        </div>
      </div>
      <div className=" pt-2 font-semibold text-blue-800">{forum.time}</div>
    </div>
  );
};

export default CommentCard;
