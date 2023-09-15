const express = require('express');
const { registerUser, loginUser, currentUserInfo,courseOne,courseTwo } = require("../controllers/userController");
const validateToken = require("../middleware/validateTokenHandler");

const router = express.Router();


router.post("/register",registerUser);

router.post("/login",loginUser);

router.get("/current",validateToken,currentUserInfo);
router.get("/courseOne",validateToken,courseOne);
router.get("/courseTwo",validateToken,courseTwo);

module.exports = router;
