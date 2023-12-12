const Education = () => {
    return (
        <div className="px-5 mx-auto text-center my-20">
            <h1 className="font-bold text-3xl text-center text-white mt-10">Education</h1>
            <ul className="steps text-white px-12 md:p-10 steps-vertical md:steps-horizontal">
              <li data-content="Now" className="step"><span className="mt-8 space-y-2 text-xl"><p>Higher School Certificate <br /> (H.S.C)<br /></p><p>Dhaka Imperial <br className="md:block hidden"/> College</p></span></li>
              <li data-content="22" className="step"><span className="mt-8 space-y-2 text-xl"><p>Secondery School Certificate <br />(S.S.C) <br /></p><p>Gulshan Model School <br className="md:block hidden"/> & College</p></span></li>
              <li data-content="20" className="step"><span className="mt-8 space-y-2 text-xl"><p>Junior School Certificate <br />(J.S.C) <br /></p><p>Gulshan Model School <br className="md:block hidden"/> & College</p></span></li>
            </ul>
        </div>
    );
};

export default Education;