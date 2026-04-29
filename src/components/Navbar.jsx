import UserImg from "@/assets/user.png";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";

const Navbar = () => {
    return (
        <div className="container mx-auto flex justify-between items-center gap-6">
            <div></div>

            <ul className="flex gap-3 md:gap-6 text-gray-700">
                <li>
                    <NavLink href={"/"}>Home</NavLink>
                </li>
                <li>
                    <NavLink href={"/about"}>About</NavLink>
                </li>
                <li>
                    <NavLink href={"/carrer"}>Carrer</NavLink>
                </li>
            </ul>

            <div className="flex items-center gap-2">
                <Image src={UserImg} width={60} height={60} alt="User Img"></Image>
                <button className='btn bg-[#403f3f] text-white'>Login</button>
            </div>

        </div>
    );
};

export default Navbar;