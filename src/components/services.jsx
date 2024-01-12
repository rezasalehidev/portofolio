import ProgressBar from 'react-bootstrap/ProgressBar'
import AOS from 'aos';
import React,{useEffect} from 'react'


export const Services = (props) => {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);

  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4" data-aos="flip-up" >
                  {" "}
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                    <ProgressBar striped variant="success" now={d.percent} />
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
