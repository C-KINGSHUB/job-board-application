import React from "react";

export default function MyJobs() {
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Elite Tech Ltd",
      location: "Lagos, Nigeria",
      type: "Full-time",
      salary: "₦200,000",
      description:
        "Develop and maintain user interfaces using React and Tailwind.",
    },
    {
      id: 2,
      title: "UI/UX Designer",
      company: "SoftSpace Studio",
      location: "Abuja, Nigeria",
      type: "Remote",
      salary: "₦180,000",
      description:
        "Design user-friendly and accessible interfaces using Figma and Adobe XD.",
    },
    {
      id: 3,
      title: "Backend Developer",
      company: "NextGen Solutions",
      location: "Port Harcourt, Nigeria",
      type: "Full-time",
      salary: "₦250,000",
      description:
        "Build and maintain scalable backend APIs using Node.js and Express.",
    },
    {
      id: 4,
      title: "Mobile App Developer",
      company: "Appify Labs",
      location: "Enugu, Nigeria",
      type: "Hybrid",
      salary: "₦220,000",
      description:
        "Develop mobile applications for iOS and Android using Flutter.",
    },
    {
      id: 5,
      title: "Data Analyst",
      company: "Insight Analytics",
      location: "Lagos, Nigeria",
      type: "Full-time",
      salary: "₦300,000",
      description:
        "Analyze datasets and generate actionable business insights using Python and Power BI.",
    },
    {
      id: 6,
      title: "Cybersecurity Specialist",
      company: "SecureNet Africa",
      location: "Remote",
      type: "Contract",
      salary: "₦280,000",
      description:
        "Implement and monitor network security systems to prevent breaches.",
    },
    {
      id: 7,
      title: "Project Manager",
      company: "BuildRight Ltd",
      location: "Abuja, Nigeria",
      type: "Full-time",
      salary: "₦350,000",
      description:
        "Coordinate software development projects ensuring timely delivery and quality output.",
    },
    {
      id: 8,
      title: "QA Engineer",
      company: "Testify Tech",
      location: "Lagos, Nigeria",
      type: "Internship",
      salary: "₦150,000",
      description:
        "Test and document software quality, ensuring smooth performance and minimal bugs.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        💼 My Job Posts
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-white shadow-md rounded-xl p-5 border border-gray-200 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
            <p className="text-gray-600">{job.company}</p>
            <p className="text-sm text-gray-500">{job.location}</p>

            <div className="flex justify-between items-center mt-2 text-sm">
              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md">
                {job.type}
              </span>
              <span className="font-semibold text-green-600">{job.salary}</span>
            </div>

            <p className="mt-3 text-gray-700 text-sm">{job.description}</p>

            <div className="mt-4 flex justify-end space-x-2">
              <button className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">
                Edit
              </button>
              <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
