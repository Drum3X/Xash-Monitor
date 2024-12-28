import { ServerInterface } from "../interfaces/server";
import Modal from "./modal";

const Server = ({ server }: { server: ServerInterface }) => {
  return (
    <div className={`px-3 py-2 bg-box rounded-md`}>
      <Modal server={server} />
      <div className={`flex flex-wrap gap-2 mt-1 opacity-70`}>
        <div className={`px-2 bg-secondary text-text rounded-full`}>
          {server.ip}:{server.port}
        </div>
        <div className={`px-2 bg-secondary text-text rounded-full`}>
          {server.gamedir}
        </div>
        <div className={`px-2 bg-secondary text-text rounded-full`}>
          {server.map}
        </div>
        <div className={`px-2 bg-secondary text-text rounded-full`}>
          {server.numplayers}/{server.maxplayers}
        </div>
      </div>
    </div>
  );
};

export default Server;
