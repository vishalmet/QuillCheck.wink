import React from 'react'
import Assets from '../Assets'

const Status = () => {
  return (
    <div>
         <div className=" flex gap-4">
            <div className="space-y-3">
              <div className="">
                <p className='text-[#DDDDDD]'>Last Known Status:</p>
                <div className="bg-[#FFFFFF]/10 w-fit rounded-[8px] p-[10px] flex items-center gap-2">
                  <img className=' h-8' src={Assets.Token} alt="" />
                  <p>Not a Honeypot</p>
                </div>
              </div>
              <div className="">
                <p className='text-[#DDDDDD]'>Token Age:</p>
                <p className=''>6 Days</p>
              </div>
            </div>

            <div className=" space-y-3">
              <div className="">
                <p className='text-[#DDDDDD]'>Overall Score:</p>
                <div className="bg-[#B40D00] w-fit rounded-[8px] p-[10px] mx-auto">
                  <p className=' text-2xl font-semibold'>14.77%</p>
                </div>
              </div>
              <div className="">
                <p className='text-[#DDDDDD]'>Ownership:</p>
                <img className='h-4' src={Assets.X} alt="X" />
              </div>
            </div>
          </div>
    </div>
  )
}

export default Status