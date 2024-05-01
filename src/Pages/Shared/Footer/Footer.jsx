import { FaFacebook, FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer p-10 bg-[#525151] rounded-t-xl text-neutral-content justify-center md:justify-normal">
          <aside className="lg:flex items-center text-center">
            <img className="rounded-full h-[100px] w-[100px] md:ml-0 ml-4" src="https://i.ibb.co/xszVwVz/programmer.jpg" alt="" />
            <h1 className="text-base md:text-2xl md:w-auto md:ml-0 ml-8 font-semibold">SI FAHIM</h1>
          </aside> 
          <nav>
            <header className="footer-title md:ml-0 ml-11">Social</header> 
            <div className="grid grid-flow-col gap-4">
              <Link target="_blank" to="https://www.facebook.com/profile.php?id=61554106064324"><FaFacebook className="text-2xl"/></Link>
              <Link target="_blank" to="https://twitter.com/dronatoo21"><FaTwitter className="text-2xl"/></Link>
              <Link target="_blank" to="https://www.linkedin.com/in/shefa-islam-fahim/"><FaLinkedin className="text-2xl"/></Link>
              <Link target="_blank" to="https://github.com/dronatoo21"><FaGithub className="text-2xl"/></Link>
            </div>
          </nav>
        </footer>
    );
};

export default Footer;