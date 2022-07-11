import express from "express";
import { register, signin, signout } from "../controller/auth";
const router =express.Router();

router.post("/register",register)
router.post('/signin',signin)
router.get('/signout',signout)

module.exports = router 