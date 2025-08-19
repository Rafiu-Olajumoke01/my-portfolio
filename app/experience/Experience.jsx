import React, { useState } from 'react';
import Image from 'next/image';

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      id: 0,
      company: 'Lagos School of Programming',
      title: 'Student & Intern',
      period: 'Certificate + 3 months Internship',
      location: 'Lagos, Nigeria',
      url: 'https://lasop.net',
      description: [
        'Completed an intensive programming course focused on web development with emphasis on React, JavaScript, and modern web technologies',
        'Participated in a 3-month internship program working on real-world projects and collaborating with development teams',
        'Contributed to building the official LASOP website, implementing responsive design and user-friendly interfaces',
        'Gained hands-on experience in full-stack development, version control, and agile development methodologies'
      ],
      imageSrc: '/olajumoke cert.jpg',
    },
    {
      id: 1,
      company: 'Vault Software Company',
      title: 'Full Stack Developer',
      period: 'Full-time',
      location: 'Lagos, Nigeria',
      url: 'https://new-vault.vercel.app/',
      description: [
        'Developed and maintained scalable web applications using React, Next.js, and modern JavaScript frameworks',
        'Built the complete corporate website from ground up, handling both frontend and backend development',
        'Implemented responsive design principles and modern UI/UX patterns for optimal user experience',
        'Collaborated with cross-functional teams to deliver high-quality software solutions on schedule',
        'Utilized version control systems and deployment platforms like Vercel for seamless project delivery'
      ],
    },
    {
      id: 2,
      company: 'Freelance Developer',
      title: 'Software Engineer',
      period: 'Remote Contractor',
      location: 'Various Clients',
      description: [
        'Delivered custom web solutions for clients including Zenith Culinary, Cuisinetreat, and Dejaneeseconcepts',
        'Single-handedly designed, developed, and deployed complete web platforms from concept to production',
        'Specialized in React, Next.js, and modern web technologies to create interactive and responsive websites',
        'Managed client relationships, project timelines, and technical requirements across multiple concurrent projects',
        'Implemented features like course enrollment systems, food delivery platforms, and business websites'
      ],
    },
    {
      id: 3,
      company: 'Remote Collaboration',
      title: 'Frontend Developer',
      period: 'Contract - Remote',
      location: 'Riyadh, Saudi Arabia (Remote)',
      description: [
        'Collaborated remotely with Saudi-based development team to deliver quality software solutions',
        'Focused on frontend development using React and modern animation libraries like Framer Motion',
        'Redesigned and enhanced user interfaces for automobile industry clients, improving user experience',
        'Maintained effective communication and coordination across different time zones and cultural contexts',
        'Applied agile development methodologies and remote collaboration best practices'
      ],
    },
  ];

  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-24">
      <div className="mb-16">
        <h2 className="flex items-center text-clamp-heading font-semibold text-lightest-slate mb-2">
          <span className="font-mono text-teal-300 text-xl mr-2">02.</span>
          Where I've Worked
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Tab Navigation */}
        <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible mb-8 lg:mb-0 lg:mr-12">
          <div className="flex lg:flex-col border-b lg:border-b-0 lg:border-l border-lightest-navy">
            {experiences.map((exp, index) => (
              <button
                key={exp.id}
                onClick={() => setActiveTab(index)}
                className={`relative px-6 py-4 text-sm font-mono whitespace-nowrap text-left transition-all duration-250 ${
                  activeTab === index
                    ? 'text-teal-300 bg-light-navy'
                    : 'text-slate hover:text-teal-300 hover:bg-light-navy'
                }`}
                style={{
                  borderLeft: activeTab === index ? '2px solid #64FFDA' : '2px solid transparent',
                }}
              >
                {exp.company}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="flex-1 min-h-[400px]">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`transition-opacity duration-250 ${
                activeTab === index ? 'opacity-100' : 'opacity-0 absolute pointer-events-none'
              }`}
            >
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-lightest-slate mb-1">
                  {exp.title}{' '}
                  <span className="text-teal-300">
                    @{' '}
                    {exp.url ? (
                      <a
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {exp.company}
                      </a>
                    ) : (
                      exp.company
                    )}
                  </span>
                </h3>
                <p className="font-mono text-sm text-light-slate mb-1">{exp.period}</p>
                <p className="font-mono text-sm text-light-slate italic">{exp.location}</p>
              </div>

              {/* Certificate Image */}
              {exp.imageSrc && (
                <div className="mb-6">
                  <div className="relative w-full max-w-md h-64 rounded border border-lightest-navy">
                    <Image
                      src={exp.imageSrc}
                      alt={`${exp.company} certificate`}
                      fill
                      className="object-contain rounded"
                    />
                  </div>
                </div>
              )}

              {/* Description List */}
              <ul className="space-y-3">
                {exp.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="relative pl-6 text-light-slate leading-relaxed">
                    <span className="absolute left-0 top-2 text-teal-300 text-sm">▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}