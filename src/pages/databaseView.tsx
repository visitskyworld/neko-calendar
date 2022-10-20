import React from 'react';

import ProjectView from '../components/projectView/ProjectView';
import SearchBar from '../components/projectView/searchBar/SearchBar';

const DatabaseView: React.FC = () => {
  return (
    <div className="w-full h-[calc(100%-50px)] pt-8">
      <div className="search-bar text-[#303030]/[0.3]">
        <SearchBar />
      </div>
      <div className="h-[calc(100%-74px)] mt-8 overflow-y-auto">
        <ProjectView />
      </div>
    </div>
  );
};

export default DatabaseView;
