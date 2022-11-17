'user strict';
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
var sql = require('./db.js');

var hashedPassword;
var login = function () {

}


login.registerdata = function (req, result) {
    console.log(req);
    var query = '';
    const password = req.body.password

    // Encryption of the string password
    bcrypt.genSalt(10, function (err1, Salt) {

        // The bcrypt is used for encrypting password.
        bcrypt.hash(password, Salt, function (err, hash) {
            if (err) {
                return console.log('Cannot encrypt'); 
            }

            hashedPassword = hash;
            console.log(hash);
            query += "Insert into tbl_users (username,password,email)values('" + req.body.username + "','" +hashedPassword + "','" + req.body.email + "');"
            sql.query(query, function (err, res) {

                if (res) {
                    result(null, {
                        "flag": 1,
                        "message": "Success",
                        "data": res
                    });
                } else {
                    result(null, {
                        "flag": 0,
                        "message": err,
                        "data": []
                    });

                }

            })
        })

     })
}

login.loginDetails = function (req, result) {

    console.log(req.body);
    var query = "";
    query = "SELECT * FROM `tbl_users` WHERE username = '" + req.body.username + "';";
    sql.query(query, function (sqlReq, sqlRes) {
        console.log("Keerthana",sqlRes)
        hashedPassword = sqlRes[0].password;
        var userdata = sqlRes;

        const password = req.body.password  ;
        bcrypt.compare(password, hashedPassword,
            function (err, isMatch) {
                if (isMatch) {
                    console.log('Encrypted password is: ', password);
                    console.log('Decrypted password is: ', hashedPassword, err);
                    const token = jwt.sign({req},'secretkey',(err,token)=>{
                    result(null, {
                        "flag": 1,
                        "message": "Login successfully",
                        "data": userdata

                    })
                })
                }else if(!isMatch) {
                    console.log(hashedPassword + ' is not encryption of '
                        + password, err);
                        result(null, {
                            "flag": 0,
                            "message": "invalid Email || Password",
                            "data": []
    
                        })
                }else{
                    if(err){
                        result(null, {
                            "flag": 0,
                            "message": err,
                            "data": []
                        })
                    }
                }
            })
        
    });
}

    module.exports = login;
