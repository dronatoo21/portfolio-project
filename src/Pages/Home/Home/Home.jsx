import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import ContactMe from "../ContactMe/ContactMe";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Projects/>
            <Skills/> 
            <Education/>
            <AboutMe/>
            <Experience/>
            <ContactMe/>       
        </div>
    );
};

export default Home;