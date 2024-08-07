
import Header from "@/components/Header";
import Fleet from "@/components/Fleet";
import Image from "next/image";
import { SlPlane } from "react-icons/sl";

const Index = async () => {


  return (
    <div className="flex-1 w-full flex flex-col items-center">
      <Header />
      <Fleet/>
      <div className="flex w-[100%] mt-12 items-center justify-center gap-32 bg-slate-800">
        <div className="flex items-center gap-5">
          <div className="bg-green-500 p-3 rounded-full">
          <SlPlane size={35}/>
          </div>
          <div>
            <h3 className="text-lg">FANCY EXPLORING SECRET ROAD TRIPS?</h3>
            <p><b>Trust us</b>, we&apos;ve got exclusive tips to help you find your way.</p>
          </div>
        </div>

        <div className="flex">
          <Image src={'/imgs/secret.jpg'} alt="Secret Image" width={400} height={400}/>
          <button>Hello</button>
        </div>

      </div>
    </div>
  );
}

export default Index