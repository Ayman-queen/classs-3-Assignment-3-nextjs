import { FC } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';

const About: FC = () => {
  return (
    <div>
      <Header />
      <div className="p-10 bg-gray-100 min-h-screen">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">About Me</h1>
        <p className="text-gray-600 leading-relaxed">
          I'm Ayman Shaheen, a developer passionate about Web development, Data Science, and AI. Currently finishing my degree in Math.
          I focus on building modern, responsive, and efficient web applications. My journey in tech has been driven by curiosity and a love for problem-solving. I’m always eager to take on new challenges and learn from them.
        </p>
        <div className="mt-6">
          <Link href="/" className="text-blue-500 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
