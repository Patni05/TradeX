const {model} = require('mongoose')

const {OrdersSchema} = require('../schemas/OrdersSchema.js')

const OrdersModel = new model("Order",OrdersSchema)


module.exports = {OrdersModel};

