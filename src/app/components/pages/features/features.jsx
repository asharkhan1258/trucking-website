import { useEffect } from "react";
import FastImage from "../../../../globals/elements/fastimg";
import { loadScript, route } from "../../../../globals/constants";
import CountUp from "react-countup";
import { NavLink } from "react-router-dom";
import _data from "../../../../globals/data/data.json";

function FeaturesPage() {

    const { clients } = _data;

    useEffect(() => {
        loadScript("js/custom.js");
    })

    return (
        <>
            {/* Section */}
            <div className="section-full bg-white p-t80 p-b50">
                <div className="container">
                    {/* TITLE START*/}
                    <div className="section-head text-center">
                        <h2 data-title="Choose us">Why Choose Us </h2>
                        <div className="mt-separator-outer">
                            <div className="mt-separator site-bg-primary" />
                        </div>
                    </div>
                    {/* TITLE END*/}
                    <div className="section-content">
                        <div className="row">
                            <div className="col-md-4 col-sm-6">
                                <div className="mt-icon-box-wraper  p-a30 bdr-1 bdr-solid bdr-gray hover-shadow m-b30">
                                    <div className="icon-md site-text-primary radius m-b15">
                                        <span className="icon-cell  site-text-primary"><i className="flaticon-people-1" /></span>
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="mt-tilte  m-b5">Customer Satisfication Tools</h4>
                                        <p>Advanced tools designed to enhance customer satisfaction and loyalty.                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="mt-icon-box-wraper  p-a30 bdr-1 bdr-solid bdr-gray hover-shadow m-b30">
                                    <div className="icon-md site-text-primary radius m-b15">
                                        <span className="icon-cell  site-text-primary"><i className="flaticon-pencil" /></span>
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="mt-tilte  m-b5">Management &amp; Reporting</h4>
                                        <p>Efficient management and reporting solutions for data-driven decision-making.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="mt-icon-box-wraper  p-a30  bdr-1 bdr-solid bdr-gray hover-shadow m-b30">
                                    <div className="icon-md site-text-primary radius m-b15">
                                        <span className="icon-cell  site-text-primary"><i className="flaticon-wallet" /></span>
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="mt-tilte  m-b5">Freight Payment Options</h4>
                                        <p>Flexible freight payment options tailored to meet your needs.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="mt-icon-box-wraper  p-a30 bdr-1 bdr-solid bdr-gray hover-shadow m-b30">
                                    <div className="icon-md site-text-primary radius m-b15">
                                        <span className="icon-cell  site-text-primary"><i className="flaticon-solution" /></span>
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="mt-tilte  m-b5">Compliance Solutions</h4>
                                        <p>Comprehensive compliance solutions ensuring seamless adherence to regulations.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="mt-icon-box-wraper  p-a30 bdr-1 bdr-solid bdr-gray hover-shadow m-b30">
                                    <div className="icon-md site-text-primary radius m-b15">
                                        <span className="icon-cell  site-text-primary"><i className="flaticon-time-passing" /></span>
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="mt-tilte  m-b5">Timely Delivery</h4>
                                        <p>Ensuring timely delivery with efficient and reliable logistics solutions.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="mt-icon-box-wraper  p-a30 bdr-1 bdr-solid bdr-gray hover-shadow m-b30">
                                    <div className="icon-md site-text-primary radius m-b15">
                                        <span className="icon-cell  site-text-primary"><i className="flaticon-customer-service" /></span>
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="mt-tilte  m-b5">24 / 7 Service</h4>
                                        <p>Round-the-clock service, ensuring support and solutions anytime you need.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Section */}
            <div className="section-full  p-t80 p-b50 bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 m-b30">
                            <div className="mt-box">
                                <span className="site-text-primary display-block title-second text-uppercase font-20 font-weight-600 display-block m-b15">Industry Sectors Coverage</span>
                                <h2>Dedicated Trucking Services with Advanced Technology</h2>
                                <p>Providing reliable trucking services powered by advanced technology, ensuring efficient route management, real-time tracking, and timely deliveries to meet all your logistics needs with precision.</p>
                                <div className="row">
                                    <div className="col-md-6 col-sm-6">
                                        <div className="m-b30 text-black mt-icon-box-wraper center bg-white p-a20">
                                            <div className="counter font-24 font-weight-800 m-b5 site-text-primary">
                                                <CountUp end={450} duration={10} />
                                            </div>
                                            <h4 className="m-b0">Delivered Packages</h4>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className="m-b30 text-black mt-icon-box-wraper center bg-white p-a20">
                                            <div className="counter font-24 font-weight-800 m-b5 site-text-primary">
                                                <CountUp end={45} duration={10} />
                                            </div>
                                            <h4 className="m-b0">Countries Covered</h4>
                                        </div>
                                    </div>
                                </div>
                                <NavLink to={route.services.SERVICES} className="site-button">Read more</NavLink>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="mt-box m-b30">
                                <div className="mt-thum-bx mt-img-effect  overflow-hide">
                                    <FastImage src="images/our-work/download.jpeg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Our Client Logo */}
            <div className="section-full bg-white p-t80 p-b50">
                <div className="container">
                    {/* TITLE START */}
                    <div className="section-head text-center">
                        <h2 data-title="Client">Our Client</h2>
                        <div className="mt-separator-outer">
                            <div className="mt-separator site-bg-primary" />
                        </div>
                    </div>
                    {/* TITLE END */}
                    {/* OUR CLIENT COROUEL START */}
                    <div className="section-content">
                        <div className="owl-carousel client-logo-carousel owl-btn-vertical-center">

                            {
                                clients.map((_item, index) => {
                                    return <div key={index} className="item">
                                        <div className="ow-client-logo">
                                            <div className="client-logo mt-img-effect on-color">
                                                <NavLink to={route.pages.ABOUT}><FastImage src={_item} alt="" /></NavLink>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                            
                        </div>
                    </div>
                    {/* OUR CLIENT COROUEL START */}
                </div>
            </div>
        </>
    )
}
export default FeaturesPage;