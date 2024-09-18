import React from 'react';
import Assets from './Assets';

const EvaluateReport = ({ onBackClick }) => {
  return (
    <div
      className="bg-[#18162099]/60 rounded-[10px] backdrop-filter h-96 backdrop-blur-sm w-[550px] mx-auto jost text-white"
      style={{ boxShadow: '4px 4px 12px rgba(0, 0, 0, 0.5)' }}
    >
      <div className="bg-[#181B2E] rounded-t-[10px] p-[20px]">
        <div className=" flex justify-between items-center">
          <div className=" flex items-center gap-2">
            <img className=' h-6' src={Assets.Avatar} alt="" />
            <p className=" text-2xl text-center">Higher IMO</p>
            <p className=' '>(HIGHER)</p>
          </div>
          {/* <div className="flex rounded-[20px]">
            <button
              onClick={onBackClick}
              className="bg-[#007AFF] hover:bg-[#007AFF]/70 rounded-[5px] text-white p-2 px-6 text-base border-y border-y-[#86AFFF]"
            >
              Back
            </button>
          </div> */}
        </div>
        <div className="">
          <p className=' text-white'>0X8B802513D4AA6F349B197A4EA4C26563CD6FD5B2</p>
        </div>
      </div>

      <div className="p-[20px]">
        <div className=" flex items-center gap-3">
        <div className="">
          <p className='text-[#DDDDDD]'>Last Known Status:</p>
          <div className="bg-[#FFFFFF]/10 w-fit rounded-[10px] p-[10px] flex items-center gap-2">
            <img className=' h-8' src={Assets.Token} alt="" />
            <p>Not a Honeypot</p>
          </div>
        </div>
        <div className="">
          <p className='text-[#DDDDDD]'>Last Known Status:</p>
          <div className="bg-[#FFFFFF]/10 w-fit rounded-[10px] p-[10px] flex items-center gap-2">
            <img className=' h-8' src={Assets.Token} alt="" />
            <p>Not a Honeypot</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default EvaluateReport;
