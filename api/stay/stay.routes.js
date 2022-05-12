const express = require('express')
const { requireAuth, requireAdmin } = require('../../middlewares/requireAuth.middleware')
const { log } = require('../../middlewares/logger.middleware')
const { getStays, getStayById, updateStay, addReview } = require('./stay.controller')
const router = express.Router()



router.get('/', getStays)
router.get('/:id', getStayById)
router.post('/')
router.put('/:id', updateStay)


module.exports = router

