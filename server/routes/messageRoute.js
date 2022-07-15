import express from "express";
import { getMessage, addMessage } from "../controller/msgController.js";
const router = express.Router();

router.post("/", addMessage);
router.get("/:chatId", getMessage);

export default router;
