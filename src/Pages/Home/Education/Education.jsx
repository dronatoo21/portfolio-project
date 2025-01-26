const Education = () => {
    return (
        <div id="education" className="px-5 mx-auto text-center my-20">
            <p className="font-bold text-xl md:text-xl lg:text-2xl text-center text-white mt-10">Education</p>
            <ul className="steps text-white px-12 md:p-10 steps-vertical md:steps-horizontal">
              <li data-content="Now" className="step"><span className="mt-8 space-y-2 md:text-base lg:text-xl"><p>Bachelors of Business Administration <br />(B.B.A) <br /></p><p> Presidency University </p></span></li>
              <li data-content="24" className="step"><span className="mt-8 space-y-2 md:text-base lg:text-xl"><p>Higher School Certificate <br /> (H.S.C)<br /></p><p>Dhaka Imperial <br className="md:block hidden"/> College</p></span></li>
              <li data-content="22" className="step"><span className="mt-8 space-y-2 md:text-base lg:text-xl"><p>Secondery School Certificate <br />(S.S.C) <br /></p><p>Gulshan Model School <br className="md:block hidden"/> & College</p></span></li>
            </ul>
        </div>
    );
};

export default Education;