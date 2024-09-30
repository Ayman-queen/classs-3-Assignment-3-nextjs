import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Image from 'next/image';
import { FC } from 'react';

const Home: FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow flex flex-col md:flex-row justify-between items-center p-10 bg-gradient-to-br from-yellow-300 to-red-300">
        {/* Text Section */}
        <div className="w-full md:w-1/2 p-8 bg-white rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <h1 className="text-4xl font-extrabold text-orange-500 mb-4 text-shadow">
            Hey,
            <br />
            I'm <span className="text-gradient">Ayman Shaheen</span>
            <br />
            a <span className="text-gradient">Next.js Developer</span>
          </h1>
          <p className="mt-4 text-gray-700 leading-relaxed">
            I specialize in building high-quality web applications using Next.js. I love exploring new technologies and constantly learning to improve my skills. When I'm not coding, you can find me enjoying nature or reading a good book.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
          <div className="relative w-60 h-60 md:w-72 md:h-72">
            <Image
              src="/hijab-girl.jpg"
              alt="Profile Picture"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center', filter: 'brightness(90%)' }}
              className="rounded-full border-4 border-orange-500 shadow-lg transition-transform duration-300 hover:scale-110"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
