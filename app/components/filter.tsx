import { IoSearchSharp, IoFilterSharp } from "react-icons/io5";

const Filter = () => {
  return (
    <form className="flex items-center max-w-sm mx-auto gap-3">
      <div className={`relative w-full px-3 py-2 bg-box rounded-md`}>
        <input type="text" className={`w-full bg-box outline-none`} />
      </div>
      <button
        type="submit"
        className={`p-2.5 bg-box rounded-md hover:bg-opacity-75 focus:bg-opacity-55 trantision duration-150 ease-in-out`}
      >
        <IoFilterSharp />
      </button>
      <button
        type="submit"
        className={`p-2.5 bg-primary text-text rounded-md hover:bg-opacity-75 focus:bg-opacity-55 trantision duration-150 ease-in-out`}
      >
        <IoSearchSharp />
      </button>
    </form>
  );
};

export default Filter;
