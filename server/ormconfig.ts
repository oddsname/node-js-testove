import {configs} from "./src/configs/config";

module.exports = {
    type: "mongodb",
    url: configs.MONGO_URL,
    useUnifiedTopology: true,
    authSource: true,
    entities: [
        __dirname + "/src/entity/*.ts"
    ],
    seeds: [
        __dirname + "/src/database/seed/*.ts"
    ],
}