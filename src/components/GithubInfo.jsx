import { useEffect, useState } from "react";
import Header from "../../src/components/Header.jsx";
import Repositories from "../../src/components/Repositories.jsx";
import { useGithub } from "../context/useGithub";

export default function GithubInfo() {
  const { user, loading } = useGithub();
  const [selectedOption, setSelectedOption] = useState("recent");
  const [allRepositories, setAllRepositories] = useState([]);
  const [repositories, setRepositories] = useState([]);

  const getRepositories = async (url) => {
    const response = await fetch(
      `${url}?per_page=100&sort=updated&direction=desc`
    );
    const data = await response.json();
    setRepositories(data);
    setAllRepositories(data);
  };

  useEffect(() => {
    if (repositories !== null && user.repos !== "") {
      getRepositories(user.repos);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.repos]);

  const handleSort = (type) => {
    if (type === "Recent") {
      const sortByRecent = repositories.sort((a, b) => {
        return new Date(b.updated_at) - new Date(a.updated_at);
      });
      setRepositories(sortByRecent);
      return;
    } else if (type == "Stars") {
      const sortByStars = repositories.sort((a, b) => {
        return b.stargazers_count - a.stargazers_count;
      });
      setRepositories(sortByStars);
      return;
    }
  };

  return (
    <div className="w-[80%] flex flex-col items-center justify-center max-[640px]:w-[90%]">
      <Header data={user} />
      <Repositories
        user={user}
        repositories={repositories}
        selectedOption={selectedOption}
        setRepositories={setRepositories}
        setSelectedOption={setSelectedOption}
        handleSort={handleSort}
        allRepositories={allRepositories}
        loading={loading}
      />
    </div>
  );
}
