import { FaGithub, FaLink, FaServer } from "react-icons/fa";
import { Link, useLoaderData} from "react-router-dom";
import NavDetail from "../Shared/Navbar/NavForDetail/NavDetail";

const Details = () => {
    const project = useLoaderData()
    const {cover, title, description, languages, liveSite, clientCode, serverCode} = project
    return (
        <div className="mb-10">
            <NavDetail/>
            <h1 className="font-bold text-3xl mb-5 text-center text-white pt-28">{title} Details</h1>
            <div className="text-white  rounded-xl">
            <div className="card glass w-9/12 mx-auto">
              <figure><img className="h-[200px] md:h-[300px] lg:h-[450px] w-full rounded-lg" src={cover} alt="cover"/></figure>
              <div className="card-body">
                <h2 className="card-title text-2xl">{title}</h2>
                <p>{description}</p>
                <hr className="w-1/2 mx-auto my-2"/>
                <p className="font-semibold">{languages}</p>
                <div className="flex justify-end">
                    <div className="items-center flex gap-3">
                        <Link target="_blank" to={clientCode}><FaGithub className="text-2xl"/></Link>
                        <Link target="_blank" to={serverCode}><FaServer className="text-2xl"/></Link>
                        <Link target="_blank" to={liveSite}><FaLink className="text-2xl"/></Link>
                    </div>
                </div>
              </div>
            </div>
        </div>
        </div>
    );
};

export default Details;