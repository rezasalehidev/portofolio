import AOS from "aos";
import React, { useEffect } from "react";

export const About = (props) => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);

    return (
        <div id="about">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-6">
                        <div className="about-text" data-aos="fade-left">
                            <h2 style={{ textAlign: "left" }} className="animate__animated animate__fadeIn">
                                About me
                            </h2>
                            <p style={{ textAlign: "left" }}>{props.data ? props.data.paragraph : "loading..."}</p>
                            <h3 className="student animate__animated animate__fadeIn" style={{ textAlign: "left" }}>
                                Professional experiences
                            </h3>
                            <div className="list-style">
                                <div className="col-lg-12 col-sm-12 col-xs-12">
                                    <ul>{props.data ? props.data.Why.map((d, i) => <li key={`${d}-${i}`}>{d}</li>) : "loading"}</ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-6">
                        {" "}
                        <img data-aos="fade-right" src="img/sd.jpg" className="img-responsive mobileImg animate__animated animate__swing animate__infinite	infinite animatedhover" alt="" />{" "}
                    </div>
                </div>
            </div>
        </div>
    );
};
