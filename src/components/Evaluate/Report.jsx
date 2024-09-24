import React from 'react'
import Assets from '../Assets'

const Report = () => {
    return (
        <div>
            <div className=" space-y-2 text-sm">
                <div className="flex justify-between space-x-9 items-center">
                    <div className=" flex items-center gap-2">
                        <img className=' h-4' src={Assets.XVoilet} alt="" />
                        <p className=' '>Critical:</p>
                    </div>
                    <p>1</p>
                </div>
                <div className="flex justify-between space-x-9 items-center">
                    <div className=" flex items-center gap-2">
                        <img className=' h-4' src={Assets.Caution} alt="" />
                        <p className=' '>Risky:</p>
                    </div>
                    <p>12</p>
                </div>
                <div className="flex justify-between space-x-9 items-center">
                    <div className=" flex items-center gap-2">
                        <img className=' h-4' src={Assets.Exclamatory} alt="" />
                        <p className=' '>Medium:</p>
                    </div>
                    <p>0</p>
                </div>
                <div className="flex justify-between space-x-9 items-center">
                    <div className=" flex items-center gap-2">
                        <img className=' h-4' src={Assets.Dot} alt="" />
                        <p className=' '>Neutral:</p>
                    </div>
                    <p>7</p>
                </div>
            </div>
        </div>
    )
}

export default Report