"use client";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { useState, useEffect } from "react";

import { ServerInterface } from "./interfaces/server";

import Filter from "./components/filter";
import Server from "./components/server";

const Home = () => {
  const [servers, setServers] = useState<ServerInterface[] | null>(null);
  const [isLoading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:2075/api?gamedir=cstrike&server_timeout=500")
      .then((res) => res.json())
      .then((data) => {
        setServers(data);
        setLoading(false);
      });
  }, []);

  if (isLoading)
    return (
      <div className={`flex justify-center items-center h-screen`}>
        <AiOutlineLoading3Quarters className={`animate-spin`} size={80} />
      </div>
    );
  if (!servers) return <p>No profile data</p>;

  return (
    <div className="md:px-24 lg:px-48">
      <h1 className="pt-4 pb-8 text-center text-text text-5xl font-semibold">
        Xash Monitor
      </h1>
      <Filter search={search} setSearch={setSearch} />
      <div className={`flex-row m-3 space-y-3 max-h-screen overflow-y-scroll overflow-x-hidden mt-3 rounded-md`}>
        {servers?.map((server: ServerInterface, index: number) => {
          if (
            server.hostname.toLowerCase().includes(search.toLocaleLowerCase())
          )
            return <Server server={server} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Home;
