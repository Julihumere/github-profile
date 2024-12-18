import { useContext, createContext, useState } from "react";

const GithubContext = createContext(null);

// eslint-disable-next-line react/prop-types
export const GithubProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "",
    followers: 0,
    following: 0,
    avatar_url: "",
    location: "",
    repos: "",
    type: "",
  });

  const [loading, setLoading] = useState(false);

  const getUserGithub = async (username) => {
    if (!username.trim()) return;
    setLoading(true);
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error("Error fetching data from GitHub API");
      }
      const data = await response.json();
      setUser({
        name: data.name,
        followers: data.followers,
        following: data.following,
        avatar_url: data.avatar_url,
        location: data.location,
        repos: data.repos_url,
        bio: data.bio,
      });
      if (data) {
        setTimeout(() => setLoading(false), 2000);
      }
    } catch (error) {
      console.error("Error fetching GitHub user:", error);
      setLoading(false);
    }
  };

  const searchUserGithub = async (username) => {
    if (!username.trim()) return;
    try {
      const response = await fetch(
        `https://api.github.com/search/users?q=${username}&per_page=5`
      );
      if (!response.ok) {
        throw new Error("Error fetching data from GitHub API");
      }
      const data = await response.json();
      const users =
        data.items?.map((item) => ({
          name: item.login,
          followers: item.followers,
          following: item.following,
          avatar_url: item.avatar_url,
          location: item.location,
          repos: item.repos_url,
          type: item.type,
        })) || [];
      return users;
    } catch (error) {
      console.error("Error fetching GitHub users:", error);
    }
  };

  return (
    <GithubContext.Provider
      value={{ getUserGithub, user, searchUserGithub, loading }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export const useGithub = () => {
  const context = useContext(GithubContext);
  if (!context) {
    throw new Error("useGithub must be used within a GithubProvider");
  }
  return context;
};
