import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useState } from "react";

import clearHostname from "../utils/clear-hostname";
import { ServerInterface } from "../interfaces/server";

function Modal({ server }: { server: ServerInterface }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className={`text-xl font-medium text-left hover:text-primary trantision duration-150 ease-in-out`}
        onClick={() => setIsOpen(true)}
      >
        {clearHostname(server.hostname)}
      </button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-900/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />
        <div className="fixed inset-0 w-screen overflow-y-auto p-4">
          <div className="flex min-h-full items-center justify-center">
            <DialogPanel
              transition
              className="max-w-lg space-y-4 bg-box rounded-md p-12 duration-300 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
            >
              <DialogTitle className="text-2xl text-center font-bold">
                Server Information
              </DialogTitle>
              <p className={`font-normal`}>
                <span className={`text-lg font-semibold`}>Hostname: </span>
                {clearHostname(server.hostname)} <br />
                <span className={`text-lg font-semibold`}>Adress: </span>
                {server.ip}:{server.port} <br />
                <span className={`text-lg font-semibold`}>Map: </span>
                {server.map} <br />
                <span className={`text-lg font-semibold`}>Players: </span>
                {server.numplayers}/{server.maxplayers} <br />
                <span className={`text-lg font-semibold`}>Engine Type: </span>
                {server.engine_type} <br />
                <span className={`text-lg font-semibold`}>Protocol Ver: </span>
                {server.protocol_ver} <br />               
                <span className={`text-lg font-semibold`}>Gamedir: </span>
                {server.gamedir} <br />
                <span className={`text-lg font-semibold`}>Game Description: </span>
                {server.gamedesc} <br />
                <span className={`text-lg font-semibold`}>App ID: </span>
                {server.appid} <br />
                <span className={`text-lg font-semibold`}>Bots: </span>
                {server.numbots} <br />
                <span className={`text-lg font-semibold`}>Dedicated: </span>
                {server.dedicated} <br />
                <span className={`text-lg font-semibold`}>Operating System: </span>
                {server.os} <br />
                <span className={`text-lg font-semibold`}>Passworded: </span>
                {server.passworded} <br />
                <span className={`text-lg font-semibold`}>Secure: </span>
                {server.secure} <br />
                <span className={`text-lg font-semibold`}>address: </span>
                {server.address} <br />
                <span className={`text-lg font-semibold`}>Server Type:</span>
                {server.servertype} <br />
                <span className={`text-lg font-semibold`}>Is Mod: </span>
                {server.is_mod} <br />
                <span className={`text-lg font-semibold`}>Update Url: </span>
                {server.update_url} <br />
                <span className={`text-lg font-semibold`}>Null: </span>
                {server.null} <br />
                <span className={`text-lg font-semibold`}>Game Url: </span>
                {server.game_url} <br />
                <span className={`text-lg font-semibold`}>Mod Version: </span>
                {server.mod_ver} <br />
                <span className={`text-lg font-semibold`}>Mod Size: </span>
                {server.mod_size} <br />
                <span className={`text-lg font-semibold`}>Mod Type: </span>
                {server.mod_type} <br />
                <span className={`text-lg font-semibold`}>Dll Type: </span>
                {server.dll_type} <br />
                <span className={`text-lg font-semibold`}>Enable Bots: </span>
                {server.bots} <br />
              </p>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}

export default Modal;
