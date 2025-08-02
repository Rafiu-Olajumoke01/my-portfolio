import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Project data configuration
const projects = [
  {
    id: 1,
    title: "Zenith Culinary",
    url: "https://zenithculinary.com",
    image: "/culinary.jpg",
    description: "Zenith Culinary is an interactive website for a culinary school offering cooking and baking courses. It features course listings, enrollment forms, and a user-friendly layout tailored for aspiring chefs. I single-handedly designed, built, and structured the entire platform."
  },
  {
    id: 2,
    title: "Vault Software Company",
    url: "https://new-vault.vercel.app/",
    image: "/vault.jpg",
    description: "Vault Software Company is a corporate tech website I built from the ground up to represent a modern software company. I handled everything — from design to deployment — creating a sleek and professional online presence."
  },
  {
    id: 3,
    title: "Lagos School Of Programming",
    url: "https://lasop.net",
    image: "/lasop.jpg",
    description: "I collaborated with a great team to build the official website for Lagos School of Programming — the leading programming school in Lagos. The platform allows users to explore courses, register, and stay connected with the community."
  },
  {
    id: 4,
    title: "Weather Mapp.",
    url: "https://city-weather-map.vercel.app/",
    image: "/weathermapp.jpg",
    description: "WeatherMapp is a weather app I built from scratch that uses longitude and latitude to fetch real-time weather data. It features temperature, conditions, and location-based updates via geolocation and API integration."
  },
  {
    id: 5,
    title: "Nord Automobile",
    url: "https://nordcom-coded-features.vercel.app/",
    image: "/nord.jpg",
    description: "I redesigned the frontend of Nord Automobile using Framer Motion to create a sleek, responsive, and interactive user experience. The project focused on modern visuals, smooth transitions, and improved usability."
  }
];

// Reusable ProjectCard component
const ProjectCard = ({ project }) => {
  const { title, url, image, description } = project;
  
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex gap-4 items-start hover:opacity-90 transition-opacity group"
    >
      <div className="flex-shrink-0">
        <Image
          src={image}
          alt={`${title} Project Screenshot`}
          width={144}
          height={112}
          className="object-cover rounded-md shadow-sm group-hover:shadow-md transition-shadow"
          priority={project.id <= 2} // Prioritize loading first 2 images
        />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-blue-300 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>
    </Link>
  );
};

// Main Portfolio component
function Portfolio() {
  return (
    <div className="min-h-screen flex px-6 md:px-10 text-lg text-[#C4D0EC]">
      <div className="max-w-4xl w-full">
        <header className="mb-8">
          <h1 className="text-2xl font-bold mb-5 text-white">PROJECTS</h1>
          <p className="leading-relaxed text-justify">
            Here are some of the projects I've worked on recently. They reflect my ability to build responsive and interactive web applications using modern technologies.
          </p>
        </header>

        <main>
          <div className="space-y-10">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Portfolio;