           
             function makeRequest(url) {
            
                var promise = new Promise( httpPromise );
                
                function httpPromise(resolve, reject) {
                    var httpRequest = new XMLHttpRequest();

                     if ( !httpRequest ) {
                       reject('Giving up :( Cannot create an XMLHTTP instance');
                     }
                     
                     httpRequest.open('GET', url);
                     httpRequest.send();
                     
                     httpRequest.addEventListener('load', httpResolve.bind(httpRequest));
                     httpRequest.addEventListener('error', httpReject.bind(httpRequest));
                     
                     function httpResolve() {                        
                        if ( this.status >= 200 && this.status < 300 ) {
                            // Performs the function "resolve" when this.status is equal to 2xx
                            resolve(JSON.parse(this.response));
                        } else {
                            // Performs the function "reject" when this.status is different than 2xx
                            reject(this.statusText);
                        }                          
                     }
                     
                     function httpReject() {
                         reject(this.statusText);
                     }

                }
                // Return the promise
                return promise;
            }
            
             
            var callback = {
              success: function(data) {
                console.log(2, 'success', data);
              },
              error: function(data) {
                console.log(2, 'error', data);
              }
            };
            
            makeRequest('../data/users.json').then(callback.success, callback.error);
            
          var users = [
        { 
            "_id" : "57ffce008069be6bd948dd31",
             "name": {
                "first": "Day",
                "last": "Gross"
            }
        },
        { 
            "_id" : "57ffce00d421f604048197e9",
            "name": {
                "first": "Simon",
                "last": "Vincent"
            }
        },
        { 
            "_id" : "57ffce01f5a890d50d2ffb93",
            "name": {
                "first": "Mitzi",
                "last": "Graves"
            }
        },
        { 
            "_id" : "57ffce019a42ad4438355f5a",
            "name": {
                "first": "Reynolds",
                "last": "Green"
            }
        },
        { 
            "_id" : "57ffce01cd2844a7e82b1855",
            "name": {
                "first": "Todd",
                "last": "Mack"
            }
        },
        { 
            "_id" : "57ffce01e24d7a1c33de99a3",
            "name": {
                "first": "Elnora",
                "last": "Bates"
            }
        }];
            
 
function displayList(users){
    console.log(users);
};