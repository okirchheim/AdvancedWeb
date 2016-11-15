var mongoose = require('mongoose');
var Employee = mongoose.model('Employee');


function sendJSONresponse(res, status, content) {
    res.status(status);
    res.json(content);
};


module.exports.employeesReadAll = function(req, res) {
        
      console.log('Getting all reviews');
    Employee
     .find()
     .exec(function(err, results){
          if ( err ) {
              sendJSONresponse(res, 404, err);
          } else {
              sendJSONresponse(res, 200, results);
          }
     });

    
};

module.exports.employeesReadOne = function(req, res) {
    
     if (req.params && req.params.employeesid) {
      console.log('Getting single employees with id =', req.params.employeesid );
      Employee
      .findById(req.params.employeesid)
      .exec(function(err, results){

          if ( results ) {
             sendJSONresponse(res, 200, results);
          } else {
              sendJSONresponse(res, 404, {
                "message": "employee id not found"
              });
          }

      });

    } else {
        sendJSONresponse(res, 404, {
            "message": "employees id not found"
        });
    }
};
/*   POST a new Employees
 *   /api/v1/Employeess 
 */
module.exports.employeesCreate = function(req, res) {
    
    console.log('Creating an employee with data ', req.body);
    
    Employee.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        department: req.body.department,
        jobTitle: req.body.jobTitle,
        salary: req.body.salary,
        startDate: req.body.date,
        employeesText: req.body.employeesText
    }, function(err, dataSaved) {
        if (err) {
          console.log(err);
          sendJSONresponse(res, 400, err);
        } else {
          console.log(dataSaved);
          sendJSONresponse(res, 201, dataSaved);
        }
    });
  
  
};


module.exports.employeesUpdateOne = function(req, res) {
    
  if ( !req.params.employeesid ) {
    sendJSONresponse(res, 404, {
      "message": "Not found, employee id is required"
    });
    return;
  }
  Employee
    .findById(req.params.employeesid)
    .exec( function(err, employeesData) {
        if (!employeeData) {
          sendJSONresponse(res, 404, {
            "message": "Employeesid not found"
          });
          return;
        } else if (err) {
            sendJSONresponse(res, 400, err);
            return;
        }
        employeesData.firstName = req.body.firstName;
        employeesData.lastName = req.body.lastName;
        employeesData.department = req.body.department;
        employeesData.jobTitle = req.body.jobTitle;
        employeesData.salary = req.body.salary;
        employeesData.startDate = req.body.startDate;
        employeesData.employeesText = req.body.employeesText;

        employeesData.save(function(err, data) {
          if (err) {
            sendJSONresponse(res, 404, err);
          } else {
            sendJSONresponse(res, 200, data);
          }
        });
    });
    
};


module.exports.employeesDeleteOne = function(req, res) {
  if ( !req.params.employeesid ) {
    sendJSONresponse(res, 404, {
      "message": "Not found, employee id is required"
    });
    return;
  }
  Employee
    .findByIdAndRemove(req.params.employeesid)
    .exec( function(err, employeesData) {
        if (err) {
            console.log(err);
            sendJSONresponse(res, 404, err);
            return;
        }
          console.log("Employee id " + req.params.employeesid + " deleted");
          sendJSONresponse(res, 204, null);
                
    });
};
