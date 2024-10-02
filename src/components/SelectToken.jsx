import React, { useState } from 'react';
import Assets from './Assets';

const SelectToken = ({ onCheckClick, setSelectedToken, setTokenAddress, setChainId, empty, setempty, buttonclick, setButtonclick }) => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const tokenChainMap = {
    ETH: 1,
    BSC: 56,
    Polygon: 137,
    Base: 8453,
  };

  const handleButtonClick = (buttonIndex, token) => {
    setSelectedButton(buttonIndex);
    setSelectedToken(token);
    setChainId(tokenChainMap[token]); // Set the chainId based on the selected token
    setButtonclick(false)
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setTokenAddress(e.target.value); // Update token address
    setempty(false)
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
              className={`px-4 py-2 rounded-md flex items-center text-sm gap-2 ${selectedButton === index + 1
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
          onChange={handleInputChange}
          className="bg-white w-full h-12 rounded-[5px] text-black p-4"
          placeholder="Enter token address"
        />
        {empty && <div className='flex justify-center items-center text-red-500 '> Enter Valid Token address </div>}
        {buttonclick && <div className='flex justify-center items-center text-red-500 '> Select the chain </div>}
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
