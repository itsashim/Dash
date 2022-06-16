import React from "react";
import Image from "next/image";
import HamburgerSvg from "../assets/icons/hamburger.svg";
import { AiOutlineHome } from "react-icons/ai";
import { BsCalendarCheck } from "react-icons/bs";
import { FaChartArea } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi";
import { FaJediOrder } from "react-icons/fa";
import Link from "next/link";
// import { GiChart } from "react-icons/gi";
// import { FiDollarSign } from "react-icons/fi";
function SideNav() {
  const Hamburger = ({ size = 30 }) => (
    <Image src={HamburgerSvg} alt="order" height={size} width={size} />
  );
  const links = [
    {
      link: "/dashboard",
      icon: <AiOutlineHome className="color-black" size={22} />,
      text: "Dashboard",
    },
    {
      link: "/calendar",
      icon: (
        <BsCalendarCheck
          className="color-black opacity-60 hover:opacity-100"
          size={20}
        />
      ),
      text: "Calendar",
    },
    {
      link: "/charts",
      icon: (
        <FaChartArea
          size={20}
          className="color-black opacity-60 hover:opacity-100"
        />
      ),
      text: "Charts",
    },
    {
      link: "/users",
      icon: (
        <HiOutlineUserGroup
          size={23}
          className="color-black opacity-60 hover:opacity-100"
        />
      ),
      text: "Users",
    },
    {
      link: "/orders",
      icon: (
        <FaJediOrder
          size={25}
          className="color-black opacity-60 hover:opacity-100"
        />
      ),
      text: "Orders",
    },
  ];
  return (
    <div className="h-screen w-full flex flex-col items-center pt-8 bg-darkPink">
      <div className="cursor-pointer">
        <Hamburger />
      </div>
      <div className="mt-12">
        {links.map((link, index) => (
          <div
            key={index}
            title={link.text}
            className="flex w-full flex-col items-center justify-center p-4 cursor-pointer "
          >
            <Link href={link.link}>
              <a>{link.icon}</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
