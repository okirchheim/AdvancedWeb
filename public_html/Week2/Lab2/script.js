
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
        
    docfrag.appendChild( createParagraphElement('Name', ' ' + data.name.first + ' ' + data.name.last) );
    docfrag.appendChild( createParagraphElement('Company', ' ' + data.company) );
    docfrag.appendChild( createParagraphElement('Email', ' ' + data.email) );
    docfrag.appendChild( createParagraphElement('Phone', ' ' + data.phone) );
    docfrag.appendChild( createParagraphElement('Address', ' ' + data.address) );
    docfrag.appendChild( createParagraphElement('Registered', ' ' + data.registered) );
    docfrag.appendChild( createParagraphElement('Age', ' ' + data.age) );
    docfrag.appendChild( createParagraphElement('EyeColor', ' ' + data.eyeColor) );
    docfrag.appendChild( createParagraphElement('Greeting', ' ' + data.greeting) );
    docfrag.appendChild( createParagraphElement('FavoriteFruit', ' ' + data.favoriteFruit) );
    docfrag.appendChild( createParagraphElement('Balance', ' ' + data.balance) );
    docfrag.appendChild( createParagraphElement('About', ' ' + data.about) );
    
    
    var completed = createParagraphElement('Completed: ', data.completed);
    completed.setAttribute('class', 'link');
    completed.addEventListener('click', function(){ data.completed = !data.completed;displayContent(data);});
    docfrag.appendChild( completed );
    dom.appendChild(docfrag);
     
    
    function createParagraphElement(label, text) {
                var pTag = document.createElement('p'),
                    strongTag = document.createElement('strong'),
                    strongText = document.createTextNode(label),
                    pText = document.createTextNode(text);
          
                    strongTag.appendChild(strongText);
                    pTag.appendChild(strongTag);  
                    pTag.appendChild(pText);  
                    return pTag;
            }
            
             
             
            window.addEventListener('load', displayList.bind(null, 'ul.links', users));
}
