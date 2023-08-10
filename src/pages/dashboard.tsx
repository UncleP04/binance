import React from "react";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbars/navbar";
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

const Dashboard: React.FC = () => {
  const sideMenuList = [
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
    <section className="relative w-full h-[100%] overflow-hidden">
      <div className="flex flex-row relative w-[100%] mb-[30%] md:mb-0">
        <div className="hidden md:block">
          <Sidebar list={sideMenuList} />
        </div>
        <div className="w-[100%] flex flex-col justify-between align-middle h-[100vh]">
          <div className="flex flex-col w-[100%]">
            <Navbar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
