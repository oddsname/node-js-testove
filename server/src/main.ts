import mongoose from "mongoose";
import express from "express"
import {router} from "./router/router";
import {configs} from "./configs/config";

const startApp = (port: string, databaseUrl: string) => {
    mongoose.connect(databaseUrl).then(() => {
        console.log('Mongo connected')
    })

    const app = express();

    app.use(router);

    app.listen(port, () => {
        console.log('Server started on port: ' + port);
    })
}

startApp(
    configs.serverPort,
    configs.mongoUrl
)