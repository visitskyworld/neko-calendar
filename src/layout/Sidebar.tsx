import { Link } from 'react-router-dom';
import { Sidebar, Menu, useProSidebar } from 'react-pro-sidebar';
import { CloseOutlined } from '@ant-design/icons';

import SidebarItem from './SidebarItem';
import { ReactComponent as SettingsIcon } from '../assets/settingIcon.svg';

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

const FlexSidebar: React.FC = () => {
  const { toggleSidebar } = useProSidebar();

  return (
    <Sidebar
      className="flex !z-[9999]"
      width="260px"
      customBreakPoint="768px"
      backgroundColor="rgba(246, 245, 250, 1)"
      transitionDuration={300}
      overlayColor="rgba(0, 0, 0, 0.3)"
    >
      <div className={`flex flex-col w-full h-screen px-5 pt-14 pb-10 shadow`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center md:justify-center justify-between mb-12">
            <Link to="/">
              <h2 className="text-3xl font-bold md:text-[#a04ef6] text-white mb-0">
                LOGO
              </h2>
            </Link>
            <CloseOutlined
              className="md:!hidden cursor-pointer"
              style={{ fontSize: '22px', color: 'white' }}
              onClick={() => toggleSidebar()}
            />
          </div>
          <Menu className="flex-1">
            <div className="pt-2 pb-4 space-y-1 text-sm leading-8">
              {listItems.map((item, index) => (
                <SidebarItem key={index} name={item.name} link={item.link} />
              ))}
            </div>
          </Menu>
          <div className="flex items-center justify-around mt-auto cursor-pointer">
            <img
              className="w-8 h-8 rounded-full"
              src="/Ellipse.png"
              alt="User Avatar"
            />
            <div className="flex flex-col justify-center ml-2">
              <span className="text-lg font-semibold md:text-inherit text-white">
                Elijah Scott
              </span>
              <span className="text-xs font-medium md:text-[rgba(48,48,48,0.26)] text-[#fff]/[0.26]">
                Scott@hey.com
              </span>
            </div>
            <SettingsIcon className="setting-icon" />
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default FlexSidebar;
