import cors from "cors"
import {configs} from "./configs/config";
import {Controller} from "@overnightjs/core/lib/decorators/types";
import {Server} from "@overnightjs/core";
import {AuthController} from "./http/controllers/auth-controller";
import {json, urlencoded} from "express";
import formData from "express-form-data"
import {errorHandler} from "./http/middlewares/error-handler";
import {UserFileController} from "./http/controllers/user/user-file-controller";
import * as os from "os";

export class App extends Server {
    constructor() {
        super();

        this.initializeMiddlewares();
        this.initializeControllers([
            new AuthController(),
            new UserFileController()
        ]);
        this.initializeErrorHandler();
    }

    private initializeMiddlewares() {
        this.app.use(urlencoded({ extended: false }));
        this.app.use(json());
        const options = {
            uploadDir: os.tmpdir(),
            autoClean: true
        };

// parse data with connect-multiparty.
        this.app.use(formData.parse(options));


        this.app.use(cors({
            origin: [configs.FRONTEND_URL],
            methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
            credentials: true,
        }));
    }

    private initializeControllers(controllers: Array<Controller>) {
        super.addControllers(controllers);
    }

    private initializeErrorHandler() {
        this.app.use(errorHandler);
    }

    public listen(port: string) {
        this.app.listen(port, () => {
            console.log(`\nApp using port ${port}`);
        });
    }
}