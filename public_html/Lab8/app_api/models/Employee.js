var mongoose = require('mongoose');

var employeesSchema = new mongoose.Schema({  
    firstName: String,
    lastName: String,
    department: String,
    jobTitle: String,
    salary: String,
    employeesText: String,
    startDate:  {
        type: Date        
     }
});

/* This model will also create the collection in the Loc8r database when used */
var Employee = mongoose.model('Employee', employeesSchema);
