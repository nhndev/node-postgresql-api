const express = require("express")
const router = express.Router()

const bookController = require('../controllers/book.controller')

router.get("/", bookController.getAll)
router.get("/:id", bookController.getById)
router.post("/", bookController.create)
router.put("/:id", bookController.updateById)
router.delete("/:id", bookController.deleteById)

module.exports = router