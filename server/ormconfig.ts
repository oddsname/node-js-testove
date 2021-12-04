import {configs} from "./src/configs/config";

export default {
    type: "mongodb",
    url: configs.MONGO_URL,
    entities: ['src/entity/*.ts'],
    useUnifiedTopology: true,
    authSource: true,
    name: 'default',
}