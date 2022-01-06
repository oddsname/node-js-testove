import mongoose from "mongoose"
import {configs} from "../configs/config";


export const connectDB = async () => mongoose.connect(configs.MONGO_URL, {
    //@ts-ignore
    useNewUrlParser: true,
    useUnifiedTopology: true
});

export const getConnection = () => mongoose.connection;