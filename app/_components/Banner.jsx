"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import heroImg from "../../public/assets/homeHero.png";
import homeImg from "../../public/assets/homePage.png";
import chatImg from "../../public/assets/chatImg.webp";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Banner = () => {
  const router = useRouter();
  return (
    <>
      <div>
        <Image
          src={homeImg}
          width={1120}
          height={1620}
          alt="Chat Icon"
          className="h-full w-full"
        />
      </div>
      {/* // <div className="bg-gray-100 flex justify-center"> */}

      {/* <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
         
          <div className="mt-16 md:mt-32 mb-16 md:mb-32 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              AI-powered Chatbot with Seamless Human Handover
            </h1>
            <p className="mt-4 text-gray-600 text-base md:text-lg">
              Combined efficiency of AI-powered chatbots with seamless handover options to human agents for 10X service efficiency and smoother customer interaction.
            </p>
            <div className="flex  md:flex-row gap-4 py-6 justify-center md:justify-start">
              <Button className="p-4 md:p-7 bg-black text-white rounded-md shadow-lg hover:scale-105 transition-all text-sm md:text-base font-normal tracking-wide"
              onClick={() => router.push('/contact')}
              >
                Start Free Trial
              </Button>
              <Button
                className="p-4 md:p-7 rounded-md shadow-lg hover:scale-105 transition-all text-sm md:text-base font-normal tracking-wide"
                variant="outline"
                onClick={() => router.push('/contact')}
              >
                Book a Demo
              </Button>
            </div>
          </div>

         
          <div className="relative mt-8 md:mt-12 mb-16 md:mb-32 flex justify-center md:justify-end">
            <Image src={heroImg} width={600} height={600} alt="Hero Image" />
            <div className="absolute top-4 md:top-12 right-0 md:right-48">
              <Image
                src={chatImg}
                width={120}
                height={120}
                alt="Chat Icon"
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      </div> */}
      {/* // </div> */}
    </>
  );
};

export default Banner;
