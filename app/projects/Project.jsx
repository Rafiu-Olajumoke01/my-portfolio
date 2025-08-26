import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Project data configuration
const projects = [
  {
    id: 1,
    title: "Myxellia Dashboard",
    url: "https://myxellia-rouge.vercel.app/",
    image: "/myxellia.jpg", // Make sure this image exists in your /public folder
    description: "Myxellia Dashboard is a clean, functional, and responsive admin interface I designed and built to showcase my ability in dashboard UI/UX. It integrates interactive components and thoughtful design to provide clarity and performance.",
    tech: ["Next.js", "Tailwind CSS", "Responsive UI", "Dashboard Design"]
  },
  {
    id: 2,
    title: "Cuisinetreat",
    url: "https://cuisinetreat.onrender.com",
    image: "/cuisinetreat.jpg",
    description: "A comprehensive food delivery platform featuring restaurant listings, menu browsing, and order management. Built with modern web technologies to provide seamless user experience.",
    tech: ["React", "Node.js", "MongoDB", "Express"]
  },
  {
    id: 3,
    title: "Zenith Culinary",
    url: "https://zenithculinary.com",
    image: "/culinary.jpg",
    description: "Zenith Culinary is an interactive website for a culinary school offering cooking and baking courses. It features course listings, enrollment forms, and a user-friendly layout tailored for aspiring chefs. I single-handedly designed, built, and structured the entire platform.",
    tech: ["Next.js", "CSS3", "JavaScript", "Responsive Design"]
  },
  {
    id: 4,
    title: "Vault Software Company",
    url: "https://new-vault.vercel.app/",
    image: "/vault.jpg",
    description: "Vault Software Company is a corporate tech website I built from the ground up to represent a modern software company. I handled everything — from design to deployment — creating a sleek and professional online presence.",
    tech: ["React", "Tailwind CSS", "Vercel", "Modern UI/UX"]
  },
  {
    id: 5,
    title: "Dejaneeseconcepts",
    url: "https://dejaneeseconcepts.com.ng",
    image: "/dejaneese.jpg",
    description: "A business website showcasing creative concepts and services. Features modern design principles with focus on user experience and brand representation.",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"]
  },
  {
    id: 6,
    title: "Lagos School Of Programming",
    url: "https://lasop.net",
    image: "/lasop.jpg",
    description: "I collaborated with a great team to build the official website for Lagos School of Programming — the leading programming school in Lagos. The platform allows users to explore courses, register, and stay connected with the community.",
    tech: ["React", "Team Collaboration", "Educational Platform", "Community Features"]
  },
  {
    id: 7,
    title: "Weather Mapp",
    url: "https://city-weather-map.vercel.app/",
    image: "/weathermapp.jpg",
    description: "WeatherMapp is a weather app I built from scratch that uses longitude and latitude to fetch real-time weather data. It features temperature, conditions, and location-based updates via geolocation and API integration.",
    tech: ["JavaScript", "Weather API", "Geolocation", "Real-time Data"]
  },
  {
    id: 8,
    title: "Nord Automobile",
    url: "https://nordcom-coded-features.vercel.app/",
    image: "/nord.jpg",
    description: "I redesigned the frontend of Nord Automobile using Framer Motion to create a sleek, responsive, and interactive user experience. The project focused on modern visuals, smooth transitions, and improved usability.",
    tech: ["React", "Framer Motion", "Responsive Design", "Animation"]
  }
];

// External link icon component
const ExternalLinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15,3 21,3 21,9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

// Reusable ProjectCard component
const ProjectCard = ({ project, index }) => {
  const { title, url, image, description, tech } = project;
  const isEven = index % 2 === 0;

  return (
    <div className="relative grid gap-2 grid-cols-12 items-center">
      {/* Project Image */}
      <div
        className={`relative col-span-12 lg:col-span-7 ${
          isEven ? 'lg:col-start-1' : 'lg:col-start-6'
        }`}
      >
        <div className="relative">
          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="block relative z-10"
          >
            <Image
              src={image}
              alt={`${title} Project Screenshot`}
              width={700}
              height={438}
              className="object-cover rounded w-full h-auto transition-all duration-300"
              priority={index < 3}
            />
          </Link>
        </div>
      </div>

      {/* Project Content */}
      <div
        className={`relative col-span-12 lg:col-span-6 p-6 lg:p-0 ${
          isEven ? 'lg:col-start-7 text-right' : 'lg:col-start-1 text-left'
        }`}
      >
        <div className="relative z-20">
          <p className="font-mono text-teal-300 text-sm mb-2">Featured Project</p>
          <h3 className="text-clamp-large font-semibold text-lightest-slate mb-4">
            <Link 
              href={url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-teal-300 transition-colors"
            >
              {title}
            </Link>
          </h3>
          
          <div className="relative p-6 bg-light-navy rounded shadow-lg lg:shadow-2xl">
            <p className="text-light-slate text-base leading-relaxed">
              {description}
            </p>
          </div>

          {/* Tech Stack */}
          <ul
            className={`flex flex-wrap gap-2 mt-6 font-mono text-sm text-light-slate ${
              isEven ? 'justify-end' : 'justify-start'
            }`}
          >
            {tech.map((techItem, techIndex) => (
              <li key={techIndex} className="whitespace-nowrap">
                {techItem}
              </li>
            ))}
          </ul>

          {/* External Link */}
          <div
            className={`flex items-center gap-4 mt-4 ${
              isEven ? 'justify-end' : 'justify-start'
            }`}
          >
            <Link
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lightest-slate hover:text-teal-300 transition-colors"
              aria-label={`Visit ${title} (opens in new tab)`}
            >
              <ExternalLinkIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Portfolio component
function Portfolio() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
      <div className="mb-16">
        <h2 className="flex items-center text-clamp-heading font-semibold text-lightest-slate mb-2">
          <span className="font-mono text-teal-300 text-xl mr-2">03.</span>
          Some Things I've Built
        </h2>
      </div>

      <div className="space-y-32">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
