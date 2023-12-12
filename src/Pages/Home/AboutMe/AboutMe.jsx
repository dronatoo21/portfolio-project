import Lottie from "lottie-react";
import about from "../../../assets/about.json";

const AboutMe = () => {
    return (
        <div className="mb-24">
            <h1 className="font-bold text-3xl text-center text-white mt-10">About me</h1>
            <div className="flex flex-col lg:flex-row items-center justify-center">
                <div>
                    <Lottie className="w-3/4" animationData={about}/>
                </div>
                <div className="px-5 text-center lg:text-start md:px-10 lg:w-1/2 text-white">
                    <p>I am Fahim a dedicated web developer. I am always eager to collaborate on exciting projects and contribute to innovative solutions. I have learned web development from some online courses and online videos. And created many projects. Self learning is my strength and I love to develop my skills.</p><br />
                    <p>My focus is on designing and developing websites that look great and work well. I am skilled in a range of programming languages and platforms, including HTML, CSS, javaScript, MongoDB and some frameworks like react, tailwind. I have worked on websites for different types of projects, such as tech , e-commerce, and restaurant.</p><br />
                    <p>I take pride in exceeding client expectations and delivering project on time. My goal is to create websites that are both visually appealing and easy to use. If you are looking for a developer with skills and practical experience, please feel free to get in touch with me.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;