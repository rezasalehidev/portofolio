import AOS from "aos";
import React, { useEffect } from "react";
export const Gallery = (props) => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);
    return (
        <div id="portfolio" className="text-center">
            <div className="container">
                <div className="section-title">
                    <h2>Projects</h2>
                    <p style={{ fontWeight: "bold" }}>Please turn on your VPN before viewing the sample projects</p>
                </div>
                <div className="row">
                    <div className="portfolio-items">
                        <div className="col-sm-6 col-md-4 col-lg-4 col-xs-12 margin-up mb relative" data-aos="fade-up-left">
                            <div class="ih-item circle colored effect1">
                                <a href="http://chime-beauty.com/" title="Chime Beauty" data-lightbox-gallery="gallery1">
                                    <div class="img">
                                        <img src="img/portfolio/SolidImage.png" className="img-responsive" alt="Project Title" />{" "}
                                    </div>
                                    <div class="info">
                                        <h3>Chime Beauty</h3>
                                        <p>Selling cosmetic products</p>
                                    </div>
                                </a>{" "}
                            </div>
                            <h3 className="absolute" style={{ fontSize: 30, width: "60%", display: "flex", justifyContent: "center" }}>
                                Chime Beauty
                            </h3>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-4 col-xs-12 margin-up mb relative" data-aos="fade-up-left">
                            <div class="ih-item circle colored effect1">
                                <a href="https://app.infuuse.ai/" title="Infuuse" data-lightbox-gallery="gallery1">
                                    <div class="img">
                                        {" "}
                                        <img src="img/portfolio/SolidImage.png" alt="Project Title" />{" "}
                                    </div>
                                    <div class="info">
                                        <h3>Infuuse</h3>
                                        <p>Social media</p>
                                    </div>
                                </a>{" "}
                            </div>
                            <h3 className="absolute" style={{ fontSize: 30, width: "60%", display: "flex", justifyContent: "center" }}>
                                Infuuse
                            </h3>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-4 col-xs-12 margin-up mb relative" data-aos="fade-up-left">
                            {" "}
                            <div class="ih-item circle colored effect1">
                                <a href="https://vip.myknitnet.com/login" title="myKnitnet" data-lightbox-gallery="gallery1">
                                    <div class="img">
                                        {" "}
                                        <img src="img/portfolio/SolidImage.png" className="img-responsive" alt="Project Title" />{" "}
                                    </div>
                                    <div class="info">
                                        <h3>myKnitnet</h3>
                                        <p>Monitoring solution</p>
                                    </div>
                                </a>{" "}
                            </div>
                            <h3 className="absolute" style={{ fontSize: 30, width: "60%", display: "flex", justifyContent: "center" }}>
                                myKnitnet
                            </h3>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-4 col-xs-12 margin-up mb relative" data-aos="fade-up-left">
                            <div class="ih-item circle colored effect1">
                                <a href="https://play.google.com/store/apps/details?id=io.apsy.chimebeauty&hl=de_CH&gl=US" title="Chime Beauty" data-lightbox-gallery="gallery1">
                                    <div class="img">
                                        {" "}
                                        <img src="img/portfolio/SolidImage.png" className="img-responsive" alt="Project Title" />{" "}
                                    </div>
                                    <div class="info">
                                        <h3>Chime Beauty</h3>
                                        <p>Selling cosmetic products</p>
                                    </div>
                                </a>{" "}
                            </div>
                            <h3 className="absolute" style={{ fontSize: 30, width: "60%", display: "flex", justifyContent: "center" }}>
                                Chime Beauty App
                            </h3>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-4 col-xs-12 margin-up mb relative" data-aos="fade-up-left">
                            <div class="ih-item circle colored effect1">
                                <a href="https://play.google.com/store/apps/details?id=io.apsy.socialmodel" title="socialmodel" data-lightbox-gallery="gallery1">
                                    <div class="img">
                                        {" "}
                                        <img src="img/portfolio/SolidImage.png" className="img-responsive" alt="Project Title" />{" "}
                                    </div>
                                    <div class="info">
                                        <h3>Social App</h3>
                                    </div>
                                </a>{" "}
                            </div>
                            <h3 className="absolute" style={{ fontSize: 30, width: "60%", display: "flex", justifyContent: "center" }}>
                                Social App
                            </h3>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-4 col-xs-12 margin-up mb  relative" data-aos="fade-up-left">
                            <div class="ih-item circle colored effect1">
                                <a href="https://play.google.com/store/apps/details?id=com.asociar.ecomm" title="asociar" data-lightbox-gallery="gallery1">
                                    <div class="img">
                                        {" "}
                                        <img src="img/portfolio/SolidImage.png" className="img-responsive" alt="Project Title" />{" "}
                                    </div>
                                    <div class="info">
                                        <h3>Apsy E-comm App</h3>
                                    </div>
                                </a>{" "}
                            </div>
                            <h3 className="absolute" style={{ fontSize: 30, width: "60%", display: "flex", justifyContent: "center" }}>
                                Apsy E-comm
                            </h3>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-4 col-xs-12 margin-up  relative" data-aos="fade-up-left">
                            <div class="ih-item circle colored effect1">
                                <a href="https://heyhudu.com/" title="asociar" data-lightbox-gallery="gallery1">
                                    <div class="img">
                                        {" "}
                                        <img src="img/portfolio/SolidImage.png" className="img-responsive" alt="Project Title" />{" "}
                                    </div>
                                    <div class="info">
                                        <h3>Hudu</h3>
                                    </div>
                                </a>{" "}
                            </div>
                            <h3 className="absolute" style={{ fontSize: 30, width: "60%", display: "flex", justifyContent: "center" }}>
                                Hudu
                            </h3>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-4 col-xs-12 margin-up  relative" data-aos="fade-up-left">
                            <div class="ih-item circle colored effect1">
                                <a href="https://qa.socialorder.io/" title="asociar" data-lightbox-gallery="gallery1">
                                    <div class="img">
                                        {" "}
                                        <img src="img/portfolio/SolidImage.png" className="img-responsive" alt="Project Title" />{" "}
                                    </div>
                                    <div class="info">
                                        <h3>Social Order</h3>
                                    </div>
                                </a>{" "}
                            </div>
                            <h3 className="absolute" style={{ fontSize: 30, width: "60%", display: "flex", justifyContent: "center" }}>
                                Social Order
                            </h3>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-4 col-xs-12 margin-up  relative" data-aos="fade-up-left">
                            <div class="ih-item circle colored effect1">
                                <a href="https://qa.propagator.ca/" title="asociar" data-lightbox-gallery="gallery1">
                                    <div class="img">
                                        {" "}
                                        <img src="img/portfolio/SolidImage.png" className="img-responsive" alt="Project Title" />{" "}
                                    </div>
                                    <div class="info">
                                        <h3>Propagator</h3>
                                    </div>
                                </a>{" "}
                            </div>
                            <h3 className="absolute" style={{ fontSize: 30, width: "60%", display: "flex", justifyContent: "center" }}>
                                Propagator
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
