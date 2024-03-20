"use client";

import DiscussionForum from "@/components/main/discussionForum";
import MarketStories from "@/components/main/marketStories";
import Navbarmobile from "@/components/main/navbarmobile";
import SidebarDesktop from "@/components/main/sidebarDesktop";
import SidebarMobile from "@/components/main/sidebarMobile";
import { useState } from "react";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isActiveDiscussion, setIsActiveDiscussion] = useState(true);
  const [isActiveMarket, setIsActiveMarket] = useState(false);

  return (
    <section className={`md:flex md:max-w-7xl md:mx-auto`}>
      <SidebarDesktop
        isOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      <div className="md:hidden">
        <SidebarMobile
          isOpen={isSidebarOpen}
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        />
        <Navbarmobile
          isActiveDiscussion={isActiveDiscussion}
          setIsActiveDiscussion={setIsActiveDiscussion}
          isActiveMarket={isActiveMarket}
          setIsActiveMarket={setIsActiveMarket}
        />
        {isActiveDiscussion && (
          <div>
            <DiscussionForum />
          </div>
        )}
        {isActiveMarket && (
          <div>
            <MarketStories />
          </div>
        )}
      </div>

      <div className="md:flex hidden">
        <div
          className={`w-full md:w-3/4 transition-all duration-500 ease-in-out ${
            isSidebarOpen ? "ml-[23vw]" : "ml-0"
          }`}
        >
          <DiscussionForum />
        </div>

        <div className="hidden md:block w-1/4">
          <MarketStories />
        </div>
      </div>
    </section>
  );
}
