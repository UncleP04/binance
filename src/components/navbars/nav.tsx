import Image from "next/image";
import React from "react";
import Logo from "../../public/Images/remove.png";
import LanguageIcon from '@mui/icons-material/Language';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

const Nav: React.FC = () => {
  return (
    <div>
      <section className="w-[100%]bg-dark">
        <section className="w-[100%] flex justify-between items-center px-[4%]">
          <div className="">
            <div className="w-[130px]">
              <Image
                src={Logo}
                alt="logo.png"
                width={700}
                height={300}
                className="w-[100%] h-[100%]"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <LanguageIcon className="text-text" />
            <WbSunnyIcon className="text-primary" />
          </div>
        </section>
      </section>
    </div>
  );
};

export default Nav;
