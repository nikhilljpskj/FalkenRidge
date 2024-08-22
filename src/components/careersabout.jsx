import {React,useEffect} from 'react';
import './careersabout.css';


export const CareersAbout = () => {
  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('loaded');
          observer.unobserve(entry.target); // Stop observing once the class is added
        }
      });
    }, options);

    // Observe each section
    document.querySelectorAll('.section').forEach(section => {
      observer.observe(section);
    });
  }, []);


  return (
    <div className="career-content-container">
      <h1 className="build-a-career text-center">
        Build a Career with Falken Ridge Ventures
      </h1>
      <p className='header-intro text-center'>
        At Falken Ridge Ventures, we’re not just offering jobs-we’re inviting
        you to be part of a thriving community dedicated to innovation and
        growth. With exciting opportunities across multiple cities, we provide a
        dynamic environment where your talents can truly shine. Embrace a career
        with us and help shape the future of technology.
      </p>
      <div className="section explore-opportunities row">
        <div className="section-text-area col-xs-12 col-md-6 ">
          <h2>Explore Opportunities</h2>
          <p>
            Join Falken Ridge Ventures and become a pivotal part of our dynamic
            and expanding team! We’re excited to announce that we’re hiring
            across multiple locations, including Mumbai, Bangalore, Hyderabad,
            and Pune. Whether you’re a seasoned professional or a fresh talent
            eager to make an impact, we offer diverse opportunities to match
            your skills and ambitions.
            {/* We also offer flexible work-from-home opportunities to accommodate
            diverse work styles. */}
            <ul className="opportunity-list">
              <li>
                <i className="fa fa-map-marker" aria-hidden="true"></i> Offices
                in Mumbai, Bangalore, Hyderabad, and Pune
              </li>
              <li>
                <i className="fa fa-home" aria-hidden="true"></i> Flexible
                work-from-home opportunities
              </li>
              <li>
                <i className="fa fa-briefcase" aria-hidden="true"></i> Dynamic
                and growing team environment
              </li>
              <li>
                <i className="fa fa-user" aria-hidden="true"></i> Diverse work
                styles accommodated
              </li>
            </ul>
          </p>
        </div>
        <div className="section-image col-md-6">
          <img
            src="img/careers/opportunities.jpg"
            className="img-fluid"
            width="100%"
            alt="opportunities"
          />
        </div>
      </div>
      <div className="section explore-opportunities row">
        <div className="section-image col-md-6">
          <img
            src="img/careers/work-environment.jpg"
            className="img-fluid"
            width="100%"
            alt="opportunities"
          />
        </div>
        <div className="section-text-area col-md-6">
          <h2>Culture and Work Environment</h2>
          <p>
            At Falken Ridge Ventures, we are committed to creating an
            environment where innovation thrives. Our culture is centered around
            a strong commitment to delivering impactful solutions while avoiding
            traditional organizational politics. We align our team’s interests
            with our clients’ needs, fostering a collaborative and supportive
            atmosphere.
          </p>
          <p>
            <ul class="opportunity-list">
              <li>
                <i class="fa fa-cogs" aria-hidden="true"></i>
                R&D and emerging technologies like AI, IoT, and Blockchain
              </li>
              <li>
                <i class="fa fa-users" aria-hidden="true"></i>
                Employee engagement and empowerment
              </li>
              <li>
                <i class="fa fa fa-money" aria-hidden="true"></i>
                Employee incentives and benefits
              </li>
              <li>
                <i class="fa fa-line-chart" aria-hidden="true"></i>
                Long-term growth and satisfaction
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};
