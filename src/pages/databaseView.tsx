import React from 'react';

import '../styles/database.scss';
import ProjectView from '../components/projectView/ProjectView';
import SearchBar from '../components/projectView/searchBar/SearchBar';

const DatabaseView: React.FC = () => {
  return (
    <div className="w-full h-[calc(100%-50px)] pt-8">
      <div className="search-bar text-[#303030]/[0.3]">
        <SearchBar />
      </div>
      <ProjectView />
    </div>
  );
};

export default DatabaseView;
