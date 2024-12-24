import Filter from "./components/filter";
import Servers from "./components/servers";

const Home = () => {
  return (
    <div className="">
      <h1 className="pt-4 pb-8 text-center text-text text-5xl font-semibold">
        Xash Monitor
      </h1>
      <Filter />
      <Servers />
    </div>
  );
};

export default Home;
