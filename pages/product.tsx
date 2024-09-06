import Head from "next/head";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ImageCarousel from "@/components/ImageCarousel";

export default function Product() {
    const images = [
        "https://i.postimg.cc/L6Mz6ZZR/spinning-rod-1.png",
        "https://i.postimg.cc/Jzg1Qj8B/spinning-rod-2.png",
        "https://i.postimg.cc/SKWwz9x4/spinning-rod-3.png",
        "https://i.postimg.cc/gkFt3J1k/spinning-rod-4.jpg",
        "https://i.postimg.cc/kg8nfBg1/spinning-rod-5.png",
        "https://i.postimg.cc/SxzWd79B/spinning-rod-6.jpg"
    ]

    const similar = [
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
    
    return (
      <>
        <Head>
          <title>Product | Cast Legend</title>
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
        <div className="flex flex-col items-center">
          <h1>Super Spin Rod</h1>
          <Image src={images[0]} alt="placeholder" width={500} height={500} />
          <ImageCarousel images={images} />
          <span>$199.99</span>
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Product Name</td>
                <td>Super Spin Rod</td>
              </tr>
              <tr>
                <td>Length</td>
                <td>7'6"</td>
              </tr>
              <tr>
                <td>Line Weight</td>
                <td>10-20 lb</td>
              </tr>
              <tr>
                <td>Lure Weight</td>
                <td>1/16 - 5/8 oz.</td>
              </tr>
              <tr>
                <td>Rod Weight</td>
                <td>4.7 oz</td>
              </tr>
              <tr>
                <td>Pieces</td>
                <td>2</td>
              </tr>
            </tbody>
          </table>
          <section>
            <p>
              The Super Spin Rod is designed for the avid angler who seeks
              precision, strength, and sensitivity. With a 7-foot length and a
              10-20 lb line weight capacity, this rod is perfect for both fresh
              and saltwater fishing. The high-quality graphite construction
              ensures durability, while the ergonomic handle offers comfort
              during long fishing sessions.
            </p>
          </section>
          <Button className="uppercase bg-black text-white">Add to Cart</Button>
          <div>
            <h3>Similar Products</h3>

          </div>
        </div>
      </>
    );
}