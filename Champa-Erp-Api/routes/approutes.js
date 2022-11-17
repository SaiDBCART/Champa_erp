'use strict';
module.exports = function (app) {
    var login = require('../controllers/loginController');
    var menus = require('../controllers/menusController');
    var category = require('../controllers/categoriesController');


app.route('/login')
    .post(login.loginData)

app.route('/register')
    .post(login.registerdata)

app.route('/menus')
    .get(menus.menudata)
       
app.route('/categories')
    .post(category.insertcategory)

app.route('/updatelogo')
   .post(category.Logo)
    


}
