import Link from "next/link";
import RentalDetails from "./RentalDetails";

const Header = () => {
  return (
    <div className="flex flex-col gap-16 items-center bg-[url('/imgs/bg.jpeg')] w-screen h-[60vh] bg-cover bg-no-repeat bg-center text-white">
      <ul className="flex w-full max-w-2xl justify-between mt-3">
        <li className="hover:underline underline-offset-4"><Link href={"/"}>Car Hire</Link></li>
        <li className="hover:underline underline-offset-4"><Link href={"/"}>Van Hire</Link></li>
        <li className="hover:underline underline-offset-4"><Link href={"/"}>Our Deals</Link></li>
        <li className="hover:underline underline-offset-4"><Link href={"/"}>Locations</Link></li>
        <li className="hover:underline underline-offset-4"><Link href={"/"}>Help</Link></li>
      </ul>
      <RentalDetails/>
    </div>
  );
}

export default Header