import AuthButton from "../components/AuthButton";
import Image from "next/image";

const Nav = () => {
    return (
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16 bg-slate-900">
            <div className="w-full max-w-7xl flex justify-between items-center p-3 text-sm ">
                <a href="/">
                <Image src={'/imgs/logo.png'} alt="Company logo" width={120} height={37}/>
                </a>
                <AuthButton />
            </div>
        </nav>
    )
}

export default Nav