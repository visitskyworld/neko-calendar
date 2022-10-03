import React from 'react';

import ProjectView from '../components/projectView/ProjectView';
import SearchBar from '../components/projectView/searchBar/SearchBar';

const DatabaseView: React.FC = () => {
  return (
    <div className="pb-5">
      <div className="search-bar">
        <SearchBar />
      </div>
      <div className="project-details mt-8 border-[1px] border-[#7d7c7c]">
        <div className="w-full h-40 bg-[#d9d9d9] relative">
          <div className="absolute flex-wrap top-[60px] w-full pl-14 pr-6 flex justify-between items-center">
            <div className="w-36 h-36 bg-[#eae8e8]"></div>
            <button className="bg-black text-white font-medium py-3 px-9 rounded-md mt-14">
              + Add Project
            </button>
          </div>
        </div>
        <ProjectView />
      </div>
    </div>
  );
};

export default DatabaseView;
