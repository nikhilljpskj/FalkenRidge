  // Header.jsx
  import React, { useState, useEffect } from "react";
  import { Link } from "react-router-dom";
  import '../styles/style.css';
  import './header.css';

  export const Header = (props) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isFading, setIsFading] = useState(false);


    const slides = [
      {
        title: "Empowering Tomorrow's Innovation, Today",
        paragraph: "Building Cutting-Edge Solutions with 20+ Years of Expertise.",
        background: "../img/intro-bg.png",
        link: "#features" // Default link for the first slide
      },
      {
        title: "Pioneering Healthcare Through Technology",
        paragraph: "Advancing Health Care with Cutting-Edge Innovations in Medical Technology.",
        background: "../img/cover.png",
        link: "/biocalculus" // This is now a route
      },
      // Add more slides here
    ];

    useEffect(() => {
      const interval = setInterval(() => {
        setIsFading(true);
        setTimeout(() => {
          setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
          setIsFading(false);
        }, 250); // Match this with the CSS transition duration
      }, 4000);
      return () => clearInterval(interval);
    }, [slides.length]);

    const nextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);

    };

    const prevSlide = () => {
      setCurrentSlide((prevSlide) => 
        (prevSlide - 1 + slides.length) % slides.length
      );
    };

    return (
      <header id="header">
        <div
          className="intro"
          style={{ backgroundImage: `url(${slides[currentSlide].background})` }}
        >
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="intro-text d-flex justify-content-center align-items-center">
                  <h2
                    className={`intro-tagline ${isFading ? "fading" : ""}`}
                    onAnimationEnd={() => setIsFading(false)}
                  >
                    {slides[currentSlide].title}
                  </h2>
                  <p className="text-center">{slides[currentSlide].paragraph}</p>
                  {slides[currentSlide].link.startsWith("/") ? (
                    <Link
                      to={slides[currentSlide].link}
                      className="btn buttons custom btn-lg page-scroll"
                    >
                      Learn More
                    </Link>
                  ) : (
                    <a
                      href={slides[currentSlide].link}
                      className="btn buttons custom btn-lg page-scroll"
                    >
                      Learn More
                    </a>
                  )}
                </div>
              </div>
            </div>
            <button className="slide-arrow left-arrow" onClick={prevSlide}>
              ‹
            </button>
            <button className="slide-arrow right-arrow" onClick={nextSlide}>
              ›
            </button>
          </div>
        </div>
      </header>
    );
  };
