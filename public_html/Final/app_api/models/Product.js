var mongoose = require('mongoose');

var productsSchema = new mongoose.Schema({  
    Name: String,
    Description: String,
    Price: String
});

/* This model will also create the collection in the Loc8r database when used */
var Product = mongoose.model('Product', productsSchema);
