import React from 'react';

const SearchBar: React.FC = () => {
  return (
    <form>
      <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-5 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block p-4 pl-14 w-full text-sm rounded-lg border-solid border-[1px] border-black outline-none focus:outline-2 focus:outline-black"
          placeholder="Search your project here"
          required
        />
      </div>
    </form>
  );
};

export default SearchBar;
