
import { Router } from "express";
import {
  locadora,
  index,
  show,
  update,
  destroy,
} from "../controllers/filme-controller.js";

import check_token from "../middleware/check_token.js";
import check_role from "../middleware/check_role.js"

const router = Router();

router.post("/", check_token, check_role(["ADM", "REC"]), locadora);
router.get("/", check_token, check_role(["REC", "ADM"]), index);
router.get("/:id", check_token, check_role(["REC", "ADM"]), show);
router.put("/:id", check_token, check_role(["ADM", "REC"]), update);
router.delete("/:id", check_token, check_role(["ADM", "REC"]), destroy);

export default router;