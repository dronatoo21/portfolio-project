import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination } from 'swiper/modules';
// Import Swiper style
import 'swiper/css';
import 'swiper/css/pagination';


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
                <h1 className="font-bold text-xl md:text-xl lg:text-2xl text-center text-white mb-10">Projects</h1>
            </div>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 mt-12">
                {
                    projects?.map(project => <ProjectCard key={project?._id} project={project}/>)
                }
            </div> */}
            <div className="mx-2 md:mx-10">
                <Swiper
                slidesPerView={1}
                spaceBetween={9}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 9,
                  },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
            {
                projects?.map(project => (
                    <SwiperSlide key={project?._id}>
                        <ProjectCard project={project}/>
                    </SwiperSlide>
                ))
            }
                </Swiper>
            </div>
        </div>
    );
};

export default Projects;