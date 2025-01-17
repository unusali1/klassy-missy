"use client";
import React from "react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";

export default function OmniChannelSection() {
  const router = useRouter();
  return (
    <div
      className="relative flex  items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('/assets/ai.jpg')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute w-[800px] h-[800px]  from-[#f0f0f0] via-[#f0f0f0] to-[#f0f0f0] rounded-full blur-[100px]"></div>
      <div className="relative z-10 flex flex-col items-center mb-12 mt-12 ">
        <div className="flex gap-3 sm:gap-44 items-center px-4">
          <div className="flex flex-col items-center gap-0 sm:gap-2">
            <div className="p-4 bg-blue-500 rounded-full shadow-lg">
              <Icon
                icon="tabler:world"
                // width={60}
                // height={50}
                className="text-white mb-2 sm:w-12 sm:h-10 w-8 h-6"
              />
            </div>
            <p className="text-[#01034A] text-sm sm:text-lg sm:font-bold">
              Website
            </p>
          </div>
          <div className="flex flex-col items-center gap-0 sm:gap-2 mb-0 sm:mb-24">
            <div className="p-4 bg-green-500 rounded-full shadow-lg">
              <Icon
                icon="ic:outline-whatsapp"
                // width={60}
                // height={50}
                className="text-white mb-2 sm:w-12 sm:h-10 w-8 h-6"
              />
            </div>
            <p className="text-[#01034A] text-sm sm:text-lg sm:font-bold">
              WhatsApp
            </p>
          </div>
          <div className="flex flex-col items-center gap-0 sm:gap-2 mb-0 sm:mb-48">
            <div className="p-4 bg-gradient-to-br from-blue-500 to-pink-500 rounded-full shadow-lg">
              <Icon
                icon="mingcute:messenger-line"
                // width={60}
                // height={50}
                className="text-white mb-2 sm:w-12 sm:h-10 w-8 h-6"
              />
            </div>
            <p className="text-[#01034A] text-sm sm:text-lg sm:font-bold">
              Messenger
            </p>
          </div>
          <div className="flex flex-col items-center gap-0 sm:gap-2 mb-0 sm:mb-24">
            <div className="p-4 bg-gradient-to-br from-pink-500 to-yellow-500 rounded-full shadow-lg">
              <Icon
                icon="hugeicons:instagram"
                // width={60}
                // height={50}
                className="text-white mb-2 sm:w-12 sm:h-10 w-8 h-6"
              />
            </div>
            <p className="text-[#01034A] text-sm sm:text-lg sm:font-bold">
              Instagram
            </p>
          </div>
          <div className="flex flex-col items-center gap-0 sm:gap-2">
            <div className="p-4 bg-orange-500 rounded-full shadow-lg">
              <Icon
                icon="cib:hubspot"
                // width={60}
                // height={50}
                className="text-white mb-2 sm:w-12 sm:h-10 w-8 h-6"
              />
            </div>
            <p className="text-[#01034A] text-sm sm:text-lg sm:font-bold">
              HubSpot
            </p>
          </div>
        </div>

        <p className="text-center text-xl text-[#01034A] mt-10 px-6 sm:mt-8 font-bold">
          NeuroBrain’s Customer Agent integrates with 50+ Omni channels.
        </p>

        <button
          className="mt-6 px-6 py-3 bg-blue-500 text-white font-medium rounded-md shadow-lg hover:bg-blue-600"
          onClick={() => router.push("/contact")}
        >
          Build Your First AI Chatbot
        </button>
      </div>
    </div>
  );
}
