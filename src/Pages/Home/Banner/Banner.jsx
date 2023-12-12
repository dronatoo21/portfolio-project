import Lottie from "lottie-react";
import programmer from "../../../assets/programmer.json"
import { FaDownload } from "react-icons/fa";
import resume from "../../../../Si_Fahim_Resume.pdf"
import { Link } from "react-scroll";

const Banner = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row justify-between items-center">
            <div className="text-white md:pl-20 space-y-2 pb-14 text-center md:text-start">
                <h1 className="md:text-3xl lg:text-5xl font-bold ">I AM FAHIM</h1>
                <h3 className="md:text-2xl lg:text-3xl pb-5 md:pb-5 lg:pb-10">Front End Web Developer</h3>
                <div className="flex gap-2">
                    <div>
                        <Link to="contact" spy={true} smooth={true} offset={-100} duration={500}><button className="btn bg-[#c8d5e5] text-[#3c3c3c] border-none">HIRE ME</button></Link>
                        <a title="View Resume" target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1AcSJsV2ooH-nusPlN6QAuxNCZ-EWbJo6/view?usp=sharing"><button className="btn bg-[#fa3433] text-white border-none ml-3">RESUME</button></a>
                    </div>
                    <a title="Download Resume" href={resume} download={resume}><button className="bg-[#fa3433] h-6 pl-1 w-6 mt-5 rounded-[4px] hover:bg-slate-400"><FaDownload className="text-white"/></button></a>
                </div>
            </div>
            <Lottie className="w-3/6" animationData={programmer}/>
        </div>
    );
};

export default Banner;