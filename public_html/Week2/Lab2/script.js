
/* global data */

function makeRequest(url)
{
    var promise = new Promise( httpPromise );

    function httpPromise(resolve, reject)
    { 
            var httpRequest = new XMLHttpRequest();

             if ( !httpRequest )
             {
               reject('Giving up :( Cannot create an XMLHTTP instance');
             }

 httpRequest.open('GET', url);
 httpRequest.send();

 httpRequest.addEventListener('load', httpResolve.bind(httpRequest));
 httpRequest.addEventListener('error', httpReject.bind(httpRequest));

     function httpResolve()
     {                        
        if ( this.status >= 200 && this.status < 300 ) {
            // Performs the function "resolve" when this.status is equal to 2xx
            resolve(JSON.parse(this.response));
        } else {
            // Performs the function "reject" when this.status is different than 2xx
            reject(this.statusText);
        }                          
     }

     function httpReject()
     {
         reject(this.statusText);
     }
 }
// Return the promise
return promise;
}

var callback = {
    success: function(data)
    {
       displayList(data);      
    },
error: function(data)
    {
        console.log(2, 'error', data);
    }};

var callback2 = {
    success: function(data)
    {         console.log(2, 'success2', data);
      displayContent(data);
    },
    
error: function(data)
    {
        console.log(2, 'error2', data);
    }};

makeRequest("data/users.json").then(callback.success, callback.error);

function displayList(data)
    {
        var dom = document.querySelector('ul.users');                
        var docfrag = document.createDocumentFragment();                
        
        
        for (var p = 0; p<data.users.length;p++)
            {                 
                var li = document.createElement("li");            
                li.textContent = data.users[p].name['first'] + ' ' +  data.users[p].name['last'];                    
                li.setAttribute('class', 'link');                    
                li.addEventListener('click', clickPerson.bind(null,'data/'+ data.users[p]._id + '.json'));
                docfrag.appendChild(li);
            }

            dom.appendChild(docfrag);
}
function clickPerson(data)
{
    console.log(data);
    makeRequest(data).then(callback2.success, callback2.error);
}
function displayContent(data)
{
    var dom = document.querySelector('section.featured');
    var docfrag = document.createDocumentFragment();

    /* remove any child elements */
    while (dom.firstChild)
        {
            dom.removeChild(dom.firstChild);
        }   
        
    docfrag.appendChild( createParagraphElement('id', data._id) );
    docfrag.appendChild( createParagraphElement('name', data.users.name.first) );
    
    var completed = createParagraphElement('Completed: ', users.completed);
    completed.setAttribute('class', 'link');
    completed.addEventListener('click', function(){ users.completed = !users.completed;displayContent(users);});
    docfrag.appendChild( completed );
    dom.appendChild(docfrag);
}
