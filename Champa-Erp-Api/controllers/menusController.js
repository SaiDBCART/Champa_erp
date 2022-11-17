'user strict';
var menus = require('../models/menusmodel.js') 


exports.menudata = function(req, res) {
    menus.Mainmenu(req, function(err, post) {
        if (err)
            res.send(err);
        res.json(post);
    })
}