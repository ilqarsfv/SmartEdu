const express = require("express")
const pageController = require("../controllers/pageController")

const router = express.Router()

router.route("/").get(pageController.pageIndex)
router.route("/about").get(pageController.pageAbout)

module.exports = router
