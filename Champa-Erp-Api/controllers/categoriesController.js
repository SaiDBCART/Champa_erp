'user strict';

var category = require('../models/categoriesModel.js')

exports.insertcategory = function(req, res) {
    category.Categories(req, function(err, post) {
        if (err)
            res.send(err);  
        res.json(post);
    }) 
}

exports.Logo = function(req, res) {
    category.categoryLogo (req.body, function(err, post) {
        if (err)
            res.send(err);

        res.json(post);
    });
};