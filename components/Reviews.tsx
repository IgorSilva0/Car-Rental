import Image from "next/image"

const Reviews = () => {

    return (
        <div className="flex flex-col items-center gap-5 bg-gray-900 p-5 rounded-md shadow-lg">
            <h2 className=" bg-white text-black py-1 px-3 rounded-md font-bold">Over 10,000 reviews and counting…</h2>
            <p>"Quick, efficient and effective service"</p>
            <Image src={'/imgs/feefo.png'} alt="Feefo image" width={150} height={50}/>
        </div>
    )
}

export default Reviews