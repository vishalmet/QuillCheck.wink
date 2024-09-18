import React, { useState } from 'react';
import Assets from './Assets';

const SelectToken = ({ onCheckClick, setSelectedToken, setTokenAddress }) => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [inputValue, setInputValue] = useState(''); // New state for input value

  const handleButtonClick = (buttonIndex, token) => {
    setSelectedButton(buttonIndex);
    setSelectedToken(token); // Update the selected token in the parent
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setTokenAddress(e.target.value); // Pass the input value to the parent
  };

  return (
    <div
      className="bg-[#18162099]/60 rounded-[10px] backdrop-filter backdrop-blur-sm w-[460px] mx-auto p-[30px] jost"
      style={{ boxShadow: '4px 4px 12px rgba(0, 0, 0, 0.5)' }}
    >
      <p className="text-white text-4xl text-center">Evaluate Any Token</p>
      <div className="mt-6 space-y-4">
        <div className="flex justify-center space-x-6">
          {['ETH', 'BSC', 'Polygon', 'Base'].map((token, index) => (
            <button
              key={token}
              className={`px-4 py-2 rounded-md flex items-center text-sm gap-2 ${
                selectedButton === index + 1
                  ? 'bg-black text-white font-normal border border-black'
                  : 'border border-white text-white opacity-60 font-light hover:bg-black hover:opacity-100 hover:border-black'
              }`}
              onClick={() => handleButtonClick(index + 1, token)}
            >
              <img className="h-4" src={Assets[token]} alt={token} /> {token}
            </button>
          ))}
        </div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange} // Handle input change
          className="bg-white w-full h-12 rounded-[5px] text-black p-4"
          placeholder="Enter token address"
        />
        <div className="flex justify-end rounded-[20px]">
          <button
            onClick={onCheckClick}
            className="bg-[#007AFF] hover:bg-[#007AFF]/70 rounded-[5px] text-white p-2 px-6 ml-auto text-xl border-y border-y-[#86AFFF]"
          >
            Check
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectToken;
