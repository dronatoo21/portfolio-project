import { Helmet } from "react-helmet";
import Navbar from "../../Shared/Navbar/Navbar";
import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import ContactMe from "../ContactMe/ContactMe";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
// import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import AllProjects from "../allProjects/allProjects";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Si Fahim | Home</title>
                <meta name="description" content="shefa islam fahim home page"/>
                <link rel="canonical" href="/" />
            </Helmet>
            <Navbar/>
            <Banner/>
            <AllProjects/>
            <Skills/> 
            <Education/>
            <AboutMe/>
            <Experience/>
            <ContactMe/>       
        </div>
    );
};

export default Home;