import Footer from "../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Projects/>
            <Skills/> 
            <Footer/>         
        </div>
    );
};

export default Home;