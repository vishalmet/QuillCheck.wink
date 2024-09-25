import React from 'react';
import Assets from '../Assets';

const Status = ({ totalScore, tokenAge }) => {
  return (
    <div>
      <div className="flex gap-4 text-sm">
        <div className="space-y-3">
          <div className="">
            <p className='text-[#DDDDDD]'>Last Known Status:</p>
            <div className="bg-[#FFFFFF]/10 h-10 w-fit rounded-[8px] p-[10px] flex items-center gap-2">
              <img className=' h-6' src={Assets.Token} alt="" />
              <p>Not a <br />Honeypot</p>
            </div>
          </div>
          <div className="">
            <p className='text-[#DDDDDD]'>Token Age:</p>
            <p className=''>{tokenAge}</p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="">
            <p className='text-[#DDDDDD]'>Overall Score:</p>
            <div className="bg-[#B40D00] h-10 w-full rounded-[8px] flex justify-center items-center mx-auto">
              {/* Display the totalScore prop */}
              <p className='text-base font-semibold'>{totalScore}%</p>
            </div>
          </div>
          <div className="">
            <p className='text-[#DDDDDD]'>Ownership:</p>
            <img className='h-4' src={Assets.X} alt="X" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;
