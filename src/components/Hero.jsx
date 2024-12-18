/* eslint-disable react-hooks/exhaustive-deps */
import { useGithub } from "../context/useGithub";
import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

export default function Hero() {
  const { searchUserGithub, getUserGithub } = useGithub();
  const [userFound, setUserFound] = useState([]);
  const [username, setUsername] = useState("");
  const [animatingUsers, setAnimatingUsers] = useState([]);

  const debouncedSearch = useDebouncedCallback((username) => {
    if (username) {
      searchUserGithub(username).then((data) => {
        if (data) {
          setUserFound(data);
        }
      });
    } else {
      setUserFound([]);
    }
  }, 500);

  // Detecta cuando userFound se vacía para iniciar la animación de salida
  useEffect(() => {
    if (userFound.length === 0 && animatingUsers.length > 0) {
      setTimeout(() => setAnimatingUsers([]), 300); // Tiempo para la animación
    } else {
      setAnimatingUsers(userFound); // Sincroniza usuarios visibles
    }
  }, [userFound]);

  const handleSearch = (e) => {
    setUsername(e.target.value);
    debouncedSearch(e.target.value);
  };

  const handleSelectUser = (username) => {
    getUserGithub(username);
    setUsername("");
    setUserFound([]);
  };

  return (
    <div className="relative">
      <img
        src={"/hero-image-github-profile.png"}
        alt="Hero"
        className="w-full h-full object-cover"
      />
      <div className="absolute top-1/2 z-20 flex flex-col items-center w-full h-full max-[640px]:top-1/4">
        <div className="relative w-1/3 max-[640px]:w-36">
          <input
            type="text"
            placeholder="Username"
            className="w-full px-10 py-3 max-[640px]:py-2 max-[640px]:px-8 bg-background text-textWhite border-2 border-none outline-none rounded-lg placeholder:text-placeholder lg:text-lg md:text-sm sm:text-[10px] max-[640px]:text-[8px] leading-none"
            onChange={handleSearch}
            value={username}
          />
          <img
            src={"/Search.svg"}
            alt="Search"
            className="absolute left-3 transform -translate-y-1/2 w-2 h-2 lg:w-6 lg:h-6 md:w-5 md:h-5 sm:w-4 sm:h-4 lg:top-7 md:top-6 sm:top-5 max-[640px]:top-4"
          />
        </div>

        {animatingUsers.length > 0 &&
          animatingUsers.map((item, index) => (
            <div
              className={`w-1/3 max-[640px]:w-56 cursor-pointer ${
                userFound.includes(item) ? "slide-down" : "slide-up"
              }`}
              key={index}
              onClick={() => handleSelectUser(item.name)}
            >
              <div className="w-full h-24 rounded-lg bg-backgroundItems mt-2 flex items-center lg:h-20 md:h-14 sm:h-12 max-[640px]:h-10">
                <img
                  src={item.avatar_url}
                  alt="Github Logo"
                  className="w-10 h-10 ml-2 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-16 lg:h-16 max-[640px]:w-8 max-[640px]:h-8 rounded-lg"
                />
                <div className="h-full flex flex-col items-start justify-evenly">
                  <h1 className="font-beVietnamPro ml-4 font-bold text-textWhite text-2xl lg:text-lg md:text-sm sm:text-[10px] max-[640px]:text-[8px]  leading-none">
                    {item.name}
                  </h1>
                  <h3 className="font-beVietnamPro ml-4 font-medium text-placeholder text-lg lg:text-md md:text-[12px] sm:text-[8px] max-[640px]:text-[6px] leading-none">
                    {item.type}
                  </h3>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
