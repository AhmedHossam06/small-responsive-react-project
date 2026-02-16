import logoImg from "./assets/Logo.png"
import { FaBars } from "react-icons/fa";
export default function Navbar(){
    return(
<div className="flex justify-center bg-black">
<div className="w-full flex gap-7 items-center justify-between p-4 container"> 
    <img src={logoImg} className="w-12 h-13 object-cover"/>
    <nav className=" gap-5 text-white justify-center items-center hidden lg:flex">
        <link to="/" className="hover:text-[rgb(230,80,105)] transition">HOME</link>
        <link to="pages"className="hover:text-[rgb(230,80,105)] transition">PAGES</link>
        <link to="main" className="hover:text-[rgb(230,80,105)] transition">CONTACT US</link>
    </nav>
        <FaBars className="block lg:hidden text-white ml-auto text-2xl hover:cursor-pointer hover:text-[rgb(230,80,105)]" />
    <div>
        <button className="bg-[rgb(254,96,124)] text-white rounded-4xl p-2 px-4 py-2 hover:cursor-pointer hover:bg-[rgb(230,80,105)] hidden lg:block">
            <p>+1 (234) 567-8910 </p>
        </button>
    </div>
    
</div>

</div>
    )
}