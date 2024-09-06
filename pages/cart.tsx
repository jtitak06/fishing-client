import Head from "next/head";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MdDelete } from "react-icons/md";

export default function Cart() {
    const list = [
        {
            name: "Fenwick Amazing Spin Rod",
            image: "https://i.postimg.cc/Jzg1Qj8B/spinning-rod-2.png",
            price: 249.99
        },
        {
            name: "Super Duper Amazing Spin Rod",
            image: "https://i.postimg.cc/SKWwz9x4/spinning-rod-3.png",
            price: 349.99
        },
        {
            name: "Cheap Spin Rod on Clearance Going Fast Buy Now Must Have",
            image: "https://i.postimg.cc/L6Mz6ZZR/spinning-rod-1.png",
            price: 49.99
        }
    ]

    const totalPrice = list.reduce((total, item) => total + item.price, 0);

    return (
      <>
        <Head>
          <title>Cart | Cast Legend</title>
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
        <h1 className="text-center">Cart</h1>
        <ul>
            {list.map((item, i) => {
                return(
                    <Card
                    key={i}
                    className="flex items-center h-full border p-4 rounded shadow-lg"
                  >
                    <div className="relative w-24 h-24 mr-4">
                      <Image
                        src={item.image}
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
                          className="bg-white rounded-full w-8 h-8 hover:bg-red-500 hover:text-white"
                          variant="outline"
                        >
                          <MdDelete />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )
            })}
        </ul>
        <div>
            <span>Total:{" "}</span>
            <span>${totalPrice}</span>
        </div>
      </>
    );
}