import React, { useState } from 'react';
import { MdArrowCircleRight, MdFoodBank, MdCreditCard, MdAddCard } from 'react-icons/md';

interface MessageProps {
    text: string;
  }

const CryptoModal: React.FC<MessageProps>= ({text}) => {
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
            <div className='flex justify-between items-center gap-10 w-[100%] shadow-md pb-2'>
                <p className='text-header'>Pay With</p>
                <span className='text-header flex justify-between items-center'>Euro <MdArrowCircleRight size={20} className='text-primaryhv' /></span>
            </div>
            <div className={`mt-5 flex justify-start gap-5 flex-col`}>
                <div className='flex justify-start align-middle gap-5 p-2 rounded-md hover:bg-dark cursor-pointer'>
                    <MdFoodBank size={30} className='text-primaryhv self-center text-center' />
                    <div className='flex flex-col justify-start'>
                        <h3 className='text-header text-[15px]'>Bank deposit</h3>
                        <p className='text-[13px] text-text'>Debit Euro via SEPA or vise.</p>
                    </div>
                </div>
                <div className='flex justify-start align-middle gap-5 p-2 rounded-md hover:bg-dark cursor-pointer'>
                    <MdCreditCard size={30} className='text-primaryhv self-center text-center' />
                    <div className='flex flex-col justify-start'>
                        <h3 className='text-header text-[15px]'>Credit/Debit card</h3>
                        <p className='text-[13px] text-text'>But Crypto via, card, play google, apple</p>
                    </div>
                </div>
                <div className='flex justify-start align-middle gap-5 p-2 rounded-md hover:bg-dark cursor-pointer'>
                    <MdAddCard size={30} className='text-primaryhv self-center text-center' />
                    <div className='flex flex-col justify-start'>
                        <h3 className='text-header text-[15px]'>Card Balance</h3>
                        <p className='text-[13px] text-text'>Buy crypto with your Euro balance.</p>
                    </div>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default CryptoModal;
