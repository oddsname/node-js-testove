import express, {Router} from "express";
import {User} from "../models/user";

const router: Router = express.Router();

router.get('/', async (req, res) => {

    console.log(await User.findOne({}));

    res.end("<h1>Send</h1>")
})

export {
    router
}