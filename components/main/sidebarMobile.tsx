"use client";

// SidebarMobile.js
import React from "react";
import { ArrowRight, Bell, Coins, Text, User } from "lucide-react";

const SidebarMobile = ({ isOpen, toggleSidebar }: any) => {
  return (
    <div className="md:hidden">
      <div
        className={`fixed z-50 left-0 top-0 h-screen overflow-x-hidden ${
          isOpen ? "w-[80vw]" : "w-0"
        } bg-blue-950 text-white transition-all duration-500 ease-in-out`}
      >
        <section className={`space-y-2 ${isOpen ? "block" : "hidden"}`}>
          <div className="px-5 py-6 border-b border-gray-500">
            <div className="flex justify-between">
              <span className="flex gap-2 items-center">
                <User />
                <h2>Hello, User</h2>
              </span>
              <span>
                <Bell />
              </span>
            </div>
          </div>
          <div>
            <div className="flex justify-between px-2 py-2 bg-gray-800/70">
              <span className="flex gap-2 py-1">
                <Text />
                <span>Discussion Forum</span>
              </span>
              <span>
                <ArrowRight />
              </span>
            </div>
          </div>

          <div>
            <div className="flex justify-between px-2 py-2 ">
              <span className="flex gap-2">
                <Coins />
                <span>Market Stories</span>
              </span>
            </div>
          </div>
          <div className="ml-8">
            <div>
              <div className="flex justify-between px-2 py-2 ">
                <span className="flex gap-2">
                  <span>Sentiment</span>
                </span>
              </div>
            </div>
            <div>
              <div className="flex justify-between px-2 py-2">
                <span className="flex gap-2">
                  <span>Market</span>
                </span>
              </div>
            </div>
            <div>
              <div className="flex justify-between px-2  py-2">
                <span className="flex gap-2">
                  <span>Sector</span>
                </span>
              </div>
            </div>
            <div>
              <div className="flex justify-between px-2 py-2">
                <span className="flex gap-2">
                  <span>Watchlist</span>
                </span>
              </div>
            </div>
            <div>
              <div className="flex justify-between px-2 py-2">
                <span className="flex gap-2">
                  <span>Events</span>
                </span>
              </div>
            </div>
            <div>
              <div className="flex justify-between px-2 py-2">
                <span className="flex gap-2">
                  <span>News/Interview</span>
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div
        className={`fixed z-50 left-[80vw] top-0 h-screen bg-black/50 w-full ${
          isOpen ? "" : "hidden"
        } transition-all duration-500 ease-in-out`}
        onClick={toggleSidebar}
      ></div>
      <div
        className={`bg-blue-950 flex justify-center items-center h-24 rounded-r-md cursor-pointer transition-all duration-500 ease-in-out fixed top-1/2`}
        onClick={toggleSidebar}
      >
        <ArrowRight className="text-white" />
      </div>
    </div>
  );
};

export default SidebarMobile;
