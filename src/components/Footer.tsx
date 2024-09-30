import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 text-center">
      <p>
        &copy; {new Date().getFullYear()} Ayman Shaheen. All rights reserved.
      </p>
      <div className="mt-4">
        <a href="https://www.linkedin.com/in/ayman-shaheen-3071722b9" className="hover:text-gray-400 mx-2" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <span>|</span>
        <a href="https://discord.gg/w29EvhSS" className="hover:text-gray-400 mx-2" target="_blank" rel="noopener noreferrer">Discord</a>
      </div>
    </footer>
  );
};

export default Footer;


