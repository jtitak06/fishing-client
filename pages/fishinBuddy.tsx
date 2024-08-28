import Head from "next/head";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Headshot from "../images/Headshot-Placeholder.png";
import HoldingCatch from "../images/holding-fish.png";
import HeldCatch from "../images/Fish-Held.png";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegEnvelope } from "react-icons/fa6";

export default function FishinBuddy() {
  const cardItems = [
    {
      name: `Ron`,
      headshot: Headshot,
      image: HoldingCatch,
      title: `Join me for a fun morning of fishing`,
      location: `Fake Lake`,
      description: `At dawn, I cast my line into the calm waters of Fake Lake,
                  using a trusty green spinnerbait. The world was still, with
                  only the sound of water gently brushing the boat. I felt a
                  sudden tug, then a stronger pull—I knew I had something. I
                  carefully set the hook, and the fight began. The bass was
                  strong, making the rod bend sharply as I reeled it in
                  slowly, feeling every move. When it finally surfaced, its
                  scales shimmered in the early light, and I couldn't help but
                  smile. It was one of the biggest bass I'd caught, a
                  rewarding moment on Fake Lake.`,
      likes: 1,
      comments: 0
    },
    {
      name: `Mark`,
      headshot: Headshot,
      image: HeldCatch,
      title: `I like fishing and so do you. Let's fish together.`,
      location: `Fake River`,
      description: `At dawn, I cast my line into the calm waters of Fake River,
                  using a trusty green spinnerbait. The world was still, with
                  only the sound of water gently brushing the boat. I felt a
                  sudden tug, then a stronger pull—I knew I had something. I
                  carefully set the hook, and the fight began. The bass was
                  strong, making the rod bend sharply as I reeled it in
                  slowly, feeling every move. When it finally surfaced, its
                  scales shimmered in the early light, and I couldn't help but
                  smile. It was one of the biggest bass I'd caught, a
                  rewarding moment on Fake River.`,
      likes: 23,
      comments: 1
    },
    {
      name: `David`,
      headshot: Headshot,
      image: HoldingCatch,
      title: `Fishing is good for the soul. Join me.`,
      location: `Crush Lake`,
      description: `Caught this huge pike!`,
      likes: 0,
      comments: 4
    },
  ]

    return (
      <>
        <Head>
          <title>Fishin' Buddy | Cast Legend</title>
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
        <h1 className="text-center text-[32px] leading-[40px] font-medium lg:text-[64px] lg:leading-{72px} lg:mt-12">
          Fishin' Buddy
        </h1>
        <h3 className="text-center text-[16px] lg:text-[28px] py-4 lg:py-8">
          Want to spend a day on the water with other anglers?
          <br />
          Find a fishin' buddy near you!
        </h3>
        <div className="flex justify-center items-center">
          <Button className="font-bold text-[#FFFFFF] bg-[#346eeb] uppercase rounded-full px-8">
            Find Your Fishin' Buddy
          </Button>
        </div>
        {cardItems.map((item) => {
          return (
            <Card className="max-w-[80%] mx-auto shadow-lg my-12 lg:max-w-[818.4px] xl:max-w-[1024px]">
              <div className="flex justify-between items-center">
                <div className="flex flex-row items-center p-4 pb-0">
                  <Image
                    src={item.headshot}
                    alt="headshot"
                    className="h-12 w-12 rounded-full mr-2"
                  />
                  <h4 className="font-bold text-[16px] leading-[24px] lg:text-[18px] lg:leading-[28px]">
                    {item.name}
                  </h4>
                </div>
                <Button
                  className="bg-white rounded-full w-12 h-12 hover:bg-blue-500 hover:text-white m-4 mb-0/["
                  variant="outline"
                >
                  <FaRegEnvelope className="h-6 w-6" />
                </Button>
              </div>
              <h3 className="p-2 text-center text-[16px] lg:text-[28px] font-bold">{item.title}</h3>
              <div className="flex flex-col items-center p-4">
                {/* Image Section */}
                <div className="flex justify-center items-center">
                  <Image
                    src={item.image}
                    alt="fish"
                    className="w-auto object-contain rounded-lg"
                  />
                </div>
                {/* Text Section */}
                <ul className="py-6 w-full flex flex-col">
                  <li className="flex flex-row items-start my-[2px]">
                    <span className="font-semibold text-[16px] leading-[24px] lg:text-[18px] lg:leading-[28px] w-24 flex-shrink-0">
                      Location:&nbsp;
                    </span>
                    <p className="text-[16px] leading-[24px] lg:text-[18px] lg:leading-[28px]">
                      {item.location}
                    </p>
                  </li>
                  <li className="flex flex-row items-start my-[2px]">
                    <span className="font-semibold font-semibold text-[16px] leading-[24px] lg:text-[18px] lg:leading-[28px] w-24 flex-shrink-0">
                      Summary:&nbsp;
                    </span>
                    <p className="text-[16px] leading-[24px] lg:text-[18px] lg:leading-[28px]">
                      {item.description}
                    </p>
                  </li>
                </ul>
              </div>
              <div className="p-4 pt-0 w-full flex justify-between">
                <div className="flex items-center text-[16px] leading-[24px] lg:text-[18px] lg:leading-[28px]">
                  <Button>
                    <AiOutlineLike />
                  </Button>
                  <span className="ml-3">
                    {item.likes
                      ? `${item.likes} like${item.likes > 1 ? "s" : ""}`
                      : ""}
                  </span>
                </div>
                <div className="flex items-center text-[16px] leading-[24px] lg:text-[18px] lg:leading-[28px]">
                  {item.comments
                    ? `${item.comments} comment${item.comments > 1 ? "s" : ""}`
                    : ""}
                </div>
              </div>
            </Card>
          );
        })}
      </>
    );
}