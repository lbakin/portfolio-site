import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const works = [
  {
    title: 'On Approval',
    description: 'Fine art rental service',
    image: '/images/OnApprovalRoom.jpg',
    previewImage: '/images/OnApprovalPreview.png',
    link: 'https://www.onapproval.com',
  },
  {
    title: 'Graber',
    description: 'E-commerce site for custom window treatments brand',
    image: '/images/graber-golden.png',
    previewImage: '/images/GraberPreview.png',
    link: 'https://www.graberblinds.com',
  },
  {
    title: 'Wisconsin Dept of Children and Families',
    image: '/images/kids-classroom.jpg',
    description: 'Govt office for childcare needs',
    previewImage: '/images/DCFPreview.png',
    link: 'https://dcf.wisconsin.gov',  
  },
  {
    title: 'Terrain Guessr',
    image: '/images/TerrainGuessr.png',
    description: 'Locate yourself on Earth using only a terrain map',
    previewImage: '/images/TerrainGuessrPreview2.png',
    link: 'https://terrainguessr.netlify.app',  
  },
  {
    title: 'More Projects',
    image: '',
    description: 'DealerOn builds & other client work',
    previewImage: '',
    link: '',
  }
];

const FeaturedWorks = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const refs = useRef({ works: [], previews: [] });

  const handleMouseEnter = (index, event) => {
    setHoveredIndex(index);
    const preview = refs.current.previews[index];

    preview.style.opacity = 1;
    preview.style.zIndex = 10;
  };

  const handleMouseLeave = (index) => {
    setHoveredIndex(null);
    const preview = refs.current.previews[index];
    preview.style.opacity = 0;
  };


  useEffect(() => {
    gsap.fromTo(
      refs.current.works,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.3,
        duration: 1,
        ease: 'power3.out',
      }
    );
  }, []);

  return (
    <section 
      id="works"
      className={`pb-28 sm:pb-52 transition-colors duration-300 md:px-14 ${
        hoveredIndex !== null ? 'bg-teal-200' : 'bg-slate-200'
      }`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-6xl py-24 text-center uppercase tracking-wider"> <span className="flair-word text-7xl">F</span>eatured Works</h2>
        <div className="flex flex-wrap justify-between gap-12 sm:gap-32 space-y-2 sm:space-y-16 relative">
          {works.map((work, index) => (
            <div
              key={index}
              className={`work-content group-hover:bg-teal-500 transition duration-300 ease-in-out relative group md:w-2/3 w-full flex flex-row ${
                index % 3 === 0 ? 'ml-auto' : index % 3 === 1 ? ' mr-auto' : ' mx-auto'
              }`}
              
              ref={(el) => (refs.current.works[index] = el)}
              onMouseEnter={(e) => handleMouseEnter(index, e)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <a href={work.link} target="_blank" className="block relative overflow-hidden hover:grayscale">
                <img
                  src={work.image}
                  alt={work.title}
                  className={`w-full object-cover rounded-xl`}
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center text-white p-6 transition-opacity duration-300 rounded-xl">
                  <h3 className="text-xl font-semibold mb-2 md:w-2/5 lg:w-1/2">{work.title}</h3>
                  <p className="sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:w-1/3">{work.description}</p>
                </div>
              </a>
              <div
                className="preview absolute rounded-xl z-10 hidden md:block -right-10 -top-20 flex-shrink-0"
                ref={(el) => (refs.current.previews[index] = el)}
                style={{ width: '300px', height: '450px', opacity: 0, zIndex: 10 }}
              >
                <img
                  src={work.previewImage}
                  alt={`${work.title} preview`}
                  className="w-full h-full object-cover shadow-lg rounded-xl z-10 p-2 border bg-gray-400 bg-opacity-60"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorks;
