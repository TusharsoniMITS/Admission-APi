const express = require('express')
const UserController = require('../controller/UserController')
const TenderController = require('../controller/tendercontroller')
const route = express.Router()

// route.post('/',UserController.insertReg)
route.post('/insertReg',UserController.Registraion)
route.post('/Tender_insert',TenderController.Tender_insert)
route.get('/getTender',TenderController.getTender)
route.post('/getTenderById/:id',TenderController.getTenderById)
route.post('/deleteTender/:id',TenderController.deleteTender)


module.exports =route
