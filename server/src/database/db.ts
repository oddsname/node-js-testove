import {Connection, createConnection} from "typeorm";
import {configs} from "../configs/config";
import "reflect-metadata"

export function connectDatabase(): Promise<Connection> {
    // @ts-ignore
    return createConnection({
        type: "mongodb",
        url: configs.MONGO_URL,
        useUnifiedTopology: true,
        authSource: true
    });
}
