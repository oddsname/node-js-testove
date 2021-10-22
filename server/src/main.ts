import {connectDatabase} from "./database/db";
import express from "express"
import {router} from "./router/router";
import {configs} from "./configs/config";

const startApp = (port: string) => {
    connectDatabase().then(() => {
        console.log('success');
    }).catch(() => console.log('fail'))

    const app = express();

    app.use(router);

    app.listen(port, () => {
        console.log('Server started on port: ' + port);
    })
}

startApp(
    configs.SERVER_PORT,
)