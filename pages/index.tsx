import Head from "next/head";
import Image from "next/image";
import { IoFishOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import Gradient from "../images/Gradient.svg";
import HeroImage from "../images/Image.svg";
import FishingRods from "../images/fishing-rods.png";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import { CarouselSize } from "@/components/CarouselSize";
import { Faq } from "@/components/Faq";
import { SignUpBox } from "@/components/SignUpBox";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Cast Legend</title>
        <meta
          name="description"
          content="Your digital hub for all things fishing."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Cast Legend" />
        <meta
          property="og:description"
          content="This is the home page description"
        />
        <meta property="og:image" content="/path/to/image.jpg" />
        <meta property="og:url" content="https://castlegend.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cast Legend" />
        <meta
          name="twitter:description"
          content="Your digital hub for all things fishing."
        />
        <meta name="twitter:image" content="/path/to/image.jpg" />
      </Head>
      <div className="pt-4 lg:pt-10">
        <div className="px-[20px] lg:px-[240px]">
          <div className="flex items-center justify-center px-[20px]">
            <IoFishOutline className="text-[32px] leading-[40px] font-medium lg:text-[64px] lg:leading-{72px}" />
            <h1 className="text-[32px] leading-[40px] font-medium lg:text-[64px] lg:leading-{72px}">
              Cast Legend
            </h1>
          </div>
          <h3 className="flex items-center justify-center text-center pt-4 text-[16px] lg:text-[28px]">
            Your digital hub for all things fishing!
          </h3>
          <div className="flex w-full pt-8 items-center justify-center">
            <Button className="bg-[#346eeb] w-1/2 max-w-[180px] py-4 px-8 text-[white] font-medium text-[14px] rounded-[4px] mr-[4px] lg:w-[180px] lg:mr-[16px]">
              Try for Free
            </Button>
            <Button className="bg-[white] text-[#346eeb] w-1/2 max-w-[180px] border-[1px] border-[#346eeb] py-4 px-8 font-medium text-[14px] rounded-[4px] mr-[4px] flex items-center justify-center ml-[4px] lg:w-[180px] lg:ml-[16px]">
              View Pricing
              <FaArrowRight className="text-[#346eeb] ml-1 text-[14px] font-medium" />
            </Button>
          </div>
        </div>
        <div className="relative h-full w-full flex-col items-center">
          <Image
            src={Gradient}
            alt="Gradient"
            className="object-cover w-full min-h-[360px] lg:h-auto"
          />
          <div className="absolute bottom-5 flex w-full flex-col items-center">
            <Image
              src={HeroImage}
              alt="hero-image"
              className="-ml-4 h-[310px] sm:-mb-20 sm:h-[400px] lg:-mb-[28px] lg:h-[600px] xl:w-[70%]"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-[56px] px-[32px] py-[56px] lg:py-[120px] lg:gap-y-[80px]">
        <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
          <div className="hidden sm:block sm:w-1/2">
            <Image
              src={FishingRods}
              alt="fishing-rods"
              className="rounded-[16px]"
            />
          </div>
          <div className="pb-4 sm:w-1/2 sm:flex sm:flex-col lg:p-y-[56px] lg:pr-[56px]">
            <h3 className="font-medium text-[#0085FF] text-[16px] leading-[24px] uppercase lg:text-[18px]">
              Buy Now
            </h3>
            <h2 className="pt-[12px] text-[24px] leading-[32px] font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
              Same Day Delivery!
            </h2>
            <div className="sm:hidden">
              <Image
                src={FishingRods}
                alt="fishing-rods"
                className="rounded-[16px] mt-4"
              />
            </div>
            <p className="py-[24px] text-[16px] leading-[24px] sm:max-w-[572px] lg:text-[18px] lg:leading-[28px]">
              Purchase all your fishing essentials online from your local store
              and get them delivered to your door the same day, giving you more
              time to fish and less time on other tasks.
            </p>
            <ul className="flex flex-col gap-y-3">
              <li className="flex flex-row items-center gap-x-2 text-[16px] leading-[24px] lg:text-[18px] lg:leading-[28px]">
                <FaCheck className="text-[#027148]" />
                Rods and reels
              </li>
              <li className="flex flex-row items-center gap-x-2 text-[16px] leading-[24px] lg:text-[18px] lg:leading-[28px]">
                <FaCheck className="text-[#027148]" />
                Live bait and lures
              </li>
              <li className="flex flex-row items-center gap-x-2 text-[16px] leading-[24px] lg:text-[18px] lg:leading-[28px]">
                <FaCheck className="text-[#027148]" />
                All your fishing accessories
              </li>
            </ul>
            <Button className="flex flex-row items-center w-fit gap-x-2 mt-[18px] text-[16px] leading-[24px] text-[#0085FF] font-medium lg:text-[18px] lg:leading-[28px]">
              Shop Now
              <FaArrowRight />
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-x-6 sm:flex-row">
          <div className="hidden sm:block sm:w-1/2">
            <Image
              src={FishingRods}
              alt="fishing-rods"
              className="rounded-[16px]"
            />
          </div>
          <div className="pb-4 sm:w-1/2 sm:flex sm:flex-col lg:p-y-[56px] lg:pl-[56px]">
            <h3 className="font-medium text-[#0085FF] text-[16px] leading-[24px] uppercase lg:text-[18px]">
              Fishin&#39; Buddy
            </h3>
            <h2 className="pt-[12px] text-[24px] leading-[32px] font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
              Share the Day with Fishing Fanatics!
            </h2>
            <div className="sm:hidden">
              <Image
                src={FishingRods}
                alt="fishing-rods"
                className="rounded-[16px] mt-4"
              />
            </div>
            <p className="py-[24px] text-[16px] leading-[24px] sm:max-w-[572px] lg:text-[18px] lg:leading-[28px]">
              Looking for company? Cast Legend lets you post upcoming fishing trips
              and connect with other anglers to meet up and enjoy the day!
            </p>
            <ul className="flex flex-col gap-y-3">
              <li className="flex flex-row items-center gap-x-2 text-[16px] leading-[24px] lg:text-[18px] lg:leading-[28px]">
                <FaCheck className="text-[#027148]" />
                Cultivate new friendships
              </li>
              <li className="flex flex-row items-center gap-x-2 text-[16px] leading-[24px] lg:text-[18px] lg:leading-[28px]">
                <FaCheck className="text-[#027148]" />
                Share your tips and experiences
              </li>
              <li className="flex flex-row items-center gap-x-2 text-[16px] leading-[24px] lg:text-[18px] lg:leading-[28px]">
                <FaCheck className="text-[#027148]" />
                Learn from fellow anglers
              </li>
            </ul>
            <Button className="flex flex-row items-center w-fit gap-x-2 mt-[18px] text-[16px] leading-[24px] text-[#0085FF] font-medium lg:text-[18px] lg:leading-[28px]">
              Find Your Fishin&#39; Buddy
              <FaArrowRight />
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
          <div className="hidden sm:block sm:w-1/2">
            <Image
              src={FishingRods}
              alt="fishing-rods"
              className="rounded-[16px]"
            />
          </div>
          <div className="pb-4 sm:w-1/2 sm:flex sm:flex-col lg:p-y-[56px] lg:pr-[56px]">
            <h3 className="font-medium text-[#0085FF] text-[16px] leading-[24px] uppercase lg:text-[18px]">
              Catch of the Day
            </h3>
            <h2 className="pt-[12px] text-[24px] leading-[32px] font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
              Share Your Best Catch!
            </h2>
            <div className="sm:hidden">
              <Image
                src={FishingRods}
                alt="fishing-rods"
                className="rounded-[16px] mt-4"
              />
            </div>
            <p className="py-[24px] text-[16px] leading-[24px] sm:max-w-[572px] lg:text-[18px] lg:leading-[28px]">
              Show off your best catch of the day to fellow anglers, who will
              share your excitement and enthusiasm for your impressive
              achievement!
            </p>
            <ul className="flex flex-col gap-y-3">
              <li className="flex flex-row items-center gap-x-2 text-[16px] leading-[24px] lg:text-[18px] lg:leading-[28px]">
                <FaCheck className="text-[#027148]" />
                Impress other anglers
              </li>
              <li className="flex flex-row items-center gap-x-2 text-[16px] leading-[24px] lg:text-[18px] lg:leading-[28px]">
                <FaCheck className="text-[#027148]" />
                Proudly display your catch
              </li>
              <li className="flex flex-row items-center gap-x-2 text-[16px] leading-[24px] lg:text-[18px] lg:leading-[28px]">
                <FaCheck className="text-[#027148]" />
                Share important details
              </li>
            </ul>
            <Button className="flex flex-row items-center w-fit gap-x-2 mt-[18px] text-[16px] leading-[24px] text-[#0085FF] font-medium lg:text-[18px] lg:leading-[28px]">
              Post Your Best Catch
              <FaArrowRight />
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-x-6 sm:flex-row">
          <div className="hidden sm:block sm:w-1/2">
            <Image
              src={FishingRods}
              alt="fishing-rods"
              className="rounded-[16px]"
            />
          </div>
          <div className="pb-4 sm:w-1/2 sm:flex sm:flex-col lg:p-y-[56px] lg:pl-[56px]">
            <h3 className="font-medium text-[#0085FF] text-[16px] leading-[24px] uppercase lg:text-[18px]">
              Charters
            </h3>
            <h2 className="pt-[12px] text-[24px] leading-[32px] font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
              Book an Amazing Fishing Experience!
            </h2>
            <div className="sm:hidden">
              <Image
                src={FishingRods}
                alt="fishing-rods"
                className="rounded-[16px] mt-4"
              />
            </div>
            <p className="py-[24px] text-[16px] leading-[24px] sm:max-w-[572px] lg:text-[18px] lg:leading-[28px]">
              Let local experts take you on an amazing fishing charter without logistical
              concerns while enjoying the convenience, safety, and expertise
              provided for a successful adventure.
            </p>
            <ul className="flex flex-col gap-y-3">
              <li className="flex flex-row items-center gap-x-2 text-[16px] leading-[24px] lg:text-[18px] lg:leading-[28px]">
                <FaCheck className="text-[#027148]" />
                The best fishing spots
              </li>
              <li className="flex flex-row items-center gap-x-2 text-[16px] leading-[24px] lg:text-[18px] lg:leading-[28px]">
                <FaCheck className="text-[#027148]" />
                High quality fishing equipment
              </li>
              <li className="flex flex-row items-center gap-x-2 text-[16px] leading-[24px] lg:text-[18px] lg:leading-[28px]">
                <FaCheck className="text-[#027148]" />
                Create memories for a lifetime
              </li>
            </ul>
            <Button className="flex flex-row items-center w-fit gap-x-2 mt-[18px] text-[16px] leading-[24px] text-[#0085FF] font-medium lg:text-[18px] lg:leading-[28px]">
              Book a Charter
              <FaArrowRight />
            </Button>
          </div>
        </div>
      </div>
      <CarouselSize />
      <Faq />
      <SignUpBox />
    </>
  );
}