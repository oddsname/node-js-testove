import {configs} from "./src/configs/config";

export default {
    type: "mongodb",
    url: configs.MONGO_URL,
    useUnifiedTopology: true,
    authSource: true,
    name: 'default',
    entities: [
        __dirname + "/src/entity/*.ts"
    ],
    seeds: [
        __dirname + "/src/database/seed/*.ts"
    ],
}