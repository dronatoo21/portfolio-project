import { FaGithub, FaLink, FaServer } from "react-icons/fa";
import { Link, useLoaderData} from "react-router-dom";
import NavDetail from "../Shared/Navbar/NavForDetail/NavDetail";

const Details = () => {
    const project = useLoaderData()
    const {cover, title, description, languages, liveSite, clientCode, serverCode} = project
    return (
        <div className="mb-10">
            <NavDetail/>
            <h1 className="font-bold text-xl md:text-xl lg:text-2xl mb-5 text-center text-white pt-28">{title} Details</h1>
            <div className="text-white rounded-xl">
            <div className="card glass w-11/12 md:w-8/12 lg:w-6/12 mx-auto">
              <figure><img className="h-[150px] md:h-[250px] lg:h-[300px] w-full rounded-lg" src={cover} alt="cover"/></figure>
              <div className="card-body">
                <h2 className="card-title text-lg md:text-2xl">{title}</h2>
                <p className="text-sm md:text-base">{description}</p>
                <hr className="w-1/2 mx-auto my-2"/>
                <p className="font-semibold text-sm md:text-base">{languages}</p>
                <div className="flex justify-end">
                    <div className="items-center flex gap-3">
                        <Link target="_blank" to={clientCode}><FaGithub className="text-lg md:text-2xl"/></Link>
                        <Link target="_blank" to={serverCode}><FaServer className="text-lg md:text-2xl"/></Link>
                        <Link target="_blank" to={liveSite}><FaLink className="text-lg md:text-2xl"/></Link>
                    </div>
                </div>
              </div>
            </div>
        </div>
        </div>
    );
};

export default Details;