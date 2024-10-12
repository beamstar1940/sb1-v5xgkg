import React from 'react';
import { Link } from 'react-router-dom';
import { Code2 } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-indigo-600 text-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Code2 size={32} />
          <span className="text-2xl font-bold">CodeCraft</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/learning-paths" className="hover:text-indigo-200">Learning Paths</Link></li>
            <li><Link to="/ide" className="hover:text-indigo-200">IDE</Link></li>
            <li><Link to="/community" className="hover:text-indigo-200">Community</Link></li>
            <li><Link to="/career" className="hover:text-indigo-200">Career</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;