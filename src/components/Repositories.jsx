/* eslint-disable react/prop-types */
import { useState } from "react";
import Card from "../../src/components/Card.jsx";

export default function Repositories(props) {
  const {
    repositories,
    selectedOption,
    handleSort,
    setSelectedOption,
    setRepositories,
    allRepositories,
    user,
    loading,
  } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [visibleRepos, setVisibleRepos] = useState(4);
  const displayedRepos = repositories.slice(0, visibleRepos);

  const loadMoreRepos = () => {
    setVisibleRepos((prev) => prev + 10); // Incrementa en 10
  };

  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();

    if (searchValue === "") {
      setRepositories(allRepositories);
      return;
    }

    const filteredRepos = allRepositories.filter((repo) =>
      repo.name.startsWith(searchValue)
    );
    setRepositories(filteredRepos);
  };

  const handleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full h-full flex flex-col items-start justify-center">
      <div className="w-full flex items-center justify-between max-[640px]:flex-col max-[640px]:items-start">
        <div className="flex flex-col items-start">
          <h1 className="text-5xl font-beVietnamPro font-medium text-textWhite mb-3 max-[640px]:text-2xl">
            {user.name ? user.name : "Github"}
          </h1>
          <h2 className="text-lg font-beVietnamPro font-medium text-[#4A5567] mb-5 max-[640px]:text-lg">
            {user.bio ? user.bio : "Biography"}
          </h2>
        </div>

        <div className="w-1/2 flex items-center justify-around max-[640px]:w-full max-[640px]:justify-between">
          <input
            type="text"
            placeholder="Find a repository..."
            className="w-[50%] py-2 px-2 rounded-md bg-[#2D3748] text-textWhite max-[640px]:w-1/2 max-[640px]:placeholder:text-[12px]"
            onChange={(e) => handleSearch(e)}
          />
          <div className="relative inline-block w-64 max-[640px]:w-36">
            <button
              onClick={handleDropdown}
              className={`w-full flex h-10 items-center justify-between font-beVietnamPro font-bold text-textWhite bg-[#2D3748] ${
                isOpen ? "rounded-t-lg" : "rounded-lg"
              }  px-4 py-3 text-sm shadow-sm text-left lg:w-[90%] md:w-[70%] sm:w-[50%] max-[640px]:w-full capitalize max-[640px]:text-[12px]`}
              id="dropdown-button"
            >
              {selectedOption}
              <img src={"/arrowDown.svg"} alt="Flecha" />
            </button>
            {isOpen && (
              <ul
                className="absolute w-full bg-[#2D3748] rounded-b-md shadow-lg lg:w-[90%] md:w-[70%] sm:w-[50%] z-10"
                id="dropdown-menu"
              >
                <li
                  className="px-4 py-2 text-textWhite bg-[#2D3748] font-beVietnamPro hover:bg-gray-500 cursor-pointer capitalize max-[640px]:text-[12px]"
                  value={"recent"}
                  onClick={(e) => {
                    handleSort(e.target.innerText);
                    handleDropdown();
                    setSelectedOption(e.target.innerText);
                  }}
                >
                  recent
                </li>
                <li
                  className="px-4 py-2 text-textWhite bg-[#2D3748] font-beVietnamPro rounded-b-md hover:bg-gray-500 cursor-pointer capitalize max-[640px]:text-[12px]"
                  value={"stars"}
                  onClick={(e) => {
                    handleSort(e.target.innerText);
                    handleDropdown();
                    setSelectedOption(e.target.innerText);
                  }}
                >
                  stars
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className="mt-5 w-full flex flex-wrap items-center justify-between gap-y-8 max-[640px]:justify-center">
        {loading ? (
          <div className="h-full">
            <h1 className="text-2xl font-beVietnamPro font-medium text-textWhite">
              Loading...
            </h1>
          </div>
        ) : repositories.length > 0 ? (
          displayedRepos.map((repo, index) => <Card repo={repo} key={index} />)
        ) : (
          <div className="h-full">
            <h1 className="text-2xl font-beVietnamPro font-medium text-textWhite">
              No repositories found
            </h1>
          </div>
        )}
      </div>
      {loading
        ? null
        : repositories.length > 0 && (
            <div className="w-full flex items-center justify-center">
              <button
                className="mt-10 mb-10 p-3 font-beVietnamPro font-medium text-textWhite bg-[#2D3748] rounded-lg max-[640px]:text-[12px] max-[640px]:p-2 transition-all duration-300 ease-in-out  hover:bg-gray-700"
                onClick={() => loadMoreRepos()}
              >
                See more repositories
              </button>
            </div>
          )}
    </div>
  );
}
