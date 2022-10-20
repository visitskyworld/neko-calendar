import { useState } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const getCurrentPage = () => {
    switch (location.pathname) {
      case '/':
        return 'Hello, Elijah!';
      case '/calendar':
        return 'Calendar View';
      case '/spreadsheet':
        return 'Spreadsheet View';
      case '/database':
        return 'Database';
    }
  };

  return (
    <nav className=" w-full h-[50px]">
      <div className="flex justify-between my-0 mx-auto">
        <span className="text-[40px] leading-[60px] font-semibold">
          {getCurrentPage()}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
