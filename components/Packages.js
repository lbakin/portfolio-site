import React from 'react';
import { Link as ScrollLink } from 'react-scroll';


const Packages = () => {
  return (
    <section className="bg-gray-100 " id="packages">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl py-12 text-center uppercase tracking-wider"><span className="flair-word text-7xl">P</span>ackages</h2>
        <p className="text-lg text-gray-700 mb-8">
          I want to make getting your website set up as easy and painless for you as possible. If you provide me with some content, I will take care of all the technical work for you.
        </p>
        
        <div className="bg-white shadow-md rounded-lg p-6 mb-8 border-l-4 border-rose-800">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Basic Website Package</h3>
          <p className="text-lg text-gray-700 mb-4">I'll Create a Simple Website for You</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Choose a template:</strong> Tailored to your brand and vision.</li>
            <li><strong>Responsive Layout:</strong> Optimized for desktops, tablets, and mobile devices.</li>
            <li><strong>Up to 5 Sections/Pages:</strong> Intro, About, Services, Contact, and one additional section/page.</li>
            <li><strong>SEO:</strong> Optimized for search engines with relevant meta tags and descriptions.</li>
            <li><strong>Contact Form:</strong> Easy-to-use form for visitors to get in touch.</li>
            <li><strong>Basic Support:</strong> One month of support and updates after launch.</li>
            <li><strong>Documentation:</strong> Information on how your site is setup and how to change images and text.</li>
          </ul>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 mb-8 border-l-4 border-rose-800">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Additional Options</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Custom Design:</strong> Tailored to your brand and vision.</li>
            <li><strong>Google Analytics:</strong> Track and analyze your website’s performance.</li>
            <li><strong>Content Management System (CMS):</strong> Easily change images, videos, and text without coding.</li>
            <li><strong>Blog Integration:</strong> Set up a blog to share updates and engage with your audience.</li>
          </ul>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-lg text-gray-700 mb-4">Interested in getting started? Contact me below to discuss details and get your website up and running!</p>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className="text-rose-800 cursor-pointer"
          >
            <div className="text-rose-800 text-9xl animate-bounce">&#x2193;</div>
          </ScrollLink>
        </div>
      </div>
    </section>
  );
};

export default Packages;
