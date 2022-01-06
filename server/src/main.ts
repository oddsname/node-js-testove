import {configs} from "./configs/config";
import {connectDB} from "./database";
import {App} from "./app";

connectDB().then(() => {
    console.log(`\nDatabase Connected`);

    const app = new App();

    app.listen(configs.SERVER_PORT);
})

