import { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import { Button } from "@/components/ui/button";
import FishingHand from "../images/fishing-hand.png";
import SearchFilter from "@/components/searchFilter";
import { MdViewList } from "react-icons/md";
import { HiViewGrid } from "react-icons/hi";
import { FaCartPlus } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import { FaFilter } from "react-icons/fa6";

export default function FishingMarketplace() {
  const [view, setView] = useState('grid');
  const initialItems = [
    { name: "Item 1", url: "https://i.ebayimg.com/images/g/Gg0AAOSwW55k77ab/s-l400.jpg", price: 45 },
    { name: "Item 2", url: "https://i.ebayimg.com/images/g/Gg0AAOSwW55k77ab/s-l400.jpg", price: 20 },
    { name: "Item 3", url: "https://i.ebayimg.com/images/g/Gg0AAOSwW55k77ab/s-l400.jpg", price: 35 },
    { name: "Item 4", url: "https://i.ebayimg.com/images/g/Gg0AAOSwW55k77ab/s-l400.jpg", price: 10 },
    { name: "Item 5", url: "https://i.ebayimg.com/images/g/Gg0AAOSwW55k77ab/s-l400.jpg", price: 60 },
  ];

    return (
      <>
        <Head>
          <title>Fishing Marketplace | Cast Legend</title>
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
        <div
          className="relative flex items-center justify-center h-[400px] bg-cover bg-center"
          style={{
            backgroundImage: `url(${FishingHand.src})`,
          }}
        >
          {/* Overlay for better text visibility */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          {/* Content */}
          <div className="relative z-10 text-center text-white">
            <h1 className="text-3xl lg:text-5xl font-bold mb-4">Marketplace</h1>
            <input
              type="text"
              placeholder="Search here..."
              className="px-4 py-2 text-black rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-row items-center justify-between p-4">
          <div className="w-1/3 h-full lg:flex justify-start hidden">
            <SearchFilter />
          </div>
          <div className="flex flex-col flex-grow flex-start">
            <div className="flex flex-row justify-between">
              <div>
                <Button className="lg:hidden bg-[#346eeb] rounded-full px-4">
                  <span className="text-white">Filter</span>
                  <FaFilter className="text-white ml-2" />
                </Button>
                <select className="border p-2 rounded">
                  <option>Sort by</option>
                  <option>Lowest price</option>
                  <option>Highest price</option>
                  <option>Closest</option>
                </select>
              </div>
              <div className="flex space-x-2">
                <Button onClick={() => setView("list")}>
                  <MdViewList />
                </Button>
                <Button onClick={() => setView("grid")}>
                  <HiViewGrid />
                </Button>
              </div>
            </div>
            <div>
              {view === "grid" ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {initialItems.map((item, index) => (
                    <Card
                      key={index}
                      className="p-1 bg-white border rounded-lg overflow-hidden relative w-full max-w-xs"
                    >
                      <div className="relative w-full pb-[75%]">
                        {" "}
                        {/* Use padding-bottom to create a responsive aspect ratio */}
                        <Image
                          src={item.url}
                          alt={item.name}
                          layout="fill"
                          className="absolute top-0 left-0 w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="flex flex-col justify-between p-2">
                        <h3 className="text-center text-[20px] leading-[24px] font-bold">
                          {item.name}
                        </h3>
                        <div className="flex flex-row justify-between items-center mt-2">
                          <span className="text-[18px] font-semibold">
                            ${item.price}
                          </span>
                          <Button
                            className="bg-white rounded-full w-8 h-8 hover:bg-blue-500 hover:text-white"
                            variant="outline"
                          >
                            <FaCartPlus />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {initialItems.map((item, index) => (
                    <Card
                    key={index}
                    className="flex items-center h-full border p-4 rounded shadow-lg"
                  >
                    <div className="relative w-24 h-24 mr-4">
                      <Image
                        src={item.url}
                        alt={item.name}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                    <CardContent className="flex w-full h-full justify-between pb-0">
                      <div className="flex flex-col justify-between">
                        <h3 className="text-xl font-semibold">{item.name}</h3>
                        <p className="text-lg text-gray-600">${item.price}</p>
                      </div>
                      <div className="self-start"> {/* Adjusts button position */}
                        <Button
                          className="bg-white rounded-full w-8 h-8 hover:bg-blue-500 hover:text-white"
                          variant="outline"
                        >
                          <FaCartPlus />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    );
}