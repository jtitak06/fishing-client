"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";
import { FaArrowLeft, FaArrowRight, FaCartPlus } from "react-icons/fa";

export function CarouselSize() {
  // Define dummy data with name and URL
  const initialItems = [
    { name: "Item 1", url: "https://i.ebayimg.com/images/g/Gg0AAOSwW55k77ab/s-l400.jpg", price: 45 },
    { name: "Item 2", url: "https://i.ebayimg.com/images/g/Gg0AAOSwW55k77ab/s-l400.jpg", price: 20 },
    { name: "Item 3", url: "https://i.ebayimg.com/images/g/Gg0AAOSwW55k77ab/s-l400.jpg", price: 35 },
    { name: "Item 4", url: "https://i.ebayimg.com/images/g/Gg0AAOSwW55k77ab/s-l400.jpg", price: 10 },
    { name: "Item 5", url: "https://i.ebayimg.com/images/g/Gg0AAOSwW55k77ab/s-l400.jpg", price: 60 },
  ];

  const [items, setItems] = useState(initialItems);

  const handlePrevious = () => {
    setItems((prevItems) => {
      if (prevItems.length === 0) return prevItems;
      const newItems = [prevItems[prevItems.length - 1], ...prevItems.slice(0, -1)];
      return newItems;
    });
  };

  const handleNext = () => {
    setItems((prevItems) => {
      if (prevItems.length === 0) return prevItems;
      const newItems = [...prevItems.slice(1), prevItems[0]];
      return newItems;
    });
  };

  return (
    <div className="relative flex flex-col justify-center items-center">
      <h2 className="mb-4 text-[24px] leading-[32px] font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
        View Items for Sale
      </h2>
      <div className="relative w-full max-w-[80%] px-4 flex justify-center">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {items.map((item, index) => (
              <CarouselItem
                key={index}
                className="sm:basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 flex-shrink-0 p-2 flex justify-center"
              >
                <Card className="p-1 bg-white border rounded-lg overflow-hidden h-[400px] w-[300px] relative">
                  <div className="relative w-full h-[240px]"> {/* Ensure the height here matches the desired height for the image */}
                    <Image
                      src={item.url}
                      alt={item.name}
                      layout="fill"
                      className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="flex flex-col justify-between p-2 h-[160px]">
                    <h3 className="text-center text-[24px] leading-[30px] font-bold">{item.name}</h3>
                    <div className="flex flex-row justify-between items-center mb-2">
                      <span className="text-[20px] font-semibold">${item.price}</span>
                      <Button
                        className="bg-white rounded-full w-8 h-8 hover:bg-blue-500 hover:text-white"
                        variant="outline"
                      >
                        <FaCartPlus />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <Button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full flex items-center justify-center gradient-border w-12 h-12 p-0 bg-white text-gray-800"
          variant="outline"
          onClick={handlePrevious}
          aria-label="Previous"
        >
          <FaArrowLeft size={24} />
        </Button>
        <Button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full flex items-center justify-center gradient-border w-12 h-12 p-0 bg-white text-gray-800"
          variant="outline"
          onClick={handleNext}
          aria-label="Next"
        >
          <FaArrowRight size={24} />
        </Button>
      </div>
    </div>
  );
}
