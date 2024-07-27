'use client'

import React, {useState, useEffect} from "react"

const RentalSearch = () => {
    const [sameLocation, setSameLocation] = useState(false)
    
    const handleDrop = () => {
        setSameLocation(!sameLocation)
    }

    return (
        <div>
            <form className=" bg-slate-700 p-5 rounded-md">
                <div className="flex text-lg gap-4 mb-5">
                    <label>
                        Pick-up & Return location
                        <input className="block text-black h-[30px]" placeholder="Pick-up location" type="text">
                        </input>
                        {sameLocation ? 
                            <input className="block text-black mt-4" placeholder="Drop-off location" type="text">
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
                <button type="submit" className="mx-5 px-10 py-1 w-fit bg-green-600 rounded-md hover:bg-green-700">Search</button>
            </form>
        </div>
    )
}

export default RentalSearch