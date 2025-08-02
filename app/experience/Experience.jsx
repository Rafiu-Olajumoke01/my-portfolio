import Image from 'next/image'

export default function Experience() {
  const experiences = [
    {
      title: 'Lagos School of Programming',
      role: 'Student & Intern',
      period: 'Certificate + 3 months Internship',
      description:
        'Completed an intensive programming course focused on web development, followed by a 3-month internship where I applied skills in real-world projects and collaborated with teams.',
      imageSrc: '/olajumoke cert.jpg', // This one is working
      location: 'Lagos, Nigeria',
    },
    {
      title: 'Vault',
      role: 'Software Developer',
      period: 'Full-time',
      description:
        'Worked on developing and maintaining scalable web applications, contributing to both frontend and backend solutions using modern technologies.',
      // Removed external image
      location: 'Lagos, Nigeria',
    },
    {
      title: 'Remote Developer',
      role: 'Software Engineer',
      period: 'Remote - Riyadh, Saudi Arabia',
      description:
        'Collaborated remotely with a Saudi-based team to deliver quality software solutions, focusing on remote teamwork, communication, and agile methodologies.',
      // Removed external image
      location: 'Riyadh, Saudi Arabia (Remote)',
    },
  ]

  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
      <div className="space-y-12">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row md:items-center md:space-x-8 rounded-lg shadow-md p-6 bg-white"
          >
            {/* Only show image container if imageSrc exists */}
            {exp.imageSrc && (
              <div className="flex-shrink-0 w-32 h-32 relative mb-4 md:mb-0 border rounded-md overflow-hidden">
                <Image
                  src={exp.imageSrc}
                  alt={`${exp.title} logo`}
                  fill
                  className="object-contain"
                />
              </div>
            )}
            <div>
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-sm text-gray-500 mb-1">
                <span className="font-medium">{exp.role}</span> — {exp.period}
              </p>
              <p className="text-sm text-gray-400 italic mb-2">{exp.location}</p>
              <p className="text-gray-700">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}