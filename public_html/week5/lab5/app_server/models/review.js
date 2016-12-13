var mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    department: String,
    jobTitle: String,
    salary: String,
    startDate:
     {
        type: Date        
     }
});

var Review = mongoose.model('Review', reviewSchema);

module.exports = Review;