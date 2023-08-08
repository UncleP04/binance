import React, { useState } from 'react';
import { MdPriceCheck, MdDataArray } from 'react-icons/md';

interface MessageProps {
    text: string;
  }

const MarketModal: React.FC<MessageProps>= ({text}) => {
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
      <button className="text-header">
        {text}
      </button>

      {isHovered && (
        <div className={`absolute ${isHovered ? 'block' : 'hidden'} top-7 left-0 bg-modal shadow-lg p-4 w-[280px] rounded-lg`}>
            <div className={`mt-5 flex justify-start gap-5 flex-col`}>
                <div className='flex justify-start align-middle gap-5 p-2 rounded-md hover:bg-dark cursor-pointer'>
                    <MdPriceCheck size={30} className='text-primaryhv self-center text-center' />
                    <div className='flex flex-col justify-start'>
                        <h3 className='text-header text-[15px]'>Market Overview</h3>
                        <p className='text-[13px] text-text'>Overview of the crypto market with real time and price index</p>
                    </div>
                </div>
                <div className='flex justify-start align-middle gap-5 p-2 rounded-md hover:bg-dark cursor-pointer'>
                    <MdDataArray size={30} className='text-primaryhv self-center text-center' />
                    <div className='flex flex-col justify-start'>
                        <h3 className='text-header text-[15px]'>Trading Data</h3>
                        <p className='text-[13px] text-text'>View top market movers and Price performance</p>
                    </div>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default MarketModal;
