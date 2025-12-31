import React from "react";
import { useAuth } from "../context/AuthProvider";

function About() {
  const { profile } = useAuth();

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 via-gray-300 to-blue-600 text-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="font-extrabold text-4xl bg-gradient-to-r  from-purple-600 via-rose-400 to-purple-400 bg-clip-text text-transparent  items-center text-center ">
              Knowledge<span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text ">Nest</span>
            </div>
          <p className="text-lg text-black font-light">
            A place where knowledge meets experience, code meets creativity,
            and learning never stops.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-14 space-y-14">

        {/* Author Intro */}
        <section className="bg-white rounded-xl shadow p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Meet the Author
          </h2>
          <p className="text-gray-700 leading-relaxed">
            This is{" admin "}
            <strong className="text-blue-700 font-semibold">
              {profile?.user?.name}
            </strong>
              , a passionate full stack developer who loves building scalable,
            high-performance, and user-centric web applications. With hands-on
            experience in both frontend and backend technologies, he focuses on
            writing clean code and crafting meaningful digital experiences.
          </p>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Technical Expertise
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-semibold text-blue-700 mb-3">
                Frontend Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {["React.js", "Angular", "Vue.js", "HTML5", "CSS3", "Tailwind CSS"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-semibold text-indigo-700 mb-3">
                Backend & Cloud
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "MySQL",
                  "Docker",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-indigo-100 text-indigo-700 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4">Mission & Vision</h2>
          <p className="text-gray-300 leading-relaxed">
            The mission behind this blog is to simplify complex technologies,
            share real-world development experiences, and help developers grow
            with confidence. KhanBlog aims to empower learners with practical,
            easy-to-understand content that bridges the gap between theory and
            industry practice.
          </p>
        </section>

        {/* Highlights */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Professional Highlights
          </h2>
          <ul className="space-y-4">
            {[
              "Built and deployed multiple full-stack web applications",
              "Strong problem-solving and debugging mindset",
              "Experience working with REST APIs and authentication systems",
              "Continuous learner adapting to new tools and trends",
            ].map((point, index) => (
              <li
                key={index}
                className="bg-white rounded-lg shadow p-4 text-gray-700"
              >
                {point}
              </li>
            ))}
          </ul>
        </section>

        {/* Personal Touch */}
        <section className="bg-white rounded-xl shadow p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Beyond Coding
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Outside of development, Akhil is a passionate cricket enthusiast and
            a huge admirer of <strong>King Kohli</strong>. His biggest inspiration
            comes from his twin brother, <strong>Ankush</strong>, whose constant
            motivation and friendly competition have shaped his personal and
            professional journey.
          </p>
        </section>

      </div>
    </div>
  );
}

export default About;
