import React from "react";
import '../styles/style.css';
import Redeemer_Company_Brochure_Final from '../image/Redeemer_Company_Brochure_Final.pdf';

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="about-us-download-row d-flex flex-column justify-content-center align-items-center col-xs-12 col-md-6 text-center">
            <img src="img/about.jpg" className="img-about" alt="" />
            <p>
              Unlock detailed insights into our services and offerings. Download
              our comprehensive brochure now!
            </p>
            <a
              href={Redeemer_Company_Brochure_Final}
              download="Redeemer_Company_Brochure_Final.pdf"
              className="btn buttons custom btn-lg"
            >
              Download
            </a>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <p className="para">
                {props.data ? props.data.paragraph : "loading..."}
              </p>
              <p className="para">
                {props.data ? props.data.paragraph1 : "loading..."}
              </p>
              <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
