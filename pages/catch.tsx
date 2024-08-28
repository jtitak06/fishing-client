import Head from "next/head";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import HoldingCatch from "../images/holding-fish.png";
import HeldCatch from "../images/Fish-Held.png";
import Headshot from "../images/Headshot-Placeholder.png";
import { FaLock } from "react-icons/fa6";
import { AiOutlineLike } from "react-icons/ai";

export default function Catch() {
    const cardItems = [
      {
        name: `Ron`,
        headshot: Headshot,
        image: HoldingCatch,
        location: `Fake Lake`,
        fish: `Bass`,
        height: 15,
        pounds: 2,
        ounces: 7,
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
        location: `Fake River`,
        fish: `Trout`,
        height: 13,
        pounds: 1,
        ounces: 3,
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
        location: `Crush Lake`,
        fish: `Pike`,
        height: 20,
        pounds: 3,
        ounces: 2,
        description: `Caught this huge pike!`,
        likes: 0,
        comments: 4
      },
    ]

    return (
      <>
        <Head>
          <title>Catch of the Day | Cast Legend</title>
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
          Catch of the Day
        </h1>
        <h3 className="text-center text-[16px] lg:text-[28px] py-4 lg:py-8">
          Just got back from fishing and have a catch you're proud of?
          <br />
          Show the world your amazing catch!
        </h3>
        <div className="flex justify-center items-center">
          <Button className="font-bold text-[#FFFFFF] bg-[#346eeb] uppercase rounded-full px-8">
            Post Your Catch
          </Button>
        </div>
        {cardItems.map((item) => {
          return (
            <Card className="max-w-[80%] mx-auto shadow-lg my-12 lg:max-w-[818.4px] xl:max-w-[1024px]">
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
                    <span className="font-semibold text-[16px] leading-[24px] lg:text-[18px] lg:leading-[28px] w-24 flex-shrink-0">
                      Fish:&nbsp;
                    </span>
                    <p className="text-[16px] leading-[24px] lg:text-[18px] lg:leading-[28px]">
                      {item.fish}
                    </p>
                  </li>
                  <li className="flex flex-row items-start my-[2px]">
                    <span className="font-semibold text-[16px] leading-[24px] lg:text-[18px] lg:leading-[28px] w-24 flex-shrink-0">
                      Height:&nbsp;
                    </span>
                    <p className="text-[16px] leading-[24px] lg:text-[18px] lg:leading-[28px]">
                      {item.height}in
                    </p>
                  </li>
                  <li className="flex flex-row items-start my-[2px]">
                    <span className="font-semibold text-[16px] leading-[24px] lg:text-[18px] lg:leading-[28px] w-24 flex-shrink-0">
                      Weight:&nbsp;
                    </span>
                    <p className="text-[16px] leading-[24px] lg:text-[18px] lg:leading-[28px]">
                      {item.pounds}lbs {item.ounces}oz
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
                  <Button><AiOutlineLike /></Button>
                  <span className="ml-3">{item.likes ? `${item.likes} like${item.likes > 1 ? 's' : ''}` : ''}</span>
                </div>
                <div className="flex items-center text-[16px] leading-[24px] lg:text-[18px] lg:leading-[28px]">
                  {item.comments ? `${item.comments} comment${item.comments > 1 ? 's' : ''}` : ''}
                </div>
              </div>
            </Card>
          );
        })}

        <div className="relative max-w-[100%] mx-auto mt-12 pb-12">
          <div className="absolute inset-0 bg-black opacity-60 z-20"></div>
          <div className="relative z-30 flex flex-col min-h-[100vh]">
            <div className="absolute inset-0 z-30">
              {" "}
              <div className="sticky top-0 flex flex-col items-center justify-center p-4">
                <FaLock className="text-white" />
                <p className="text-[#FFFFFF]">
                  Sign up to view the rest of the posts
                </p>
                <Button className="font-bold text-[#FFFFFF] bg-[#346eeb] uppercase rounded-full px-8">
                  Sign up today
                </Button>
              </div>
            </div>
            <div className="relative z-10 space-y-4">
              <Card className="opacity-10 max-w-[80%] mx-auto shadow-lg my-12 lg:max-w-[818.4px]">
                <div className="flex flex-row items-center p-4 pb-0">
                  <div className="h-12 w-12 rounded-full mr-2 bg-[length:200%_100%] bg-[linear-gradient(90deg,_rgba(216,216,216,1)_20%,_rgba(174,174,174,1)_50%,_rgba(216,216,216,1)_80%)]"></div>
                  <div className="h-6 w-[120px] rounded-full bg-[length:200%_100%] bg-[linear-gradient(90deg,_rgba(216,216,216,1)_20%,_rgba(174,174,174,1)_50%,_rgba(216,216,216,1)_80%)]"></div>
                </div>
                <div className="flex flex-col items-center p-4">
                  <div className="flex justify-center items-center">
                    <div className="w-auto object-contain rounded-lg bg-[length:200%_100%] bg-[linear-gradient(90deg,_rgba(216,216,216,1)_20%,_rgba(174,174,174,1)_50%,_rgba(216,216,216,1)_80%)]">
                      <Image
                        src={HoldingCatch}
                        alt="fish"
                        className="w-auto object-contain rounded-lg opacity-0"
                      />
                    </div>
                  </div>
                  <ul className="py-6 sm:w-full flex flex-col justify-center">
                    <li className="my-[4px] h-6 w-full rounded-full bg-[length:200%_100%] bg-[linear-gradient(90deg,_rgba(216,216,216,1)_20%,_rgba(174,174,174,1)_50%,_rgba(216,216,216,1)_80%)]"></li>
                    <li className="my-[4px] h-6 w-full rounded-full bg-[length:200%_100%] bg-[linear-gradient(90deg,_rgba(216,216,216,1)_20%,_rgba(174,174,174,1)_50%,_rgba(216,216,216,1)_80%)]"></li>
                    <li className="my-[4px] h-6 w-full rounded-full bg-[length:200%_100%] bg-[linear-gradient(90deg,_rgba(216,216,216,1)_20%,_rgba(174,174,174,1)_50%,_rgba(216,216,216,1)_80%)]"></li>
                    <li className="my-[4px] h-6 w-full rounded-full bg-[length:200%_100%] bg-[linear-gradient(90deg,_rgba(216,216,216,1)_20%,_rgba(174,174,174,1)_50%,_rgba(216,216,216,1)_80%)]"></li>
                    <li className="my-[4px] h-6 w-full rounded-full bg-[length:200%_100%] bg-[linear-gradient(90deg,_rgba(216,216,216,1)_20%,_rgba(174,174,174,1)_50%,_rgba(216,216,216,1)_80%)]"></li>
                  </ul>
                </div>
              </Card>
              <Card className="opacity-10 max-w-[80%] mx-auto shadow-lg my-12 lg:max-w-[818.4px]">
                <div className="flex flex-row items-center p-4 pb-0">
                  <div className="h-12 w-12 rounded-full mr-2 bg-[length:200%_100%] bg-[linear-gradient(90deg,_rgba(216,216,216,1)_20%,_rgba(174,174,174,1)_50%,_rgba(216,216,216,1)_80%)]"></div>
                  <div className="h-6 w-[120px] rounded-full bg-[length:200%_100%] bg-[linear-gradient(90deg,_rgba(216,216,216,1)_20%,_rgba(174,174,174,1)_50%,_rgba(216,216,216,1)_80%)]"></div>
                </div>
                <div className="flex flex-col items-center p-4">
                  <div className="flex justify-center items-center">
                    <div className="w-auto object-contain rounded-lg bg-[length:200%_100%] bg-[linear-gradient(90deg,_rgba(216,216,216,1)_20%,_rgba(174,174,174,1)_50%,_rgba(216,216,216,1)_80%)]">
                      <Image
                        src={HoldingCatch}
                        alt="fish"
                        className="w-auto object-contain rounded-lg opacity-0"
                      />
                    </div>
                  </div>
                  <ul className="py-6 sm:w-full flex flex-col justify-center">
                    <li className="my-[4px] h-6 w-full rounded-full bg-[length:200%_100%] bg-[linear-gradient(90deg,_rgba(216,216,216,1)_20%,_rgba(174,174,174,1)_50%,_rgba(216,216,216,1)_80%)]"></li>
                    <li className="my-[4px] h-6 w-full rounded-full bg-[length:200%_100%] bg-[linear-gradient(90deg,_rgba(216,216,216,1)_20%,_rgba(174,174,174,1)_50%,_rgba(216,216,216,1)_80%)]"></li>
                    <li className="my-[4px] h-6 w-full rounded-full bg-[length:200%_100%] bg-[linear-gradient(90deg,_rgba(216,216,216,1)_20%,_rgba(174,174,174,1)_50%,_rgba(216,216,216,1)_80%)]"></li>
                    <li className="my-[4px] h-6 w-full rounded-full bg-[length:200%_100%] bg-[linear-gradient(90deg,_rgba(216,216,216,1)_20%,_rgba(174,174,174,1)_50%,_rgba(216,216,216,1)_80%)]"></li>
                    <li className="my-[4px] h-6 w-full rounded-full bg-[length:200%_100%] bg-[linear-gradient(90deg,_rgba(216,216,216,1)_20%,_rgba(174,174,174,1)_50%,_rgba(216,216,216,1)_80%)]"></li>
                  </ul>
                </div>
              </Card>
              <Card className="opacity-10 max-w-[80%] mx-auto shadow-lg my-12 lg:max-w-[818.4px]">
                <div className="flex flex-row items-center p-4 pb-0">
                  <div className="h-12 w-12 rounded-full mr-2 bg-[length:200%_100%] bg-[linear-gradient(90deg,_rgba(216,216,216,1)_20%,_rgba(174,174,174,1)_50%,_rgba(216,216,216,1)_80%)]"></div>
                  <div className="h-6 w-[120px] rounded-full bg-[length:200%_100%] bg-[linear-gradient(90deg,_rgba(216,216,216,1)_20%,_rgba(174,174,174,1)_50%,_rgba(216,216,216,1)_80%)]"></div>
                </div>
                <div className="flex flex-col items-center p-4">
                  <div className="flex justify-center items-center">
                    <div className="w-auto object-contain rounded-lg bg-[length:200%_100%] bg-[linear-gradient(90deg,_rgba(216,216,216,1)_20%,_rgba(174,174,174,1)_50%,_rgba(216,216,216,1)_80%)]">
                      <Image
                        src={HoldingCatch}
                        alt="fish"
                        className="w-auto object-contain rounded-lg opacity-0"
                      />
                    </div>
                  </div>
                  <ul className="py-6 sm:w-full flex flex-col justify-center">
                    <li className="my-[4px] h-6 w-full rounded-full bg-[length:200%_100%] bg-[linear-gradient(90deg,_rgba(216,216,216,1)_20%,_rgba(174,174,174,1)_50%,_rgba(216,216,216,1)_80%)]"></li>
                    <li className="my-[4px] h-6 w-full rounded-full bg-[length:200%_100%] bg-[linear-gradient(90deg,_rgba(216,216,216,1)_20%,_rgba(174,174,174,1)_50%,_rgba(216,216,216,1)_80%)]"></li>
                    <li className="my-[4px] h-6 w-full rounded-full bg-[length:200%_100%] bg-[linear-gradient(90deg,_rgba(216,216,216,1)_20%,_rgba(174,174,174,1)_50%,_rgba(216,216,216,1)_80%)]"></li>
                    <li className="my-[4px] h-6 w-full rounded-full bg-[length:200%_100%] bg-[linear-gradient(90deg,_rgba(216,216,216,1)_20%,_rgba(174,174,174,1)_50%,_rgba(216,216,216,1)_80%)]"></li>
                    <li className="my-[4px] h-6 w-full rounded-full bg-[length:200%_100%] bg-[linear-gradient(90deg,_rgba(216,216,216,1)_20%,_rgba(174,174,174,1)_50%,_rgba(216,216,216,1)_80%)]"></li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </>
    );
}