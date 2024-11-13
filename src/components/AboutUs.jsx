import React from 'react';

const AboutUs = () => {
  return (
    <div className="about-us">
      <header className="about-header">
        <h1>About Us</h1>
        <p>Your trusted platform for booking appointments and connecting with healthcare professionals.</p>
      </header>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          We aim to make healthcare accessible and convenient for everyone. Our platform connects patients
          with qualified doctors and healthcare providers, allowing for seamless appointment scheduling and
          consultations.
        </p>
      </section>

      <section className="vision">
        <h2>Our Vision</h2>
        <p>
          To empower patients with information and technology, ensuring they have the resources to make
          informed health decisions. We envision a world where healthcare is just a click away.
        </p>
      </section>

      <section className="values">
        <h2>Our Values</h2>
        <ul>
          <li>Integrity: We uphold honesty and transparency in all our interactions.</li>
          <li>Innovation: We constantly strive to improve our services and user experience.</li>
          <li>Compassion: We care about our patients and aim to provide the best possible care.</li>
          <li>Accessibility: We believe that healthcare should be available to everyone, everywhere.</li>
        </ul>
      </section>

      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="member">
            <img src="https://www.citizenshospitals.com/static/uploads/130789a4-764e-4ee3-88fe-68f9278452d6-1692966652977.png" alt="Team Member 1" />
            <h3>Dr. Jane Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="member">
            <img src="https://snibbs.co/cdn/shop/articles/What_are_the_Challenges_of_Being_a_Doctor_1001x665.jpg?v=1684314843" alt="Team Member 2" />
            <h3>Dr. John Smith</h3>
            <p>Chief Medical Officer</p>
          </div>
          {/* Add more team members as needed */}
        </div>
      </section>

     
    </div>
  );
};

export default AboutUs;
