import express, {Router} from "express";
import {authController} from "../controllers/auth-controller";

const router: Router = express.Router();

router.get('/login', authController.login)

export {
    router
}