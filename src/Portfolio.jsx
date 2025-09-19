import React from "react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="bg-gray-50 text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold mb-4"
        >
          Anubhab Roy Chowdhury
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-xl max-w-2xl"
        >
          Aspiring AI/ML Engineer | Strong in Data Structures & Algorithms | Future Global Tech Professional
        </motion.p>
        <div className="mt-6 flex space-x-4">
          <a href="https://www.linkedin.com/in/anubhab-roy-chowdhury-8a2804275" target="_blank" rel="noopener noreferrer">
            <button className="bg-white text-indigo-600 px-4 py-2 rounded-2xl shadow">LinkedIn</button>
          </a>
          <a href="https://github.com/Anubhab-Roy-Chowdhury" target="_blank" rel="noopener noreferrer">
            <button className="bg-white text-indigo-600 px-4 py-2 rounded-2xl shadow">GitHub</button>
          </a>
          <a href="mailto:anubhabcalcutta1239@gmail.com">
            <button className="bg-white text-indigo-600 px-4 py-2 rounded-2xl shadow">Email</button>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
        <p className="text-lg leading-relaxed text-center">
          I am a B.Tech Computer Science & Engineering student at Future Institute of Technology (Batch 2028), passionate about Data Structures, Algorithms, and Artificial Intelligence/Machine Learning. My vision is to build impactful solutions and secure a global role in South Korea, China, or Singapore.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold mb-10 text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {["Python", "C++", "DSA", "Linked Lists", "BST", "Quick Sort", "NumPy", "Matplotlib", "Scikit-Learn", "React", "TailwindCSS", "GitHub"].map((skill) => (
            <div key={skill} className="shadow-md rounded-2xl bg-white p-6 text-center font-semibold">{skill}</div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl shadow-md bg-white p-6">
            <h3 className="text-xl font-semibold mb-2">Handwritten Digit Detection</h3>
            <p className="text-gray-700">
              Implemented using Scikit-Learn, with preprocessing in NumPy/Matplotlib. Achieved digit recognition accuracy using ML models.
            </p>
            <a href="https://github.com/Anubhab-Roy-Chowdhury/Machine_Learning" target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-semibold inline-block mt-3">
              View on GitHub →
            </a>
          </div>
          <div className="rounded-2xl shadow-md bg-white p-6">
            <h3 className="text-xl font-semibold mb-2">DSA Problem-Solving Portfolio</h3>
            <p className="text-gray-700">
              Solved 100+ problems in arrays, linked lists, recursion, and sorting, strengthening core problem-solving ability.
            </p>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold mb-10 text-center">Resume</h2>
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">Anubhab Roy Chowdhury</h3>
          <p className="mb-2">📧 anubhabcalcutta1239@gmail.com</p>
          <p className="mb-2">🔗 LinkedIn: <a href="https://www.linkedin.com/in/anubhab-roy-chowdhury-8a2804275" className="text-indigo-600">Profile</a></p>
          <p className="mb-6">💻 GitHub: <a href="https://github.com/Anubhab-Roy-Chowdhury" className="text-indigo-600">Projects</a></p>

          <h4 className="text-xl font-semibold mt-4 mb-2">Career Objective</h4>
          <p>
            To leverage my foundation in DSA and growing expertise in AI/ML to secure a global tech role in South Korea, China, or Singapore, contributing to impactful innovation.
          </p>

          <h4 className="text-xl font-semibold mt-4 mb-2">Education</h4>
          <p>B.Tech in Computer Science & Engineering, Future Institute of Technology, Expected 2028</p>

          <h4 className="text-xl font-semibold mt-4 mb-2">Skills</h4>
          <ul className="list-disc list-inside">
            <li>Programming: Python, C++</li>
            <li>DSA: Linked Lists, BST, Quick Sort, Inversion Count, Palindrome Partition, Knight’s Tour</li>
            <li>Machine Learning: Scikit-Learn, NumPy, Matplotlib</li>
            <li>Tools: GitHub, React, TailwindCSS</li>
          </ul>

          <h4 className="text-xl font-semibold mt-4 mb-2">Projects</h4>
          <ul className="list-disc list-inside">
            <li><strong>Handwritten Digit Detection:</strong> Built with Scikit-Learn, NumPy, Matplotlib. Implemented ML pipeline for digit recognition.</li>
            <li><strong>DSA Portfolio:</strong> Solved 100+ problems in arrays, linked lists, recursion, and sorting.</li>
          </ul>

          <h4 className="text-xl font-semibold mt-4 mb-2">Achievements</h4>
          <ul className="list-disc list-inside">
            <li>Consistent self-study in AI/ML alongside academics</li>
            <li>Built strong problem-solving skills through DSA practice</li>
          </ul>
        </div>
        <div className="text-center mt-8">
          <button onClick={() => window.print()} className="bg-indigo-600 text-white px-6 py-2 rounded-2xl shadow">Download / Print Resume</button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
        <p className="text-center mb-6">Interested in collaborating or hiring? Reach out to me!</p>
        <div className="flex justify-center space-x-6">
          <a href="mailto:anubhabcalcutta1239@gmail.com"><button className="bg-indigo-600 text-white px-4 py-2 rounded-2xl shadow">Email</button></a>
          <a href="https://www.linkedin.com/in/anubhab-roy-chowdhury-8a2804275" target="_blank" rel="noopener noreferrer"><button className="bg-indigo-600 text-white px-4 py-2 rounded-2xl shadow">LinkedIn</button></a>
          <a href="https://github.com/Anubhab-Roy-Chowdhury" target="_blank" rel="noopener noreferrer"><button className="bg-indigo-600 text-white px-4 py-2 rounded-2xl shadow">GitHub</button></a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-900 text-gray-200">
        <p>© {new Date().getFullYear()} Anubhab Roy Chowdhury. All rights reserved.</p>
      </footer>
    </div>
  );
}
