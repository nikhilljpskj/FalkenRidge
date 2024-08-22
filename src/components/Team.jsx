import React from "react";
import './Team.css';

export const Team = (props) => {
  return (
    <div id="team" className="text-center d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-12 section-title">
            <h2>Meet the Team</h2>
            <p style={{ textAlign: 'center' }}>
              Leading Our Mission to Transform Your Digital Future
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div id="team-grid">
            {props.data
              ? props.data.map((d, i) => (
                  <div key={`${d.name}-${i}`} className="team-member">
                    <div className="thumbnail">
                      <div className="img-container">
                        <img src={d.img} alt="..." className="team-img" />
                      </div>
                      <div className="caption">
                        <h4>{d.name}</h4>
                        <p>{d.job}</p>
                      </div>
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
    </div>
  );
};
