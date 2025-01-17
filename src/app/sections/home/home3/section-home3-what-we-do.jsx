import { route } from "../../../../globals/constants";
import FastImage from "../../../../globals/elements/fastimg";
import { NavLink } from "react-router-dom";

function SectionHome3WhatWeDo() {
    return (
        <div className="section-full  p-t80 p-b50">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="mt-box m-b30">
                            <div className="mt-thum-bx mt-img-effect">
                                <FastImage src="images/our-work/954971_a1dee6cb08964398818cd15b58130577~mv2.avif" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="mt-box sx-what-wedo">
                            <span className="site-text-primary display-block title-second text-uppercase font-20 font-weight-600 display-block m-b15">What we do</span>
                            <h2 className="m-t0">Our mision is best in The Transport!</h2>
                            <p>Our mission is to provide the best transport solutions, ensuring reliability, efficiency, and customer satisfaction in every delivery.</p>
                            <NavLink to={route.pages.ABOUT} className="site-button">Read more</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionHome3WhatWeDo;

