import {configs} from "./configs/config";
import {createConnection} from "typeorm";
import {App} from "./app";

createConnection().then(() => {
    console.log(`\nDatabase Connected`);

    const app = new App();

    app.listen(configs.SERVER_PORT);

})

