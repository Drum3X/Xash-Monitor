import { IoFilterSharp } from "react-icons/io5";

const Filter = ({ search, setSearch }: {search: string, setSearch: React.Dispatch<React.SetStateAction<string>>}) => {
  return (
    <form className="flex items-center max-w-sm mx-auto gap-3">
      <div className={`relative w-full px-3 py-2 bg-box rounded-md`}>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className={`w-full bg-box outline-none`}
        />
      </div>
      <button
        type="submit"
        className={`p-2.5 bg-box rounded-md hover:bg-opacity-75 focus:bg-opacity-55 trantision duration-150 ease-in-out`}
      >
        <IoFilterSharp />
      </button>
    </form>
  );
};

export default Filter;
