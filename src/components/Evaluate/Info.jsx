import React from 'react'
import Assets from '../Assets'

const Info = () => {
    return (
        <div className="text-sm space-y-4">
            <div className=" flex justify-between">
                <div className="">
                    <p>Holders</p>
                    <div className=" flex justify-center gap-1 items-center">
                        <img className='h-4' src={Assets.Exclamatory} alt="" />
                        <p className=' font-semibold text-lg'>411</p>
                    </div>
                </div>
                <div className="border-l-2 border-white/10 mx-5 self-stretch"></div>
                <div className="">
                    <p>Current Liquidity</p>
                    <div className=" flex justify-center gap-1 items-center">
                        <img className='h-4' src={Assets.Shield} alt="" />
                        <p className=' font-semibold text-lg'>$27K</p>
                    </div>
                </div>
                <div className="border-l-2 border-white/10 mx-5 self-stretch"></div>
                <div className="">
                    <p>LP Holders</p>
                    <div className=" flex justify-center gap-1 items-center">
                        <img className='h-4' src={Assets.Shield} alt="" />
                        <p className=' font-semibold text-lg'>2</p>
                    </div>
                </div>
                <div className="border-l-2 border-white/10 mx-5 self-stretch"></div>
                <div className="">
                    <p>Holders</p>
                    <div className=" flex justify-center gap-1 items-center">
                        <img className='h-4' src={Assets.Caution} alt="" />
                        <p className=' font-semibold text-lg'>1</p>
                    </div>
                </div>
            </div>

            <div className=" flex justify-center">
                <div className="">
                    <p>Buy Tax</p>
                    <div className=" flex justify-center gap-1 items-center">
                        <img className='h-4' src={Assets.Shield} alt="" />
                        <p className=' font-semibold text-lg'>0%</p>
                    </div>
                </div>
                <div className="border-l-2 border-white/10 mx-10 self-stretch"></div>
                <div className="">
                    <p>Sell Tax</p>
                    <div className=" flex justify-center gap-1 items-center">
                        <img className='h-4' src={Assets.Shield} alt="" />
                        <p className=' font-semibold text-lg'>0%</p>
                    </div>
                </div>
                <div className="border-l-2 border-white/10 mx-10 self-stretch"></div>
                <div className="">
                    <p>Transfer Tax</p>
                    <div className=" flex justify-center gap-1 items-center">
                        <img className='h-4' src={Assets.Shield} alt="" />
                        <p className=' font-semibold text-lg'>0%</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info