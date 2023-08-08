"use client";
import React, { useState } from "react";
import {
  MdHome,
  MdSecurity,
  MdPermIdentity,
  MdPayments,
  MdPerson2,
  MdPriceChange,
  MdManageAccounts,
  MdAccountCircle,
  MdSettings,
} from "react-icons/md";
import Image from "next/image";
import Logo from "../../public/Images/single.png";
import "../styles/styles.css";
import Link from "next/link";

interface SideMenu {
  title: string;
  icon: JSX.Element;
  path: string;
}

interface SideMenuProps {
  list: SideMenu[];
}

const Sidebar: React.FC<SideMenuProps> = ({ list }) => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const SideList: SideMenu[] = [
    {
      title: "Dashboard",
      icon: <MdHome />,
      path: "/",
    },
    {
      title: "security",
      icon: <MdSecurity />,
      path: "/library",
    },
    {
      title: "Identification",
      icon: <MdPermIdentity />,
      path: "/analysis",
    },
    {
      title: "Payments",
      icon: <MdPayments />,
      path: "/account",
    },
    {
        title: "Referral",
        icon: <MdPerson2 />,
        path: "/",
      },
      {
        title: "Reward Hub",
        icon: <MdPriceChange />,
        path: "/library",
      },
      {
        title: "API Management",
        icon: <MdManageAccounts />,
        path: "/analysis",
      },
      {
        title: "Sub Account",
        icon: <MdAccountCircle />,
        path: "/account",
      },    
      {
        title: "Settings",
        icon: <MdSettings />,
        path: "/account",
      },
  ];

  return (
    <div className="relative w-[100%] hidden lg:block">
      <section
        className={`background h-screen duration-300 ${
          hovered ? "w-60" : "w-[70px]"
        } p-3 pt-[25px]`}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        <span className="flex flex-row justify-start align-start">
          <Image
            src={Logo}
            alt="logo.png"
            width={300}
            height={200}
            className="w-[50px] block float-left h-[30px]"
          />
          <h1
            className={`mt-[-3px] flex justify-center align-middle text-center uppercase text-primary font-semibold text-[1.5em] pl-2 ${
              hovered ? "scale-100" : "scale-0"
            } duration-100`}
          >
            binance
          </h1>
        </span>
        <ul
          className={`${
            hovered ? "mt-[40px]" : "mt-[40px]"
          } flex flex-col justify-start align-start items-start gap-[10px]`}
        >
          {list.map((item, i) => (
            <li key={i} className="flex w-[100%] justify-start align-middle">
              <span className="py-2 ml-2 text-[25px] text-primary">{item.icon}</span>
              <Link
                className={`px-2 py-2 text-[15px] rounded text-header hover:bg-text hover:text-header w-[80%] ${
                  hovered ? "scale-100 ml-[5px] cursor-pointer" : "scale-0"
                } duration-100`}
                href={item.path}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Sidebar;
