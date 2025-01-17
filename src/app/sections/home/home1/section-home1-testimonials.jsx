import FastImage from "../../../../globals/elements/fastimg";
import { publicUrlFor } from "../../../../globals/constants";

function SectionHome1Testimonials() {
    return (
        <div className="section-full p-t80 p-b80 bg-center bg-full-height bg-no-repeat bg-gray" style={{ backgroundImage: `url(${publicUrlFor("images/background/bg-map.png")})` }}>
            <div className="container">
                {/* TITLE START */}
                <div className="section-head text-center">
                    <h2 data-title="Testimonials">Our Client Say</h2>
                    <div className="mt-separator-outer">
                        <div className="mt-separator site-bg-primary" />
                    </div>
                </div>
                {/* TITLE END */}
                <div className="section-content">
                    <div className="owl-carousel home-carousel-1">
                        <div className="item">
                            <div className="testimonial-2  clearfix bg-white">
                                <div className="testimonial-detail">
                                    <div className="testimonial-pic shadow"><FastImage src="images/testimonials/customerpicforwoman - Copy.jpeg" width={100} height={100} alt="" /></div>
                                </div>
                                <div className="testimonial-text">
                                    <strong className="testimonial-name"> Emily Johnson </strong>
                                    <span className="testimonial-position">Manager</span>
                                    <span className="fa fa-quote-left" />
                                    <p>"The service was exceptional! Timely deliveries and excellent communication throughout the entire process. Highly recommend for reliable trucking solutions!"</p>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="testimonial-2 clearfix bg-white">
                                <div className="testimonial-detail ">
                                    <div className="testimonial-pic shadow"><FastImage src="images/testimonials/pic2.jpg" width={100} height={100} alt="" /></div>
                                </div>
                                <div className="testimonial-text">
                                    <strong className="testimonial-name"> David Smith</strong>
                                    <span className="testimonial-position">Manager</span>
                                    <span className="fa fa-quote-left" />
                                    <p>"A trustworthy and efficient team. My shipments arrived on time without any issues. Great experience overall!"</p>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="testimonial-2  clearfix  bg-white">
                                <div className="testimonial-detail">
                                    <div className="testimonial-pic shadow"><FastImage src="images/testimonials/pic3.jpg" width={100} height={100} alt="" /></div>
                                </div>
                                <div className="testimonial-text">
                                    <strong className="testimonial-name">James Williams</strong>
                                    <span className="testimonial-position">Manager</span>
                                    <span className="fa fa-quote-left" />
                                    <p>"Excellent customer service and quick response times. They really know how to handle freight logistics professionally. Will definitely continue using their services."</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionHome1Testimonials;
