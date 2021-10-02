import {config} from "dotenv";

config();

export const configs = {
    serverPort: process.env.SERVER_PORT || '',
    mongoUrl: process.env.MONGO_URL || '',
}