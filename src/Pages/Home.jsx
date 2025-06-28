import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      <header className="hero-section text-center py-12 sm:py-16 md:py-24 bg-white">
        <div className="container mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Welcome to Your Digital Library</h1>
          <p className="text-base sm:text-lg md:text-xl mb-8 px-4 sm:px-6">Discover, read, and manage your favorite books all in one place.</p>
          <Link to={"/auth/login"} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Get Started
          </Link>
        </div>
      </header>

      <section className="features-section py-16 md:py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Why Choose Our Library?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            <div className="feature p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-2">Vast Collection</h3>
              <p>Access thousands of books from various genres. From timeless classics to modern bestsellers, we have it all.</p>
            </div>
            <div className="feature p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-2">Read Anywhere</h3>
              <p>Sync your reading progress across all your devices. Start on your phone, continue on your tablet or laptop.</p>
            </div>
            <div className="feature p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-2">Personalized Shelves</h3>
              <p>Organize your books into custom shelves. Keep track of what you've read, what you're reading, and what you want to read next.</p>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Home;


