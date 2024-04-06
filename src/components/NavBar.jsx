import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-slate-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <ul className="flex gap-4">
            
            <li>
              <Link to='/' className="hover:text-blue-500">Register</Link>
            </li>
            <li>
              <Link to='/login' className="hover:text-blue-500">Login</Link>
            </li>
            
          </ul>
          
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
