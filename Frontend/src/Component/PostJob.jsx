import React, { useState } from "react";

export default function PostJob() {
  const [job, setJob] = useState({
    title: "",
    company: "",
    location: "",
    type: "",
    salary: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJob({ ...job, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Job Posted:", job);
    alert(`✅ Job for "${job.title}" posted successfully!`);
    setJob({
      title: "",
      company: "",
      location: "",
      type: "",
      salary: "",
      description: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-3xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          🧾 Post a New Job
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Job Title
            </label>
            <input
              type="text"
              name="title"
              value={job.title}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200 outline-none"
              placeholder="e.g. Frontend Developer"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Company Name
            </label>
            <input
              type="text"
              name="company"
              value={job.company}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200 outline-none"
              placeholder="e.g. Elite Tech Ltd."
            />
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Location
              </label>
              <input
                type="text"
                name="location"
                value={job.location}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="e.g. Lagos, Nigeria"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Job Type
              </label>
              <select
                name="type"
                value={job.type}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md p-2"
              >
                <option value="">Select type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Remote">Remote</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Salary (₦)
              </label>
              <input
                type="number"
                name="salary"
                value={job.salary}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="e.g. 200000"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Job Description
            </label>
            <textarea
              name="description"
              value={job.description}
              onChange={handleChange}
              required
              rows="5"
              className="w-full border border-gray-300 rounded-md p-2 resize-none focus:ring focus:ring-blue-200 outline-none"
              placeholder="Write a short description of the role..."
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Post Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
