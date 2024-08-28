import { useState } from "react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

export default function SearchFilter() {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [selectedPrices, setSelectedPrices] = useState<string[]>([]);

  const handleProductChange = (product: string) => {
    setSelectedProducts((prev) =>
      prev.includes(product)
        ? prev.filter((item) => item !== product)
        : [...prev, product]
    );
  };

  const handlePriceChange = (price: string) => {
    setSelectedPrices((prev) =>
      prev.includes(price)
        ? prev.filter((item) => item !== price)
        : [...prev, price]
    );
  };

  const handleSubmit = () => {
    console.log("Selected Products:", selectedProducts);
    console.log("Selected Prices:", selectedPrices);
    // Handle filter logic here
  };

  return (
    <div className="flex flex-col space-y-4 p-4 border border-gray-300 shadow-lg">
      {/* Location */}
      <div className="flex flex-row w-full justify-between">
        <div className="flex flex-col w-1/3">
            <Label className="uppercase font-semibold text-[14px] leading-[20px]}">Within</Label>
            <select>
                <option>5</option>
                <option>10</option>
                <option>15</option>
                <option>25</option>
                <option>50</option>
            </select>    
        </div>
        <div className="flex flex-col w-1/2">
            <Label className="uppercase font-semibold text-[14px] leading-[20px]}">Miles of</Label>
            <Input></Input>
        </div>
      </div>
      {/* Products */}
        <h4>Products</h4>
        <ul>
            <li className="flex items-center">
                <Checkbox />
                <span className="ml-3">Fly Rods</span>
            </li>
            <li className="flex items-center">
                <Checkbox />
                <span className="ml-3">Spinning & Cast Rods</span>
            </li>
            <li className="flex items-center">
                <Checkbox />
                <span className="ml-3">Hooks</span>
            </li>
            <li className="flex items-center">
                <Checkbox />
                <span className="ml-3">Lures</span>
            </li>
            <li className="flex items-center">
                <Checkbox />
                <span className="ml-3">Live Bait</span>
            </li>
            <li className="flex items-center">
                <Checkbox />
                <span className="ml-3">Reels</span>
            </li>
        </ul>
      {/* Submit Button */}
      <Button onClick={handleSubmit} className="mt-4 bg-[#346eeb] text-white">
        Apply Filters
      </Button>
    </div>
  );
}
