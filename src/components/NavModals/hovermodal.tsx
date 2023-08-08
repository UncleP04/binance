
import React, { useState } from 'react';
interface MessageProps {
    text: string;
  }

const HoverModal: React.FC<MessageProps>= ({text}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
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
        <div className="absolute top-10 right-0 bg-text shadow-lg p-4">
          This is the modal content.
        </div>
      )}
    </div>
  );
};

export default HoverModal;
