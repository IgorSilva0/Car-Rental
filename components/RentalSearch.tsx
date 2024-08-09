'use client'

import React, {useState, useEffect} from "react"

const RentalSearch = () => {
    const [sameLocation, setSameLocation] = useState(false)
    
    const handleDrop = () => {
        setSameLocation(!sameLocation)
    }

    return (
        <div className="pt-10">
            <form className=" bg-slate-800 p-6 rounded-md">
                <div className="flex text-lg gap-4 mb-5">
                    <label>
                        Pick-up & Return location
                        <input className="block text-black h-[30px] placeholder-black" placeholder="Pick-up location" type="text">
                        </input>
                        {sameLocation ? 
                            <input className="block text-black mt-4 placeholder-black" placeholder="Drop-off location" type="text">
                            </input>
                        : null}
                    </label>
                    <label>
                        Pick-up date
                        <input className="block text-black" type="date">
                        </input>
                    </label>
                    <label>
                        Time
                        <input className="block text-black" type="time">
                        </input>
                    </label>
                    <label>
                        Drop-off date
                        <input className="block text-black" type="date">
                        </input>
                    </label>
                    <label>
                        Time
                        <input className="block text-black" type="time">
                        </input>
                    </label>
                </div>
                <label className="hover:cursor-pointer">   
                    <input type="checkbox" onChange={handleDrop}/>
                    Drop car off at different location
                </label>
                <button type="submit" className="mx-5 px-10 py-1 w-fit bg-green-500 rounded-sm hover:bg-green-600 font-medium">Search</button>
            </form>
        </div>
    )
}

export default RentalSearch