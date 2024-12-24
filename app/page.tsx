import test from "./test.json"

import Filter from "./components/filter";
import Server from "./components/server";

const Home = () => {
  return (
    <div className="">
      <h1 className="pt-4 pb-8 text-center text-text text-5xl font-semibold">
        Xash Monitor
      </h1>
      <Filter />
      {
        test.map((server) => {
          return (
            <>
              <Server server={server}/>
            </>
          )
        })}
    </div>
  );
};

export default Home;
