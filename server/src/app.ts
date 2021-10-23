import express, {Router} from 'express';
import bodyParser from 'body-parser';
import cors from "cors"
import {configs} from "./configs/config";
import {errorHandler} from "./http/middlewares/error-hanlder";
import {Controller} from "@overnightjs/core/lib/decorators/types";
import {Server} from "@overnightjs/core";
import {AuthController} from "./http/controllers/auth-controller";

export class App extends Server {
    constructor() {
        super();

        this.initializeMiddlewares();
        this.initializeControllers([
            new AuthController()
        ]);
        this.initializeErrorHandler();
    }

    private initializeMiddlewares() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: true}));

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