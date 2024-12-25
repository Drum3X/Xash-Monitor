import { ServerInterface } from "./interfaces/server";

import Filter from "./components/filter";
import Server from "./components/server";

const Home = async () => {
  const data = await fetch("http://127.0.0.1:2075/api?gamedir=valve", {
    method: "GET", headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    redirect: 'follow',
  });
  const servers = await data.json()

  return (
    <div className="">
      <h1 className="pt-4 pb-8 text-center text-text text-5xl font-semibold">
        Xash Monitor
      </h1>
      <Filter />
      {servers.map((server: ServerInterface, index: number) => (
        <Server server={server} key={index} />
      ))}
    </div>
  );
};

export default Home;
