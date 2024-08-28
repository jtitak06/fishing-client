import { IoFishOutline } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import PathConstants from "@/routes/PathConstants";

export function Footer() {
    return (
        <footer className="py-[40px]">
            <div className="flex items-center justify-center gap-x-[12px]">
                <IoFishOutline />
                <span className="font-bold text-[16px]">Cast Legend</span>
            </div>
            <ul className="grid grid-cols-2 gap-x-[16px] gap-y-[32px] pt-[56px] md:grid-cols-4">
                <li className="flex items-center justify-center">
                    <Link href={PathConstants.ABOUT}>
                      About
                    </Link>
                </li>
                <li className="flex items-center justify-center">
                    <Link href={PathConstants.MARKETPLACE}>
                        Marketplace
                    </Link>
                </li>
                <li className="flex items-center justify-center">
                    <Link href="/charters">
                        Charters
                    </Link>
                </li>
                <li className="flex items-center justify-center">
                    <Link href="/catch-of-the-day">
                        Catch of the Day
                    </Link>
                </li>
                <li className="flex items-center justify-center">
                    <Link href="/fishin-buddy">
                        Fishin&apos; Buddy
                    </Link>
                </li>
                <li className="flex items-center justify-center">
                    <Link href="/terms-of-use">
                        Terms of Use
                    </Link>
                </li>
                <li className="flex items-center justify-center">
                    <Link href="/privacy-policy">
                        Privacy Policy
                    </Link>
                </li>
                <li className="flex items-center justify-center">
                    <Link href="/contact-us">
                        Contact Us
                    </Link>
                </li>
            </ul>
            <div className="md:flex md:flex-row md:justify-between items-center px-[32px]">
                <p className="pt-[56px] text-center text-[14px] font-medium text-[#5F7896] md:pt-5">© Copyright 2025. Cast Legend. All rights reserved</p>
                <div className="flex items-center justify-center gap-x-[56px] pt-[40px] md:pt-5">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                </div>
            </div>
        </footer>
    );
}
