import express from "express";
import {
  createChat,
  findChat,
  userChats,
} from "../controller/chatController.mjs";

const router = express.Router();

router.post("/", createChat); //after getting called from index.js..here it will be routed to createchat controller
router.get("/:userId", userChats);
router.get("/find/:firstId/:secondId", findChat); //routes.get/post/update("route",controller)

export default router;
