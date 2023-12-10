import Lottie from "lottie-react";
import programmer from "../../../assets/programmer.json"

const Banner = () => {
    return (
        <div className="flex justify-between items-center">
            <div>Fahim</div>
            <Lottie className="w-3/6" animationData={programmer}/>
        </div>
    );
};

export default Banner;