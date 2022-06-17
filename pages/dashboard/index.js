import React, { useState, useRef, useEffect } from "react";
import Layout from "../../components/Layout";
import MasterCard from "../../components/MasterCard";
import IconInput from "../../components/Input/IconInput";
import { BsSearch } from "react-icons/bs";
import { BsCreditCard2Back } from "react-icons/bs";
import { FaMobileAlt } from "react-icons/fa";
import { IoMdExit } from "react-icons/io";
import { BiBell } from "react-icons/bi";
import { BsCalendar3 } from "react-icons/bs";
import { MdPayments } from "react-icons/md";
import { SiMastercard } from "react-icons/si";
import User from "../../assets/images/yuvraj.jpg";
import Us from "../../assets/images/us.png";
import Image from "next/image";
import { GiChart } from "react-icons/gi";
import { FiDollarSign } from "react-icons/fi";
import { BiSortAlt2 } from "react-icons/bi";
function Dashboard() {
  // const [isOpen, setOpen] = useState(false);
  // const [coordinate, setCoordinate] = useState({ left: 0, top: 0 });
  // const iconRef = useRef(null);
  // function modalHandler() {
  //   const rect = iconRef.current.getBoundingClientRect();
  //   setCoordinate({ left: rect.x-10, top: 0 });
  //   setOpen((isPrev) => !isPrev);
  // }

  const balanceCardInfo = [
    {
      icon: <BsCreditCard2Back size={35} className="text-black" />,
      desc: "Transfer amount via<br/>  Card number",
      total: "&#8377;1000",
    },
    {
      icon: <FaMobileAlt size={35} className="text-black" />,
      desc: "Transfer amount via <br/> FonePay",
      total: "&#8377;1000",
    },
    {
      icon: <MdPayments size={35} className="text-black" />,
      desc: "Transfer amount via <br/> Esewa",
      total: "&#8377;1000",
    },
  ];
  const productCardInfo = [
    [
      {
        title: "Sales",
        desc: `Sale has increased <br /> by 60&#37; and today amounts <br /> in
        total of:`,
        total: `60&#37;`,
        color: "bg-lightRed",
        per: "60&#37;",
      },
      {
        title: "Orders",
        desc: "Orders has increased <br /> by 55&#37; and today amounts <br /> in total of:",
        total: "&#8377;6000",
        per: "55&#37;",
        color: "bg-lightGreen",
      },
    ],
    [
      {
        title: "Profit",
        desc: "Profit from today sales <br />  has resulted <br />  in total of:",
        total: "50&#37;",
        per: "50&#37;",
        color: "bg-lightYellow",
      },
      {
        title: "Visits",
        desc: "Todal number of <br />  people today visited <br />  in website is:",
        total: "&#8377;6000",
        per: "50&#37;",
        color: "bg-lightBlue",
      },
    ],
  ];
  const companyInfo = [
    {
      title: "Total Sales",
      icon: <GiChart size={25} className="text-black" />,
      total: "&#8377;230k",
    },
    {
      title: "Total Orders",
      icon: <GiChart size={25} className="text-black" />,
      total: "500k",
    },
    {
      title: "Total Revenue",
      icon: <FiDollarSign size={25} className="text-black" />,
      total: "&#8377;230k",
    },
    {
      title: "Total Customers",
      icon: <BiBell size={25} className="text-black" />,
      total: "500k",
    },
    {
      title: "Total Products",
      icon: <BsCalendar3 size={25} className="text-black" />,
      total: "&#8377;230k",
    },
  ];
  return (
    <Layout className="flex flex-row relative w-full ">
      <div className="pt-4 pl-5 w-70% overflow-y-scroll">
        {/* Top */}
        <div className="flex flex-row justify-between pr-5 ">
          <div>
            <h1 className="font-openSans font-bold text-3xl">Dashboard</h1>
            <p className="font-light font-openSans">Balance Updates</p>
          </div>
          <IconInput
            icon={BsSearch}
            className="bg-white outline-0 text-black pl-7 w-full h-8 rounded-lg"
          />
        </div>
        {/* Balance Cards */}
        <div className="flex flex-row justify-between mt-5 pr-5">
          {balanceCardInfo.map((balanceCardInfo) => (
            <BalanceCards balanceCardInfo={balanceCardInfo} />
          ))}
        </div>
        {/* Product Cards */}
        <div className="relative top-4 pr-5 w-20%">
          <div className="flex flex-row justify-between items-center">
            <p className="font-light  font-openSans ">Product Updates</p>
            <BiSortAlt2 className="font-thin cursor-pointer" />
          </div>
        </div>

        <div className="w-full flex flex-row justify-between  pr-5 mt-5">
          {productCardInfo.map((card, index) => {
            const divStyleWithIndex = index === 0 ? "mr-4 mt-6" : "ml-4";

            return (
              <ProductCardInfo
                card={card}
                index={index}
                divStyleWithIndex={divStyleWithIndex}
              />
            );
          })}
        </div>
      </div>
      {/* Right Side Pannel */}
      <div className="h-screen w-30% ">
        <div className="h-full w-95% p-2 pt-4  bg-darkPink">
          <div className="flex flex-row justify-center items-center p-2">
            <BsCalendar3 size={25} className="cursor-pointer opacity-60" />
            <BiBell size={27} className="ml-4 cursor-pointer opacity-60" />
            <div className="ml-4 cursor-pointer">
              <Image
                className="inline-block rounded-full "
                src={User}
                height={50}
                objectFit="cover"
                width={50}
                alt="user"
              />
            </div>
            <div className="ml-4 cursor-pointer relative top-1">
              <Image
                className="inline-block rounded-full  "
                src={Us}
                height={25}
                width={25}
                objectFit="cover"
                alt="us"
              />
            </div>

            <IoMdExit size={27} className="ml-4 cursor-pointer opacity-60" />
          </div>
          {/* MasterCard */}
          <div className="pt-4 ">
            <MasterCard
              cardBank={"Prabhu Bank"}
              cardBrand={"MasterCard"}
              cardHolder={"Mr.Yuvraj Dahal"}
              cardIcon={SiMastercard}
              cardType={"Debit"}
              cardNumber={"456 123 456 789 123"}
            />
          </div>
          {/* Company Info */}
          <div className="w-full  mt-5  overflow-y-scroll flex flex-col justify-center items-center ">
            <div className="w-3/5  flex flex-col justify-center items-center ">
              {companyInfo?.map((item, index) => (
                <CompanyInfoCards item={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
const BalanceCards = ({ balanceCardInfo, index }) => {
  return (
    <div
      className="w-52 shadow-card h-48 rounded-lg bg-white p-4 cursor-pointer "
      key={index}
    >
      {balanceCardInfo.icon}
      <p
        className="font-light font-openSans pb-2 pt-2.5"
        dangerouslySetInnerHTML={{ __html: balanceCardInfo.desc }}
      ></p>
      <p
        className="font-bold font-openSans text-2xl"
        dangerouslySetInnerHTML={{ __html: balanceCardInfo.total }}
      ></p>
    </div>
  );
};
const ProductCardInfo = ({ card, index, divStyleWithIndex }) => (
  <div className={`w-full ${divStyleWithIndex}`} key={index}>
    {card.map((cardItem, index) => {
      return (
        <div
          key={index}
          className={`w-full shadow-card h-48 ${cardItem.color} rounded-lg  p-4 mb-4`}
        >
          <p
            className="font-openSans font-bold text-xl pb-2"
            dangerouslySetInnerHTML={{ __html: cardItem.title }}
          ></p>
          <p
            className="font-light font-openSans pb-2"
            dangerouslySetInnerHTML={{ __html: cardItem.desc }}
          ></p>
          <p
            className="font-bold font-openSans text-2xl"
            dangerouslySetInnerHTML={{ __html: cardItem.total }}
          ></p>
        </div>
      );
    })}
  </div>
);
const CompanyInfoCards = ({ item, index }) => {
  return (
    <div
      className="w-full flex flex-row justify-between items-center mb-4"
      key={index}
    >
      <div className="h-12 w-12 rounded-full bg-pinkWhite flex justify-center items-center">
        {item.icon}
      </div>
      <div className="h-8 flex flex-col justify-between items-end">
        <p className="font-openSans font-thin text-black text-xs ">
          {item.title}
        </p>
        <p
          className="text-2sm font-bold font-open-Sans "
          dangerouslySetInnerHTML={{ __html: item.total }}
        ></p>
      </div>
    </div>
  );
};
