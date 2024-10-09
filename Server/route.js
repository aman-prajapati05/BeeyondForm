import express from "express";
import { dataAdd, getCdata, updateCdata} from "./controller/home.js";

const router = express.Router();

router.post("/home", dataAdd);
router.get("/:cname", getCdata);
router.put("/update/:cname", updateCdata);

export default router;
