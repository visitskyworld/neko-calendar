import { ProSidebarProvider } from 'react-pro-sidebar';

import Navbar from './Navbar';
import FlexSidebar from './Sidebar';

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = (props) => {
  return (
    <ProSidebarProvider>
      <div className="flex h-full">
        <FlexSidebar />
        <main className="w-[calc(100%-260px)] h-full py-8 pl-12 pr-6 flex flex-col items-center flex-grow">
          <Navbar />
          {props.children}
        </main>
      </div>
    </ProSidebarProvider>
  );
};

export default MainLayout;
