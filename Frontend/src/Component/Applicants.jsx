import React, { useState } from "react";

export default function Applicants() {
  const [applicants, setApplicants] = useState([
  {
    id: 1,
    name: "Chidi Kingsley",
    position: "Frontend Developer",
    email: "chidi.k@example.com",
    coverLetter:
      "I am a passionate Frontend Developer with 3 years of experience in React and Tailwind. I love building clean, responsive user interfaces.",
    status: "Pending",
  },
  {
    id: 2,
    name: "Susan Okoro",
    position: "UI/UX Designer",
    email: "susan.okoro@example.com",
    coverLetter:
      "Creative UI/UX Designer with a focus on user-centered design and accessibility. Skilled in Figma, Adobe XD, and design systems.",
    status: "Pending",
  },
  {
    id: 3,
    name: "Michael Adeyemi",
    position: "Backend Developer",
    email: "michael.adeyemi@example.com",
    coverLetter:
      "Backend Developer skilled in Django, Flask, and REST APIs. I enjoy writing efficient, scalable server-side code.",
    status: "Pending",
  },
  {
    id: 4,
    name: "Ngozi Nwachukwu",
    position: "Project Manager",
    email: "ngozi.nwachukwu@example.com",
    coverLetter:
      "Experienced Project Manager with a background in Agile methodologies. I love bringing teams together to deliver great software on time.",
    status: "Pending",
  },
  {
    id: 5,
    name: "David Uche",
    position: "Mobile App Developer",
    email: "david.uche@example.com",
    coverLetter:
      "Flutter developer with a passion for creating seamless mobile experiences for both Android and iOS users.",
    status: "Pending",
  },
  {
    id: 6,
    name: "Blessing Eze",
    position: "Content Writer",
    email: "blessing.eze@example.com",
    coverLetter:
      "Content Writer with a talent for crafting engaging blog posts and marketing copy that drives traffic and sales.",
    status: "Pending",
  },
  {
    id: 7,
    name: "Tunde Bello",
    position: "DevOps Engineer",
    email: "tunde.bello@example.com",
    coverLetter:
      "DevOps Engineer experienced in CI/CD pipelines, AWS, and Docker. I enjoy automating workflows and improving deployment efficiency.",
    status: "Pending",
  },
  {
    id: 8,
    name: "Amina Yusuf",
    position: "Data Analyst",
    email: "amina.yusuf@example.com",
    coverLetter:
      "Data Analyst with expertise in Power BI, Excel, and Python. Passionate about turning complex data into actionable insights.",
    status: "Pending",
  },
]);


  const handleAction = (id, action) => {
    setApplicants((prev) =>
      prev.map((applicant) =>
        applicant.id === id
          ? { ...applicant, status: action === "accept" ? "Accepted" : "Rejected" }
          : applicant
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Job Applicants
      </h1>

      <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2">
        {applicants.map((applicant) => (
          <div
            key={applicant.id}
            className="bg-white shadow-lg rounded-xl p-6 border border-gray-200"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {applicant.name}
              </h2>
              <span
                className={`px-3 py-1 text-sm rounded-full ${
                  applicant.status === "Accepted"
                    ? "bg-green-100 text-green-700"
                    : applicant.status === "Rejected"
                    ? "bg-red-100 text-red-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {applicant.status}
              </span>
            </div>

            <p className="text-gray-600 mb-2">
              <strong>Position:</strong> {applicant.position}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Email:</strong> {applicant.email}
            </p>
            <p className="text-gray-700 mb-4 italic">
              “{applicant.coverLetter}”
            </p>

            <div className="flex justify-end space-x-3">
              <button
                onClick={() => handleAction(applicant.id, "accept")}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition"
                disabled={applicant.status !== "Pending"}
              >
                Accept
              </button>
              <button
                onClick={() => handleAction(applicant.id, "reject")}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition"
                disabled={applicant.status !== "Pending"}
              >
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
