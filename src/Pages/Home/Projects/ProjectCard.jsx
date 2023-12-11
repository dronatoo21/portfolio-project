import { FaGithub, FaLink, FaServer } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectCard = ({project}) => {
    const {id, cover, title, description, languages, liveSite, clientCode, serverCode} = project
    return (
        <div className="text-white bg-[#31353b] rounded-xl">
            <div className="card glass md:h-[600px] lg:h-[570px]">
              <figure><img className="h-[250px] w-full rounded-lg" src={cover} alt="cover"/></figure>
              <div className="card-body">
                <h2 className="card-title text-2xl">{title}</h2>
                {
                    description?.length > 150 ? <p className="font-normal">{description?.slice(0, 150)} <Link to={`/details/${id}`} className="font-bold text-blue-200">Read more...</Link></p> : <p>{description}</p>
                }
                <hr className="w-1/2 mx-auto my-2"/>
                <p className="font-semibold">{languages}</p>
                <div className="flex justify-between">
                    <div className="items-center flex gap-2">
                        <Link target="_blank" to={clientCode}><FaGithub className="text-xl"/></Link>
                        <Link target="_blank" to={serverCode}><FaServer className="text-xl"/></Link>
                        <Link target="_blank" to={liveSite}><FaLink className="text-xl"/></Link>
                    </div>
                  <button className="btn bg-[#c8d5e5] text-[#3c3c3c] border-none mt-2">Details</button>
                </div>
              </div>
            </div>
        </div>
    );
};

export default ProjectCard;