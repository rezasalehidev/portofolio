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
                    <h2>Sample Projects</h2>
                    <p style={{ fontWeight: "bold" }}>Please turn on your VPN before viewing the sample projects</p>
                </div>
                <div className="row">
                    <div className="portfolio-items">
                        <div className="col-sm-6 col-md-4 col-lg-4 col-xs-12 margin-up" data-aos="fade-up-left">
                            <div class="ih-item square effect13 left_to_right">
                                <a href="http://chime-beauty.com/" title="Chime Beauty" data-lightbox-gallery="gallery1">
                                    <div class="img">
                                        <img src="img/portfolio/06-large.jpg" className="img-responsive" alt="Project Title" />{" "}
                                    </div>
                                    <div class="info">
                                        <h3>Chime Beauty</h3>
                                        <p>Selling cosmetic products</p>
                                    </div>
                                </a>{" "}
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-4 col-xs-12 margin-up" data-aos="fade-up-left">
                            <div class="ih-item square effect13 left_to_right">
                                <a href="https://infuuse.ai/" title="Infuuse" data-lightbox-gallery="gallery1">
                                    <div class="img">
                                        {" "}
                                        <img src="img/portfolio/02-large.jpg" alt="Project Title" />{" "}
                                    </div>
                                    <div class="info">
                                        <h3>Infuuse</h3>
                                        <p>Social media</p>
                                    </div>
                                </a>{" "}
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-4 col-xs-12 margin-up mb-3" data-aos="fade-up-left">
                            {" "}
                            <div class="ih-item square effect13 left_to_right">
                                <a href="https://play.google.com/store/apps/details?id=io.apsy.chimebeauty&hl=de_CH&gl=US" title="Express state" data-lightbox-gallery="gallery1">
                                    <div class="img">
                                        {" "}
                                        <img src="img/portfolio/01-large.jpg" className="img-responsive" alt="Project Title" />{" "}
                                    </div>
                                    <div class="info">
                                        <h3>Chime Beauty Application</h3>
                                        <p>Selling cosmetic products</p>
                                    </div>
                                </a>{" "}
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-4 col-xs-12 margin-up" data-aos="fade-up-left">
                            <div class="ih-item square effect13 left_to_right">
                                <a href="https://vip.myknitnet.com/login" title="Genus hotels" data-lightbox-gallery="gallery1">
                                    <div class="img">
                                        {" "}
                                        <img src="img/portfolio/03-large.jpg" className="img-responsive" alt="Project Title" />{" "}
                                    </div>
                                    <div class="info">
                                        <h3>myknitnet</h3>
                                        <p>Monitoring solution</p>
                                    </div>
                                </a>{" "}
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-4 col-xs-12 margin-up" data-aos="fade-up-left">
                            <div class="ih-item square effect13 left_to_right">
                                <a href="express-state.com" title="Connect4Healing" data-lightbox-gallery="gallery1">
                                    <div class="img">
                                        {" "}
                                        <img src="img/portfolio/04-large.jpg" className="img-responsive" alt="Project Title" />{" "}
                                    </div>
                                    <div class="info">
                                        <h3>Express State</h3>
                                        <p>buy and sell home</p>
                                    </div>
                                </a>{" "}
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-4 col-xs-12 margin-up" data-aos="fade-up-left">
                            <div class="ih-item square effect13 left_to_right">
                                <a href="https://rezasalehidev.github.io/animateReact/" title="Sample website" data-lightbox-gallery="gallery1">
                                    <div class="img">
                                        {" "}
                                        <img src="img/portfolio/09-large.jpg" className="img-responsive" alt="Project Title" />{" "}
                                    </div>
                                    <div class="info">
                                        <h3>Sample website</h3>
                                    </div>
                                </a>{" "}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
