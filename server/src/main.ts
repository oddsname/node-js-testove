import express from "express"
import {router} from "./router/router";
import {configs} from "./configs/config";
import {createConnection} from "typeorm";

const startApp = (port: string) => {
    createConnection()
        .then(() => console.log('success'))
        .catch((e) => console.error("FAIL", e))

    const app = express();

    app.use(router);

    app.listen(port, () => {
        console.log('Server started on port: ' + port);
    })
}

startApp(configs.SERVER_PORT)