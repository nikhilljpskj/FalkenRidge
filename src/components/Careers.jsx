// careers.jsx
import React, { useState, useEffect } from "react";
import { Navigation } from './navigation';
import { Contact } from './contact'; 
import JsonData from "../data/data.json";
import SmoothScroll from "smooth-scroll";

import { CareersAbout } from "./careersabout";
import { OpenPositions } from "./openpositions";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

export const Careers = () => {
  const [landingPageData, setLandingPageData] = useState({});
  
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
        
      <Navigation />
      <CareersAbout />
      <OpenPositions />
      <Contact data={landingPageData.Contact} />

    </div>
  );
};
