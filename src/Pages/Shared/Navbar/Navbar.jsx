import { FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { Link } from "react-scroll";

const Navbar = () => {
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><Link spy={true} smooth={true} offset={-100} duration={500} className="rounded-xl" to="projects">Projects</Link></li>
        <li><Link spy={true} smooth={true} offset={-100} duration={500} className="rounded-xl" to="skills">Skills</Link></li>
        <li><Link spy={true} smooth={true} offset={-100} duration={500} className="rounded-xl" to="education">Education</Link></li>
        <li><Link spy={true} smooth={true} offset={-100} duration={500} className="rounded-xl" to="about">About</Link></li>
        <li><Link spy={true} smooth={true} offset={-100} duration={500} className="rounded-xl" to="experience">Experience</Link></li>
        <li><Link spy={true} smooth={true} offset={-100} duration={500} className="rounded-xl" to="contact">Contact</Link></li>
    </>
    return (
        <div className='fixed z-20 container mx-auto'>
            <div className="navbar z-20 bg-[#3c3c3c] text-white px-20 flex justify-between py-5 rounded-b-full">
              <div className="w-full md:w-auto items-center">
                <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <FaBars className="text-base md:text-lg"/>
                  </div>
                  <ul tabIndex={0} className="menu menu-sm dropdown-content  z-[1] p-2 shadow bg-base-100 text-black rounded-box w-52">
                    {links}
                  </ul>
                </div>
                <h1 className="text-base md:text-2xl md:w-auto font-semibold">SHEFA ISLAM FAHIM</h1>
              </div>
              <div className="lg:block hidden">
                <ul className="menu menu-horizontal px-1 text-white">
                    {links}
                </ul>
              </div>
            </div>
        </div>
    );
};

export default Navbar;