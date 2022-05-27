

const express = require("express");

const { create, list, listByDoctor, read, confirm, update, attended,
    remove } = require("../controllers/appointment");
const { authenticatateJWT } = require("../middleware");

const router = express.Router();



router.post("/create", authenticatateJWT, create)
router.get("/list/:userId", list)
router.get("/all/:doctorId", listByDoctor)

router.get("/:appointmentId", read)
router.put("/confirm/:appointmentId", confirm)
router.put("/:appointmentId", update)
router.put("/attended/:appointmentId", attended)
router.delete("/:appointmentId", remove)

module.exports = router;