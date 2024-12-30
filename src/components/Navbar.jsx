import { useState } from 'react'
import { logo } from '../assets'
import { header_menu } from "../constants";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import styles from '../styles/styles';

const Navbar = () => {
    const [active, setActive] = useState("Home");
    const [toggle, setToggle] = useState(false);

    return (
        <nav className={`w-full ${styles.boxWidth} flex py-6 justify-between items-center navbar`}>
            <img src={logo} alt="Biteezy" className=" w-[30%] ss:w-[20%] sm:w-[15%] md:w-[10%]" />

            {/* Navbar for desktop screen */}
            <ul className="list-none md:flex hidden justify-end items-center flex-1">
                {
                    header_menu.map((nav, index) => (
                        <li
                            key={nav.id}
                            className={`font-poppins font-normal cursor-pointer text-[16px] hover:text-secondary ${active === nav.title ? "text-white" : "text-dimWhite"
                                } ${index === header_menu.length - 1 ? "mr-0" : "mr-10"}`}
                            onClick={() => setActive(nav.title)}
                        >
                            <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    ))
                }
            </ul>

            {/* Navbar for small devices */}
            <div className="md:hidden flex flex-1 justify-end items-center">
                <div className="text-3xl" onClick={() => setToggle(!toggle)}>
                    {
                        toggle ? <AiOutlineClose /> : <BiMenuAltRight />
                    }
                </div>

                <div
                    className={`${!toggle ? "hidden" : "flex"
                        } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-50`}
                >
                    <ul className="list-none flex justify-end items-start flex-1 flex-col">
                        {header_menu.map((nav, index) => (
                            <li
                                key={nav.id}
                                className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"
                                    } ${index === header_menu.length - 1 ? "mb-0" : "mb-4"}`}
                                //onClick={() => setActive(nav.title)}
                                onClick={()=>{
                                    setActive(nav.title)
                                    setToggle(false);
                                }}
                            >
                                <a href={`#${nav.id}`}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;