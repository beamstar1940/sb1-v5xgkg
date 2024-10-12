import React from 'react';
import { ArrowRight, BookOpen, Code, Users, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Welcome to CodeCraft</h1>
        <p className="text-xl text-gray-600 mb-8">Empower your programming journey with comprehensive resources, interactive tools, and a collaborative community.</p>
        <Link to="/learning-paths" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300">
          Start Learning <ArrowRight className="inline ml-2" />
        </Link>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <FeatureCard
          icon={<BookOpen className="w-12 h-12 text-indigo-600" />}
          title="Curated Learning Paths"
          description="Personalized journeys tailored to your skill level and career goals."
        />
        <FeatureCard
          icon={<Code className="w-12 h-12 text-indigo-600" />}
          title="Integrated IDE"
          description="Robust cloud-based development environment for efficient coding."
        />
        <FeatureCard
          icon={<Users className="w-12 h-12 text-indigo-600" />}
          title="Expert Mentorship"
          description="Get personalized guidance from experienced developers."
        />
        <FeatureCard
          icon={<Briefcase className="w-12 h-12 text-indigo-600" />}
          title="Career Advancement"
          description="Tools and resources to accelerate your professional journey."
        />
      </section>

      <section className="bg-gray-100 rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-bold mb-4 text-center">Join Our Community</h2>
        <p className="text-center text-gray-600 mb-8">Connect with fellow programmers, participate in discussions, and collaborate on projects.</p>
        <div className="text-center">
          <Link to="/community" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300">
            Explore Community
          </Link>
        </div>
      </section>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Home;