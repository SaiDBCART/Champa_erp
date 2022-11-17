'user strict';
var sql = require('./db.js');

var category = function () {

}
category.Categories = function (categories, result) {
    var query = "";
    query += "Insert into categories (Name, Logo, CreatedBy, CreatedDate) values ('" + categories.body.Name+ "','" + categories.body.Logo+ "','" + categories.body.CreatedBy + "',CURRENT_TIMESTAMP());";
    console.log(categories.body)
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
    });
}


category.categoryLogo = function (Category, result) {
    var query = "";
    console.log(Category)

    query += "UPDATE `categories` SET `Logo`  = '" + Category.Filename + "'WHERE Id ='" + Category.Id + "' ;";
    sql.query(query, function (err, res) {
        console.log(res);
        if (err) {
            result(null, {
                "flag": 0,
                "message": err,
                "data": []
            })

        } else {
            if (res.affectedRows == 1) {
                    result(null, {
                        "flag": 1,
                        "message": "Logo Updated successfully",
                        "data": res
                    });
                

            }
        }
    });
};

module.exports = category;