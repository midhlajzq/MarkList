// to define routes for client request , create routes folder and router.js file
// import express
const express= require('express')
// import student controller
const studentController = require('../controller/studentController')

const router=new express.Router()

// api
router.get('/students/all-students',studentController.getallstudents)

// view student
router.get('/students/view-student/:id',studentController.viewstudent)

// add student

router.post('/students/add-student',studentController.addstudent)

router.put('/students/edit-student/:id',studentController.updatestudent)

router.delete('/students/delete/:id',studentController.remove)

module.exports=router
