import { NavLink } from "react-router-dom";
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
    const links = <>
        <li><NavLink className="rounded-none" style={({ isActive })=> ({borderBottom: isActive ? "2px solid white" : " ", background: "transparent",})} to="/">Home</NavLink></li>
        {/* <li><Link className="rounded-none" style={({ isActive })=> ({borderBottom: isActive ? "2px solid white" : " ", background: "transparent",})} activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500} onSetActive={'handleSetActive'}>Home</Link></li> */}
        <li><NavLink className="rounded-none" style={({ isActive })=> ({borderBottom: isActive ? "2px solid white" : " ", background: "transparent",})} to="/skills">Skills</NavLink></li>
        <li><NavLink className="rounded-none" style={({ isActive })=> ({borderBottom: isActive ? "2px solid white" : " ", background: "transparent",})} to="/blogs">Blog</NavLink></li>
        <li><NavLink className="rounded-none" style={({ isActive })=> ({borderBottom: isActive ? "2px solid white" : " ", background: "transparent",})} to="/projects">Projects</NavLink></li>
        <li><NavLink className="rounded-none" style={({ isActive })=> ({borderBottom: isActive ? "2px solid white" : " ", background: "transparent",})} to="/experience">Experience</NavLink></li>
        <li><NavLink className="rounded-none" style={({ isActive })=> ({borderBottom: isActive ? "2px solid white" : " ", background: "transparent",})} to="/about">About</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-[#3c3c3c] text-white px-20 py-5 rounded-b-full">
              <div className="navbar-start w-full items-center">
                <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <FaBars className="text-base md:text-lg"/>
                  </div>
                  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-black rounded-box w-52">
                    {links}
                  </ul>
                </div>
                <h1 className="text-base md:text-2xl md:w-auto font-semibold">SHEFA ISLAM FAHIM</h1>
              </div>
              <div className="navbar-end lg:block hidden">
                <ul className="menu menu-horizontal px-1 text-white">
                    {links}
                </ul>
              </div>
            </div>
        </div>
    );
};

export default Navbar;