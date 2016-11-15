var express = require('express');
var router = express.Router();
var ctrlEmployees = require('../controllers/employees');

// reviews
router.get('/employees', ctrlEmployees.employeesReadAll);
router.get('/employees/:employeesid', ctrlEmployees.employeesReadOne);
router.post('/employees', ctrlEmployees.employeesCreate);
router.put('/employees/:employeesid', ctrlEmployees.employeesUpdateOne);
router.delete('/employees/:employeesid', ctrlEmployees.employeesDeleteOne);

module.exports = router;
