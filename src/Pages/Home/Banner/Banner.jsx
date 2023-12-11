import Lottie from "lottie-react";
import programmer from "../../../assets/programmer.json"

const Banner = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row justify-between items-center">
            <div className="text-white md:pl-20 space-y-2 pb-14 text-center md:text-start">
                <h1 className="md:text-3xl lg:text-5xl font-bold ">I AM FAHIM</h1>
                <h3 className="md:text-2xl lg:text-3xl pb-5 md:pb-5 lg:pb-10">Front End Web Developer</h3>
                <button className="btn bg-[#c8d5e5] text-[#3c3c3c] border-none">HIRE ME</button>
                <a href="https://drive.google.com/file/d/1AcSJsV2ooH-nusPlN6QAuxNCZ-EWbJo6/view?usp=sharing"><button className="btn bg-[#fa3433] text-white border-none ml-3">RESUME</button></a>
            </div>
            <Lottie className="w-3/6" animationData={programmer}/>
        </div>
    );
};

export default Banner;