import React, { useEffect } from "react";
import AOS from "aos";
export const Navigation = (props) => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
        });

        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const menu = document.getElementById("menu");

            if (scrollTop > 30) {
                menu.classList.add("blur-active");
            } else {
                menu.classList.remove("blur-active");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav id="menu" className="navbar navbar-default navbar-fixed-top" style={{ backdropFilter: "blur(10px)" }}>
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        {" "}
                        <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span>{" "}
                    </button>
                    <a className="navbar-brand page-scroll" href="#page-top" data-aos="fade-up">
                        Reza salehi
                    </a>{" "}
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right" data-aos="fade-up">
                        <li>
                            <a href="#about" className="page-scroll">
                                About me
                            </a>
                        </li>
                        <li>
                            <a href="#services" className="page-scroll">
                                Skills
                            </a>
                        </li>
                        <li>
                            <a href="#portfolio" className="page-scroll">
                                projects
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="page-scroll">
                                Call
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
