import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { HiOutlineHome, HiOutlineClipboardList } from 'react-icons/hi';
import { FaCalendarAlt, FaRegFolderOpen } from 'react-icons/fa';

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
        return <HiOutlineHome size={20} />;
      case 'calendar':
        return <FaCalendarAlt size={20} />;
      case 'spreadsheet':
        return <HiOutlineClipboardList size={20} />;
      case 'database':
        return <FaRegFolderOpen size={20} />;
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
        <span className={`capitalize ${active && '!text-white'}`}>{name}</span>
      </Link>
    </li>
  );
};

export default SidebarItem;
