import React from 'react';
import './openpositions.css';

export const OpenPositions = () => {
  return (
    <div className="section open-positions-container">
      <h2>Open Positions</h2>
      <p>Redeemer is proud to be an Equal Opportunity Employer!</p>

      <div className="position-category">
        <h3>PROJECT MANAGEMENT</h3>
        <ul>
          <li>
            <a href="#">Project Manager - L1(8 Nos)- Project Management</a>
            <span>Fresher</span>
            <span>All Locations</span>
          </li>
        </ul>
      </div>

      <div className="position-category">
        <h3>SOFTWARE DEVELOPMENT</h3>
        <ul>
          <li>
            <a href="#">Software Engineer - L4(2 Nos)- Software Engineer</a>
            <span>2-4 Years</span>
            <span>All Locations</span>
          </li>
          <li>
            <a href="#">AI/ML Engineer (L1)(7 Nos)- AI/ML</a>
            <span>Fresher</span>
            <span>All Locations</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
