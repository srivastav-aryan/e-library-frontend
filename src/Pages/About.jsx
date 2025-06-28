import React from 'react';

const About = () => {
  return (
    <div className="about-page py-16 md:py-20">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">About Our Digital Library</h1>

        <section className="mission-section mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg leading-relaxed px-4">
            Our mission is to provide free and easy access to a vast collection of digital books for everyone, everywhere. We believe in the power of knowledge and the importance of reading for personal and professional growth. We are committed to creating a user-friendly platform that makes reading and learning an enjoyable experience for all.
          </p>
        </section>

        <section className="team-section mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            <div className="team-member">
              <img src="https://via.placeholder.com/150" alt="Team Member" className="mx-auto mb-4 rounded-full"/>
              <h3 className="text-2xl font-bold">Jane Doe</h3>
              <p className="text-gray-600">Lead Developer</p>
            </div>
            <div className="team-member">
              <img src="https://via.placeholder.com/150" alt="Team Member" className="mx-auto mb-4 rounded-full"/>
              <h3 className="text-2xl font-bold">John Smith</h3>
              <p className="text-gray-600">UI/UX Designer</p>
            </div>
            <div className="team-member">
              <img src="https://via.placeholder.com/150" alt="Team Member" className="mx-auto mb-4 rounded-full"/>
              <h3 className="text-2xl font-bold">Peter Jones</h3>
              <p className="text-gray-600">Project Manager</p>
            </div>
          </div>
        </section>

        <section className="contact-section text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Us</h2>
          <p className="text-lg mb-4 px-4">Have questions or suggestions? We'd love to hear from you!</p>
          <a href="mailto:contact@digitallibrary.com" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Email Us
          </a>
        </section>
      </div>
    </div>
  );
};

export default About;
