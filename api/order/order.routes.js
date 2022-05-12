const express = require('express')
const { requireAuth, requireAdmin } = require('../../middlewares/requireAuth.middleware')
const { log } = require('../../middlewares/logger.middleware')
const { getOrders, getOrderById, addOrder, updateOrder, addReview } = require('./order.controller')
const router = express.Router()

// middleware that is specific to this router


router.get('/', getOrders)
router.get('/:id', getOrderById)
router.post('/', addOrder)
router.put('/:id', updateOrder)

module.exports = router

