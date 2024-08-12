import Link from "next/link";
import Image from "next/image";
import RentalSearch from "./RentalSearch";
import Reviews from "./Reviews";

const Header = () => {
  return (
    <div className="flex flex-1 px-16 mobile:px-0">
      <div className="flex flex-col items-center bg-[url('/imgs/bg.jpeg')] h-[80vh] bg-cover bg-no-repeat bg-center mobile:w-[100vw] mobile:px-5">
        <ul className="flex w-full max-w-2xl justify-between mt-3 mobile:mt-5">
          <li className="hover:underline underline-offset-4"><Link href={"/"}>Car Hire</Link></li>
          <li className="hover:underline underline-offset-4"><Link href={"/"}>Van Hire</Link></li>
          <li className="hover:underline underline-offset-4"><Link href={"/"}>Our Deals</Link></li>
          <li className="hover:underline underline-offset-4"><Link href={"/"}>Locations</Link></li>
          <li className="hover:underline underline-offset-4"><Link href={"/"}>Help</Link></li>
        </ul>
        <div className="flex flex-col items-center justify-between h-full">
          <RentalSearch/>
          <Reviews/>
          <ul className="flex items-center w-[100%] px-[15%] py-2 bg-slate-950 mobile:flex-col mobile:gap-5">
            <li className="flex">
              <div className="flex items-center px-1">
                <Image src={'/imgs/calendar.png'} alt="Calendar Image" width={80} height={80} className=""/>
              </div>
              <span>
                <p className="font-bold">Flexible rentals</p>
                Flexible rentals Cancel or change most bookings for free up to 48 hours before pick-up
              </span>
            </li>
            <li className="flex">
              <div className="flex items-center px-1">
                <Image src={'/imgs/magnifier.png'} alt="Calendar Image" width={80} height={80}/>
              </div>
              <span>
                <p className="font-bold">No hidden fees</p>
                No hidden fees Know exactly what you&apos;'re paying
              </span>
            </li>
            <li className="flex">
              <div className="flex items-center px-1">
                <Image src={'/imgs/wallet.png'} alt="Calendar Image" width={80} height={80}/>
              </div>
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