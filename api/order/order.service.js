const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')
const ObjectId = require('mongodb').ObjectId


async function query() {
    console.log('query order service');
    try {
        var criteria = {};
        const collection = await dbService.getCollection('order')
        var orders = await collection.find(criteria).toArray();
        return orders
    } catch (err) {
        console.log('err', err);

        logger.error('cannot find orders', err)
        throw err
    }
}



async function getById(orderId) {
    try {
        const collection = await dbService.getCollection('order')
        const order = collection.findOne({ '_id': ObjectId(orderId) })
        return order
    } catch (err) {
        console.log('err', err);

        logger.error(`while finding order ${orderId}`, err)
        throw err
    }
}


async function add(order) {
    try {
        const collection = await dbService.getCollection('order')
        const addedOrder = await collection.insertOne(order)
        return order
    } catch (err) {
        console.log('err', err);
        logger.error('cannot insert order', err)
        throw err
    }
}
async function update(order) {
    try {
        var id = ObjectId(order._id)
        delete order._id
        const collection = await dbService.getCollection('order')
        await collection.updateOne({ "_id": id }, { $set: {...order } })
        order._id = id
        return order
    } catch (err) {
        logger.error(`cannot update order ${orderId}`, err)
        throw err
    }
}

module.exports = {
    add,
    query,
    getById,
    update,
}


