import {Connection, createConnection, getConnection} from "typeorm";
import {configs} from "../configs/config";
import "reflect-metadata"

export async function connectDatabase(): Promise<Connection> {

    try {
        // @ts-ignore
        await createConnection();

        const connection = getConnection();

        if(connection.isConnected) {
            console.log("db connected with", connection.name, "connection");

            return connection;
        }

        throw new Error("there was a problem connecting to the database...");
    } catch(err: any) {
        console.log(err.message);
        process.exit();
    }
}
