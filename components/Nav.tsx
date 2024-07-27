import AuthButton from "../components/AuthButton";
import Image from "next/image";

export default function Nav (){
    return (
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16 bg-gray-800">
            <div className="w-full max-w-7xl flex justify-between items-center p-3 text-sm ">
                <Image src={'/imgs/logo.png'} alt="Company logo" width={180} height={180}/>
                <AuthButton />
            </div>
        </nav>
    )
}