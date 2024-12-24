export interface ServerInterface {
    server: {
        ip: string;
        port: number;
        engine_type: string;
        protocol_ver: number;
        hostname: string;
        map: string;
        gamedir: string;
        gamedesc: string;
        appid: number;
        numplayers: number;
        maxplayers: number;
        numbots: number;
        dedicated: number;
        os: string;
        passworded: number;
        secure: number;
        address: string;
        servertype: string;
        is_mod: number;
        game_url: string;
        update_url: string;
        null: number;
        mod_ver: number;
        mod_size: number;
        mod_type: number;
        dll_type: number;
        bots: number;
    }
}  