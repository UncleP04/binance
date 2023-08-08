import React, { useState } from "react";
import {
  MdArrowCircleRight,
  MdFoodBank,
  MdCreditCard,
  MdAddCard,
} from "react-icons/md";

interface MessageProps {
  text: string;
}

const TradeModal: React.FC<MessageProps> = ({ text }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setShowModal(true);

    // Show the modal for 2 seconds
    setTimeout(() => {
      setShowModal(false);
    }, 3000);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setShowModal(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="text-header">{text}</button>

      {isHovered && (
        <div
          className={`absolute ${
            isHovered ? "block" : "hidden"
          } top-7 left-0 bg-modal shadow-lg p-4 w-[500px] rounded-lg`}
        >
          <div className={`mt-5 grid grid-cols-1 md:grid-cols-2 justify-center gap-5 items-center`}>
            <div>
              <div className="flex justify-start align-middle gap-5 p-2 rounded-md hover:bg-dark cursor-pointer">
                <MdFoodBank
                  size={30}
                  className="text-primaryhv self-center text-center"
                />
                <div className="flex flex-col justify-start">
                  <h3 className="text-header text-[15px]">Spot</h3>
                  <p className="text-[13px] text-text">
                    Debit Euro via SEPA or vise.
                  </p>
                </div>
              </div>
              <div className="flex justify-start align-middle gap-5 p-2 rounded-md hover:bg-dark cursor-pointer">
                <MdCreditCard
                  size={30}
                  className="text-primaryhv self-center text-center"
                />
                <div className="flex flex-col justify-start">
                  <h3 className="text-header text-[15px]">Margin</h3>
                  <p className="text-[13px] text-text">
                    But Crypto via, card, play google, apple
                  </p>
                </div>
              </div>
              <div className="flex justify-start align-middle gap-5 p-2 rounded-md hover:bg-dark cursor-pointer">
                <MdAddCard
                  size={30}
                  className="text-primaryhv self-center text-center"
                />
                <div className="flex flex-col justify-start">
                  <h3 className="text-header text-[15px]">P2P</h3>
                  <p className="text-[13px] text-text">
                    Buy crypto with your Euro balance.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-start align-middle gap-5 p-2 rounded-md hover:bg-dark cursor-pointer">
                <MdFoodBank
                  size={30}
                  className="text-primaryhv self-center text-center"
                />
                <div className="flex flex-col justify-start">
                  <h3 className="text-header text-[15px]">Convert</h3>
                  <p className="text-[13px] text-text">
                    Debit Euro via SEPA or vise.
                  </p>
                </div>
              </div>
              <div className="flex justify-start align-middle gap-5 p-2 rounded-md hover:bg-dark cursor-pointer">
                <MdCreditCard
                  size={30}
                  className="text-primaryhv self-center text-center"
                />
                <div className="flex flex-col justify-start">
                  <h3 className="text-header text-[15px]">Trading Bots</h3>
                  <p className="text-[13px] text-text">
                    But Crypto via, card, play google, apple
                  </p>
                </div>
              </div>
              <div className="flex justify-start align-middle gap-5 p-2 rounded-md hover:bg-dark cursor-pointer">
                <MdAddCard
                  size={30}
                  className="text-primaryhv self-center text-center"
                />
                <div className="flex flex-col justify-start">
                  <h3 className="text-header text-[15px]">Block Trading</h3>
                  <p className="text-[13px] text-text">
                    Buy crypto with your Euro balance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TradeModal;
