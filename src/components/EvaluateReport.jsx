import React from 'react';
import Assets from './Assets';
import Status from './Evaluate/Status';
import Report from './Evaluate/Report';
import Info from './Evaluate/Info';

const EvaluateReport = ({ onBackClick, selectedToken, tokenAddress }) => {
  // Map tokens to corresponding asset images
  const tokenImages = {
    ETH: Assets.ETH,    
    BSC: Assets.BSC,    
    Polygon: Assets.Polygon, 
    Base: Assets.Base,
  };

  return (
    <div
      className="bg-[#18162099]/60 rounded-[10px] backdrop-filter h-full backdrop-blur-sm w-[550px] mx-auto jost text-white"
      style={{ boxShadow: '4px 4px 12px rgba(0, 0, 0, 0.5)' }}
    >
      <div className="bg-[#181B2E] rounded-t-[10px] p-[15px] px-[20px]">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img className='h-6' src={Assets.Avatar} alt="" />
            <p className="text-xl text-center">Higher IMO</p>
            <p className=''>(HIGHER)</p>
          </div>
          <div className="flex rounded-[20px]">
            <button
              onClick={onBackClick}
              className="bg-[#007AFF] hover:bg-[#007AFF]/70 rounded-[5px] text-white p-2 px-6 text-base border-y border-y-[#86AFFF]"
            >
              Back
            </button>
          </div>
        </div>
        <div className="">
          {/* Display token image, token name, and entered address */}
          <p className='text-lg text-white flex items-center'>
            {selectedToken && <span className="mr-2 bg-black p-[6px] px-4 rounded-[5px] text-sm flex gap-1 items-center">
              {selectedToken && tokenImages[selectedToken] && (
              <img
                src={tokenImages[selectedToken]}
                alt={selectedToken}
                className="h-4"
              />
            )}
              {selectedToken}</span>}
            {tokenAddress || '0X8B802513D4AA6F349B197A4EA4C26563CD6FD5B2'}
          </p>
        </div>
      </div>

      <div className="p-[20px]">
        <div className="flex items-center justify-between h-full">
          <Status />
          <div className="border-l-2 border-white/10 mx-5 self-stretch"></div>
          <Report />
        </div>

        <div className="border-b-2 border-white/10 my-5 self-stretch"></div>

        <Info />
      </div>
    </div>
  );
};

export default EvaluateReport;
