
'user strict';
var logindata = require('../models/loginModel.js')
exports.registerdata = function(req, res) {
    logindata.registerdata(req, function(err, post) {
        if (err)
            res.send(err);  
        res.json(post);
    }) 
}


exports.loginData = function(req, res) {
    logindata.loginDetails(req,function(err, post) { 
        if (err)
            res.send(err);
        res.json(post);
    })
}
