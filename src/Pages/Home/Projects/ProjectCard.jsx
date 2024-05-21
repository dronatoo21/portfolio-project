import { FaGithub, FaLink, FaServer } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectCard = ({project}) => {
    const {_id, cover, title, description, languages, liveSite, clientCode, serverCode} = project;
    return (
        <div className="text-white bg-[#31353b] rounded-xl">
            <div className="card glass h-[520px] md:h-[530px] lg:h-[570px]">
              <figure><img className="lg:h-[250px] h-[200px] w-full rounded-lg" src={cover} alt="cover"/></figure>
              <div className="card-body">
                <h2 className="card-title text-lg md:text-xl lg:text-2xl">{title}</h2>
                {
                    description?.length > 100 ? <p className="font-normal lg:text-base text-sm">{description?.slice(0, 100)} <Link to={`/details/${_id}`} className="font-bold text-blue-200">Read more...</Link></p> : <p className=" lg:text-base text-sm">{description}</p>
                }
                <hr className="w-1/2 mx-auto my-2"/>
                <p className="font-semibold text-sm lg:text-base">{languages}</p>
                <div className="flex justify-between">
                    <div className="items-center flex gap-3">
                        <Link target="_blank" to={clientCode}><FaGithub className="text-xl lg:text-2xl"/></Link>
                        <Link target="_blank" to={serverCode}><FaServer className="text-xl lg:text-2xl"/></Link>
                        <Link target="_blank" to={liveSite}><FaLink className="text-xl lg:text-2xl"/></Link>
                    </div>
                  <Link to={`/details/${_id}`}><button className="btn bg-[#c8d5e5] text-[#3c3c3c] border-none mt-2">Details</button></Link>
                </div>
              </div>
            </div>
        </div>
    );
};

export default ProjectCard;