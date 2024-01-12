import React, { useRef, useEffect } from "react";
import AOS from "aos";
import { init } from "ityped";

export const Header = (props) => {
    const textRef = useRef();
    const wrapperRef = useRef(null);

    useEffect(() => {
        init(textRef.current, {
            startDelay: 650,
            typeSpeed: 220,
            showCursor: true,
            strings: ["👋 Hi, I’m reza", "Welcome to my website", "👀 🙏"],
        });

        AOS.init({
            duration: 2000,
        });
    }, []);

    return (
        <header id="header">
            <div ref={wrapperRef}>
                <div className="intro">
                    <div className="overlay">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 col-md-offset-2 col-xs-12 intro-text">
                                    <h2 style={{ marginBottom: "50px" }}>
                                        {/* {props.data ? props.data.title : "Loading"} */}
                                        <span style={{ color: "red" }} className="mobileP" ref={textRef}></span>
                                    </h2>
                                    <p>{props.data ? props.data.paragraph : "Loading"}</p>
                                    <a href="#about" className="btn btn-custom btn-lg page-scroll">
                                        About me
                                    </a>{" "}
                                    {/* <img src="img/air-balloon.png" className="header-image" alt="profile" /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
