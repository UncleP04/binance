import React, { useState } from 'react';

const SwitchButton: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          className="hidden"
          checked={isChecked}
          onChange={handleToggle}
        />
        <div
          className={`toggle__line w-8 h-5 rounded-full shadow-inner ${
            isChecked ? 'bg-primary' : 'bg-gray-400'
          } transition-background-color`}
        ></div>
        <div
          className={`toggle__dot absolute w-5 h-auto bg-white rounded-full shadow inset-y-0 ${
            isChecked ? 'right-0' : 'left-0'
          } transition-transform duration-300`}
        ></div>
      </div>
      {/* <div className="ml-3 text-gray-700">{isChecked ? 'On' : 'Off'}</div> */}
    </label>
  );
};

export default SwitchButton;
