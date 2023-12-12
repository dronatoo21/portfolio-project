import Footer from "../../Shared/Footer/Footer";
import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import ContactMe from "../ContactMe/ContactMe";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Projects/>
            <Skills/> 
            <AboutMe/>
            <ContactMe/>
            <Footer/>         
        </div>
    );
};

export default Home;