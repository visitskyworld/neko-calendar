import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { ReactComponent as HomeIcon } from '../assets/home.svg';
import { ReactComponent as DBIcon } from '../assets/database.svg';
import { ReactComponent as CalendarIcon } from '../assets/calendar.svg';
import { ReactComponent as SheetIcon } from '../assets/spreadsheet.svg';

interface Props {
  name: string;
  link: string;
}

const SidebarItem: React.FC<Props> = ({ name, link }) => {
  const [hovered, setHovered] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);
  const location = useLocation();

  const getIcon = (name: string) => {
    switch (name) {
      case 'home':
        return (
          <div className="w-1/5 flex justify-center">
            <HomeIcon fill={hovered || active ? '#fff' : '#ae04f6'} />
          </div>
        );
      case 'calendar':
        return (
          <div className="w-1/5 flex justify-center">
            <CalendarIcon fill={hovered || active ? '#fff' : '#ae04f6'} />
          </div>
        );
      case 'spreadsheet':
        return (
          <div className="w-1/5 flex justify-center">
            <SheetIcon fill={hovered || active ? '#fff' : '#ae04f6'} />
          </div>
        );
      case 'database':
        return (
          <div className="w-1/5 flex justify-center">
            <DBIcon fill={hovered || active ? '#fff' : '#ae04f6'} />
          </div>
        );
    }
  };

  useEffect(() => {
    if (location.pathname === link) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [location]);

  return (
    <li
      className={`rounded-md hover:bg-gradient-to-r from-[#a04ef6] to-[#f64ee5] ${
        active ? 'bg-gradient-to-r from-[#a04ef6] to-[#f64ee5]' : ''
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link
        to={link}
        className={`flex items-center px-4 py-2 space-x-3 ${
          active ? '!text-white' : ''
        }`}
      >
        {getIcon(name)}
        <span
          className={`capitalize ${
            active ? '!text-white font-bold' : 'font-semibold'
          } w-4/5`}
        >
          {name}
        </span>
      </Link>
    </li>
  );
};

export default SidebarItem;
