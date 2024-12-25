import { ServerInterface } from "../interfaces/server";
import clearHostname from "../utils/clear-hostname";

const Server = ({ server }: { server: ServerInterface }) => {
  return (
    <div className={`m-3 px-3 py-2 bg-box rounded-md`}>
      <h3 className={`text-lg font-medium`}>
        {clearHostname(server.hostname)}
      </h3>
      <div className={`flex gap-2 mt-1 opacity-70`}>
        <div className={`px-2 bg-secondary text-text rounded-full`}>
          <span>{server.gamedir}</span>
        </div>
        <div className={`px-2 bg-secondary text-text rounded-full`}>
          <span>
            {server.numplayers}/{server.maxplayers}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Server;
