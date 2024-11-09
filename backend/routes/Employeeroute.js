const express=require('express')
const router=express.Router();
const employeeController=require('../controllers/EmployeeController')
const Employee=require('../models/Employee')


router.post("/add-emp",employeeController.createEmployee);
router.get("/get-employees",employeeController.getEmployees);
router.get("/get-employee/:id",employeeController.getEmployee);
router.put("/update-emp/:id",employeeController.updateEmployee);
router.delete("/delete-emp/:id",employeeController.deleteEmployee);

module.exports=router;

