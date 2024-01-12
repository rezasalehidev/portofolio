import AOS from "aos";
import React, { useEffect } from "react";

export const Contact = (props) => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);

    return (
        <div>
            <div id="contact">
                <div className="container">
                    <div className="col-md-3 col-md-offset-1 contact-info" data-aos="flip-up">
                        <div className="contact-item">
                            <p>
                                <span>
                                    <i className="fa fa-map-marker"></i> Address
                                </span>
                                {props.data ? props.data.address : "loading"}
                            </p>
                        </div>
                        <div className="contact-item">
                            <p>
                                <span>
                                    <i className="fa fa-envelope-o"></i> Email
                                </span>{" "}
                                {props.data ? props.data.email : "loading"}
                            </p>
                        </div>
                    </div>
                    <div className="col-md-12 col-xs-12" data-aos="zoom-in-up">
                        <div className="row">
                            <div className="social">
                                <ul>
                                    <li>
                                        <a href={props.data ? props.data.Github : "/"}>
                                            <i className="fa fa-github"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href={props.data ? props.data.twitter : "/"}>
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href={props.data ? props.data.linkedin : "/"}>
                                            <i className="fa fa-linkedin"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
