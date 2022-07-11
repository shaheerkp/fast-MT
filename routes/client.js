import express from "express";
import { clientFormUpdate,getAllQueries,claimQueries,claimedQuries } from "../controller/client";
import { requireSignin } from "../middleware";
const router =express.Router();

router.post("/client-form",clientFormUpdate)
router.get("/client-form",requireSignin,getAllQueries)

router.post("/claim/:id",requireSignin,claimQueries)

router.get("/counsiler-claimed",requireSignin,claimedQuries)



module.exports = router