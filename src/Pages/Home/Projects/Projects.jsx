import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
const Projects = () => {
    const [projects, setProjects] = useState([])
    useEffect( () => {
        fetch("https://portfolio-server-alpha-lilac.vercel.app/projects")
        .then(res => res.json())
        .then(data => {
            setProjects(data)
        })
    },[])
    return (
        <div id="projects" className="px-5 lg:px-0">
            <div>
                <h1 className="font-bold text-3xl text-center text-white mb-2">Projects</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 mt-12">
                {
                    projects?.map(project => <ProjectCard key={project?._id} project={project}/>)
                }
            </div>
        </div>
    );
};

export default Projects;