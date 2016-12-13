var mongoose = require('mongoose');
var Product = mongoose.model('Product');

function sendJSONresponse(res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.productsReadAll = function(req, res) {
        
      console.log('Getting all products');
    Product
     .find()
     .exec(function(err, results){
          if ( err ) {
              sendJSONresponse(res, 404, err);
          } else {
              sendJSONresponse(res, 200, results);
          }
     });    
};

module.exports.productsReadOne = function(req, res) {
    
     if (req.params && req.params.productsid) {
      console.log('Getting single product with id =', req.params.productsid );
      Product
      .findById(req.params.productsid)
      .exec(function(err, results){

          if ( results ) {
             sendJSONresponse(res, 200, results);
          } else {
              sendJSONresponse(res, 404, {
                "message": "product id not found"
              });
          }

      });

    } else {
        sendJSONresponse(res, 404, {
            "message": "products id not found"
        });
    }
};
/*   POST a new Products
 *   /api/v1/Productss 
 */
module.exports.productsCreate = function(req, res) {
    
    console.log('Creating an product with data ', req.body);
    
    Product.create({
        Name: req.body.Name,
        Description: req.body.Description,
        Price: req.body.Price
        
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


module.exports.productsUpdateOne = function(req, res) {
    
  if ( !req.params.productsid ) {
    sendJSONresponse(res, 404, {
      "message": "Not found, product id is required"
    });
    return;
  }
  Product
    .findById(req.params.productsid)
    .exec( function(err, productsData) {
        if (!productsData) {
          sendJSONresponse(res, 404, {
            "message": "Products id not found"
          });
          return;
        } else if (err) {
            sendJSONresponse(res, 400, err);
            return;
        }
        productsData.Name = req.body.Name;
        productsData.Description = req.body.Description;
        productsData.Price = req.body.Price;  

        
        productsData.save(function(err, data) {
          if (err) {
            sendJSONresponse(res, 404, err);
          } else {
            sendJSONresponse(res, 200, data);
          }
        });
    });
    
};


module.exports.productsDeleteOne = function(req, res) {
  if ( !req.params.productsid ) {
    sendJSONresponse(res, 404, {
      "message": "Not found, product id is required"
    });
    return;
  }
  Product
    .findByIdAndRemove(req.params.productsid)
    .exec( function(err, productsData) {
        if (err) {
            console.log(err);
            sendJSONresponse(res, 404, err);
            return;
        }
          console.log("Product id " + req.params.productsid + " deleted");
          sendJSONresponse(res, 204, null);
                
    });
};
