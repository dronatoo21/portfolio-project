import Footer from "../../Shared/Footer/Footer";
import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import ContactMe from "../ContactMe/ContactMe";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Projects/>
            <Skills/> 
            <Experience/>
            <AboutMe/>
            <ContactMe/>
            <Footer/>         
        </div>
    );
};

export default Home;