import {useEffect, React} from 'react';
import './home.css';


export const Home = () => {
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
    document.querySelectorAll('.fade-in-element').forEach(section => {
      observer.observe(section);
    });
  }, []);

  return (
    <div className="fade-in-element home-container d-flex row">
      <div className="home-left col-md-12 col-md-8">
        <h1 className='text-left'>Biocalculus</h1>
        <h2>Biocalculus Holter Monitor Device /ELR Device</h2>
        <p className='para'>
        Monitor Your Heart Anywhere, Anytime with Our Advanced ELR and Holter Monitor Device. The Biocalculus Holter Monitor and its mobile application are designed to continuously measure, record, and periodically transmit physiological data. <br /><br />The system is ideal for patients who require monitoring for the detection of non-lethal cardiac arrhythmias. This Holter monitor is a type of portable electrocardiogram (ECG), providing real-time monitoring of your heart's activity directly to your smartphone.
        </p>
        <a href="#contact" class="book-now-btn">Book Now</a>
      </div>
      <div className="home-right col-md-12 col-md-4">
        <img src="../img/biocalculus.png" alt="Biocalculus" className="biocalculus-image" />
      </div>
    </div>
  );
};
