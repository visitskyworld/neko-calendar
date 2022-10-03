import { Link } from 'react-router-dom';
import SettingIcon from '../assets/Icon.svg';

import SidebarItem from './SidebarItem';

const listItems = [
  {
    name: 'home',
    link: '/',
  },
  {
    name: 'calendar',
    link: '/calendar',
  },
  {
    name: 'spreadsheet',
    link: '/spreadsheet',
  },
  {
    name: 'database',
    link: '/database',
  },
];

const getScreenWidth = () => {
  const { innerWidth: width } = window;

  return width;
};

const Sidebar: React.FC = () => {
  return (
    <div className="flex">
      <aside
        className={`flex flex-col h-screen p-5 bg-white shadow w-56 transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-center mb-16">
            <Link to="/">
              <h2 className="text-3xl font-bold text-[#A04EF6]">LOGO</h2>
            </Link>
          </div>
          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-sm leading-8">
              {listItems.map((item, index) => (
                <SidebarItem key={index} name={item.name} link={item.link} />
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-around mt-auto mb-8 cursor-pointer transition duration-500 hover:scale-125">
            <img
              className="w-8 h-8 rounded-full"
              src="/Ellipse.png"
              alt="User Avatar"
            />
            <div className="flex flex-col justify-center ml-2 ">
              <span className="text-lg font-semibold">Elijah Scott</span>
              <span className="text-xs font-medium text-[rgba(48,48,48,0.26)]">
                Scott@hey.com
              </span>
            </div>
            <img src={SettingIcon} alt="Setting Icon" />
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
