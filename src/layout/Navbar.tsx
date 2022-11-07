import { useLocation } from 'react-router-dom';
import { useProSidebar } from 'react-pro-sidebar';
import { MenuOutlined } from '@ant-design/icons';

const Navbar: React.FC = () => {
  const location = useLocation();
  const { toggled, toggleSidebar } = useProSidebar();

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
    <nav className="flex w-full h-[50px] relative items-center">
      <div className="flex justify-between my-0">
        <span className="text-[40px] leading-[60px] font-semibold">
          {getCurrentPage()}
        </span>
      </div>
      <div className={`absolute right-0 md:hidden ${toggled && 'hidden'}`}>
        <MenuOutlined
          style={{ fontSize: '24px' }}
          onClick={() => toggleSidebar()}
        />
      </div>
    </nav>
  );
};

export default Navbar;
