
function formView(req, res) {
    
     res.render('form', { title: 'Form Page' });
}

function formPost(req, res) {
    
    if (req.method === 'POST') {
       res.render('results', { 
            title : 'Form Post Page',
            name : req.body.name,
            email : req.body.email,
            comment : req.body.comment
            
        });       
    } else {
         res.render('results', { 
            title : 'Form Post Page',
            author: 'No Author Found'
        });
    }   
}

/* Set the module class to have functions available for other files. */
module.exports.formView = formView;
module.exports.formPost = formPost;
