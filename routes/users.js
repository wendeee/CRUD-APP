const express = require('express')

const router = express.Router()

const controller = require('../controller/controller')

//Get all available data
router.get('/', controller.getAllData)

//Get a user by id
router.get('/:id', controller.getDataById)

//Add a new data
router.post('/', controller.addNewData)

//Update an existing data
router.put('/:id', controller.updateData)

//Delete data with a given id
router.delete('/:id', controller.deleteData)

module.exports = router