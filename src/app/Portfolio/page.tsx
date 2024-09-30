"use client";  // Ensure this component is a Client Component

import { FC } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';

const projects = [
  {
    title: "TypeScript 45 Assignment",
    description: "A TypeScript assignment that demonstrates various TypeScript features and best practices.",
    link: "https://github.com/Ayman-queen/typescript-45-Assignment",
  },
  {
    title: "Hackathon Milestones",
    description: "Projects and milestones achieved during a hackathon event. Showcases collaborative and innovative solutions.",
    link: "https://github.com/Ayman-queen/Hackathon-milestones",
  },
  {
    title: "Countdown Timer Next.js",
    description: "A countdown timer application built with Next.js. It features a user-friendly interface for setting and tracking countdowns.",
    link: "https://github.com/Ayman-queen/project-countdown-timer-nextjs",
  },
];

const Portfolio: FC = () => {
  return (
    <div>
      <Header />
      <div className="bg-white bg-opacity-80 p-10 rounded-lg">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">My Portfolio</h1>
        <p className="text-gray-600 leading-relaxed mb-8">
          Welcome to my portfolio page! Here you'll find some of the projects I’ve worked on. Feel free to explore!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:scale-105"
            >
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{project.title}</h2>
                <p className="text-gray-600 mb-2">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8">
          <Link href="/" className="text-blue-500 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;


