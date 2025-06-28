import React from "react";

const About = () => {
  return (
    <div className="about-page py-16 md:py-20 min-h-screen">
      <div className="container mx-auto flex flex-col items-center justify-center h-[calc(100vh-10rem)]">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          About Our Digital Library
        </h1>

        <section className="mission-section mb-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg leading-relaxed px-4 ">
            Our mission is to provide free and easy access to a vast collection
            of digital books for everyone, everywhere. We believe in the power
            of knowledge and the importance of reading for personal and
            professional growth. We are committed to creating a user-friendly
            platform that makes reading and learning an enjoyable experience for
            all.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
