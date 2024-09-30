import { FC } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';

const Contact: FC = () => {
  return (
    <div>
      <Header />
      <div className="p-10 bg-gray-100 min-h-screen">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Contact</h1>
        <p className="text-gray-600 leading-relaxed">
          I'd love to hear from you! If you have any questions or just want to connect, feel free to reach out. You can contact me through the following methods:
        </p>
        <ul className="mt-4 text-gray-600 leading-relaxed">
          <li>Email: <a href="mailto:shaheenayman786@gmail.com" className="text-blue-500 hover:underline">shaheenayman786@gmail.com</a></li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/ayman-shaheen-3071722b9" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">www.Linkedin.com</a></li>
          <li>GitHub: <a href="https://github.com/Ayman-queen" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">www.Github.com</a></li>
        </ul>
        <div className="mt-6">
          <Link href="/" className="text-blue-500 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;

