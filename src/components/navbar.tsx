import React, { useState } from "react";
import HoverModal from "./NavModals/hovermodal";
import CryptoModal from "./NavModals/cryptomodal";
import MarketModal from "./NavModals/markets";
import TradeModal from "./NavModals/trademodal";
import DeriveModal from "./NavModals/derivemodal";
import { MdArrowUpward, MdSearch } from "react-icons/md";
import FinanceModal from "./NavModals/financemodal";
import WebModal from "./NavModals/webmodal";
import LanguageIcon from "@mui/icons-material/Language";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { MdNotifications } from "react-icons/md";
import { useRouter } from "next/router";
import Image from "next/image";
import { auth } from "./firebase";
import CryptoData from "./organisms/cryptodata";

const Navbar: React.FC = () => {
  const router = useRouter();
  const { displayName, profileURL } = useRouter().query;
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const handleMouseEnter = (item: string) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div>
      <section className="w-[100%] grid grid-cols-2 justify-between align-middle items-center px-[2%] shadow-md">
        <div>
          <ul className="flex justify-center items-center gap-5">
            <li
              className="flex justify-center items-center text-[15px] py-4"
              onMouseEnter={() => handleMouseEnter("Crypto")}
              onMouseLeave={handleMouseLeave}
            >
              <CryptoData />
              <MdArrowUpward
                size={20}
                className={`text-text ${
                  hoveredItem === "Crypto" ? "rotate-180" : "rotate-0"
                }`}
              />
            </li>
            <li
              className="flex justify-center items-center text-[15px] py-4"
              onMouseEnter={() => handleMouseEnter("Market")}
              onMouseLeave={handleMouseLeave}
            >
              <MarketModal text="Market" />
              <MdArrowUpward
                size={20}
                className={`text-text ${
                  hoveredItem === "Market" ? "rotate-180" : "rotate-0"
                }`}
              />
            </li>
            <li
              className="flex justify-center items-center text-[15px] py-4"
              onMouseEnter={() => handleMouseEnter("Trade")}
              onMouseLeave={handleMouseLeave}
            >
              <TradeModal text="Trade" />
              <MdArrowUpward
                size={20}
                className={`text-text ${
                  hoveredItem === "Trade" ? "rotate-180" : "rotate-0"
                }`}
              />
            </li>
            <li
              className="flex justify-center items-center text-[15px] py-4"
              onMouseEnter={() => handleMouseEnter("Derivatives")}
              onMouseLeave={handleMouseLeave}
            >
              <DeriveModal text="Derivatives" />
              <MdArrowUpward
                size={20}
                className={`text-text ${
                  hoveredItem === "Derivatives" ? "rotate-180" : "rotate-0"
                }`}
              />
            </li>
            <li
              className="flex justify-center items-center text-[15px] py-4"
              onMouseEnter={() => handleMouseEnter("Finance")}
              onMouseLeave={handleMouseLeave}
            >
              <FinanceModal text="Finance" />
              <MdArrowUpward
                size={20}
                className={`text-text ${
                  hoveredItem === "Finance" ? "rotate-180" : "rotate-0"
                }`}
              />
            </li>
            <li
              className="flex justify-center items-center text-[15px] py-4"
              onMouseEnter={() => handleMouseEnter("More")}
              onMouseLeave={handleMouseLeave}
            >
              <WebModal text="More" />
              <MdArrowUpward
                size={20}
                className={`text-text ${
                  hoveredItem === "More" ? "rotate-180" : "rotate-0"
                }`}
              />
            </li>
            {/* <li
              className="flex justify-center items-center text-[15px] py-4"
              onMouseEnter={() => handleMouseEnter("Categories")}
              onMouseLeave={handleMouseLeave}
            >
              <HoverModal text="Categories" />
              <MdArrowUpward
                size={20}
                className={`text-text ${
                  hoveredItem === "Categories" ? "rotate-180" : "rotate-0"
                }`}
              />
            </li> */}
          </ul>
        </div>
        <div className="float-right">
          <ul className="flex justify-center items-center self-center gap-5 float-right mr-10">
            <li className="">
              <button>
                <MdSearch
                  size={30}
                  className="text-header hover:text-primary"
                />
              </button>
            </li>
            <li className="">
              <button className="py-2 px-4 rounded-md bg-primary hover:bg-primaryhv text-dark">
                Deposit
              </button>
            </li>
            <li className="">
              <button>
                <MdNotifications size={30} className="text-primaryhv" />
              </button>
            </li>
            {/* <li>
              <div onClick={() => auth.signOut()}>
                <p className="text-header">{displayName}</p>
                {profileURL && (
                  <Image
                    src={profileURL as string}
                    alt="Profile.png"
                    width={700}
                    height={300}
                    className="w-[150px] h-[150px] rounded-full border border-text"
                    priority
                  />
                )}
              </div>
            </li> */}
            <li className="">
              <div className="flex gap-4">
                <LanguageIcon className="text-text" />
                <WbSunnyIcon className="text-primary" />
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
