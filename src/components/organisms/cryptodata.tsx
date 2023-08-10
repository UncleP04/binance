import React, { JSXElementConstructor, useState } from "react";
import CryptoModal from "../molecules/cyrptoModal";
import {
  MdFoodBank,
  MdCreditCard,
  MdArrowRight,
  MdAddCard,
} from "react-icons/md";
import styled from "styled-components";
import {
  HoverContainer,
  HoverContent,
  Button,
  Heading,
  PaymentGrid,
  Thumbnail,
} from "../atoms/index";

interface CryptoInterface {
  name: string;
  text: string;
  thumbnail: React.ReactElement;
}

const CryptoData: React.FC<CryptoInterface> = () => {
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
  const CryptoArray: CryptoInterface[] = [
    {
      name: "Bank deposit",
      text: "Debit Euro via SEPA or vise.",
      thumbnail: <MdFoodBank />,
    },
    {
      name: "Credit/Debit card",
      text: "But Crypto via, card, play google, apple",
      thumbnail: <MdCreditCard />,
    },
    {
      name: "Card Balance",
      text: "Buy crypto with your Euro balance.",
      thumbnail: <MdAddCard />,
    },
  ];

  const ModalBox = styled.div`
    padding: 10px 0;
  `;

  return (
    <div>
      <HoverContainer
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Button>Crypto</Button>
        <HoverContent className={isHovered ? "hover-content" : ""}>
          <PaymentGrid className="shadow-md">
            <Heading>Pay With</Heading>
            <Heading className={`flex justify-center items-center`}>
              Euro
              <Thumbnail>
                <MdArrowRight size={20} />
              </Thumbnail>
            </Heading>
          </PaymentGrid>
          <ModalBox>
            {CryptoArray.map((crypto, index) => (
              <CryptoModal
                key={index}
                name={crypto.name}
                text={crypto.text}
                thumbnail={crypto.thumbnail}
              />
            ))}
          </ModalBox>
        </HoverContent>
      </HoverContainer>
    </div>
  );
};

export default CryptoData;
