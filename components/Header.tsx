import Link from "next/link";
import Image from "next/image";
import RentalSearch from "./RentalSearch";

const Header = () => {
  return (
    <div className="flex flex-1">
      <div className="flex flex-col items-center bg-[url('/imgs/bg.jpeg')] w-screen h-[70vh] bg-cover bg-no-repeat bg-center">
        <ul className="flex w-full max-w-2xl justify-between mt-3 ">
          <li className="hover:underline underline-offset-4"><Link href={"/"}>Car Hire</Link></li>
          <li className="hover:underline underline-offset-4"><Link href={"/"}>Van Hire</Link></li>
          <li className="hover:underline underline-offset-4"><Link href={"/"}>Our Deals</Link></li>
          <li className="hover:underline underline-offset-4"><Link href={"/"}>Locations</Link></li>
          <li className="hover:underline underline-offset-4"><Link href={"/"}>Help</Link></li>
        </ul>
        <div className="flex flex-col items-center justify-between h-full py-5">
          <RentalSearch/> 
          <ul className="flex items-center w-[70vw]">
            <li className="flex">
              <Image src={'/imgs/calendar.png'} alt="Calendar Image" width={70} height={70}/>
              <span>
                <p className="font-bold">Flexible rentals</p>
                Flexible rentals Cancel or change most bookings for free up to 48 hours before pick-up
              </span>
            </li>
            <li className="flex">
              <Image src={'/imgs/magnifier.png'} alt="Calendar Image" width={70} height={70}/>
              <span>
                <p className="font-bold">No hidden fees</p>
                No hidden fees Know exactly what you&apos;'re paying
              </span>
            </li>
            <li className="flex">
              <Image src={'/imgs/wallet.png'} alt="Calendar Image" width={70} height={70}/>
              <span>
                <p className="font-bold">Price Match Guarantee</p>
                Price Match Guarantee Found the same deal for less? We&apos;ll match the price.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header