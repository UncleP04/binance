import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Success from '../../public/Images/success.gif'
import SwitchButton from "./switch";

interface PopupModalProps {
  isOpen: boolean;
}

const PopupModal: React.FC<PopupModalProps> = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-60"></div>
      <div className="bg-dark p-8 rounded-md z-50 text-center flex flex-col">
            <Image 
                src={Success}
                alt="Success.gif"
                width={700}
                height={300}
                className="w-[200px] text-center self-center"
            />
        <h2 className="text-[2em] font-semibold mb-4 text-header">
          Account Successfully <br /> Created
        </h2>
        <div>
        <div className="text-[15px] text-header bg-black rounded-md p-4 flex gap-5">
          I agree to receive marketing updates from Binance.
          <SwitchButton />
        </div>
        <div className="py-3 my-4 px-4 w-[100%] bg-primary text-dark rounded-md text-center">
          <Link href="/dashboard">
            Done
          </Link>
        </div>
      </div>
      
      </div>
    </div>
  );
};

export default PopupModal;
