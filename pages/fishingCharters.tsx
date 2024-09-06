import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import MapImage from "../images/map.png";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function FishingCharters() {
  const [searchQuery, setSearchQuery] = useState("");
  const [view, setView] = useState("list"); // 'list' or 'map'

  const handleSearchChange = (e: any) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: any) => {
    e.preventDefault();
    // Handle search logic here
    console.log("Searching for:", searchQuery);
  };

  return (
    <>
      <Head>
        <title>Fishing Charters | Cast Legend</title>
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

      <div className="max-w-2xl mx-auto p-4">
        {/* Search Field */}
        <form onSubmit={handleSearchSubmit} className="flex items-center mb-4">
          <Input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search for charters..."
            className="flex-grow mr-2"
          />
          <Button type="submit" className="px-4 py-2">
            Enter
          </Button>
        </form>

        {/* View Toggle Buttons */}
        <div className="flex justify-end mb-4">
          <Button
            onClick={() => setView("list")}
            className={`mr-2 ${view === "list" ? "bg-blue-500" : "bg-gray-300"}`}
          >
            List View
          </Button>
          <Button
            onClick={() => setView("map")}
            className={`${view === "map" ? "bg-blue-500" : "bg-gray-300"}`}
          >
            Map View
          </Button>
        </div>

        {/* List View */}
        {view === "list" && (
          <div className="space-y-4">
            {/* Dummy Card Information */}
            <Card className="p-4 shadow-lg">
              <h2 className="text-xl font-semibold mb-2">Charter Name 1</h2>
              <p>Location: Miami, FL</p>
              <p>Description: A great fishing experience in Miami.</p>
            </Card>
            <Card className="p-4 shadow-lg">
              <h2 className="text-xl font-semibold mb-2">Charter Name 2</h2>
              <p>Location: Key West, FL</p>
              <p>Description: Explore the waters of Key West.</p>
            </Card>
            <Card className="p-4 shadow-lg">
              <h2 className="text-xl font-semibold mb-2">Charter Name 3</h2>
              <p>Location: Tampa, FL</p>
              <p>Description: Enjoy a day of fishing in Tampa Bay.</p>
            </Card>
          </div>
        )}

        {/* Map View */}
        {view === "map" && (
          <div className="flex justify-center">
            <Image src={MapImage} alt="Map" className="w-full max-w-xl" />
          </div>
        )}
      </div>
    </>
  );
}
