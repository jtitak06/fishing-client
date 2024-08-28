import PathConstants from "@/routes/PathConstants";
import { IoFishOutline, IoMenu } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import Link from "next/link";
import { Button } from "./ui/button";

export function Navbar() {
  type NavLink = {
    name: string;
    href: string;
  };

  const navLinks: NavLink[] = [
    { name: "Marketplace", href: PathConstants.MARKETPLACE },
    { name: "Fishin' Buddy", href: PathConstants.FISHIN_BUDDY },
    { name: "Catch of the Day", href: PathConstants.CATCH_OF_THE_DAY },
    { name: "Charters", href: PathConstants.CHARTERS }
  ];

  return (
    <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20">
      <div className="flex items-center">
        <Link
          href={PathConstants.HOME}
          className="h-5 hover:opacity-60 transition-opacity duration-300"
        >
          <IoFishOutline className="h-5 w-5" />
        </Link>
        <div className="hidden lg:flex font-medium pl-[34px] gap-x-[16px]">
          {navLinks.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="font-medium text-[14px] leading-[20px] hover:opacity-60 transition-opacity duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex gap-x-5">
        <Link
          href={PathConstants.SIGN_UP}
          className="h-5 flex items-center hover:opacity-60 transition-opacity duration-300"
        >
          <FaPenToSquare className="lg:mr-2 h-5 w-5" />
          <span className="hidden lg:inline font-medium text-[14px] leading-[20px]">
            Sign Up
          </span>
        </Link>

        <Link
          href={PathConstants.LOGIN}
          className="h-5 flex items-center hover:opacity-60 transition-opacity duration-300"
        >
          <FaUserCircle className="lg:mr-2 h-5 w-5" />
          <span className="hidden lg:inline font-medium text-[14px] leading-[20px]">
            Log In
          </span>
        </Link>
        <Button className="h-5 hover:opacity-60 transition-opacity duration-300 lg:hidden">
          <IoMenu className="h-5 w-5" />
        </Button>
      </div>
    </nav>
  );
}