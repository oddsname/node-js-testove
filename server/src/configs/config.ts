import {config} from "dotenv";

config();

export const configs = {
    SERVER_PORT: process.env.SERVER_PORT || '',
    MONGO_URL: process.env.MONGO_URL || '',
    FRONTEND_URL: process.env.FRONTEND_URL || '',
    ACCESS_TOKEN: process.env.ACCESS_TOKEN || 'secret'
}

