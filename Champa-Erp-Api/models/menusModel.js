'user strict';
var sql = require('./db.js');

var menus = function() {
}
menus.Mainmenu = function(err, result) {
    sql.query("SELECT * FROM main_menu;SELECT * FROM sub_menus;", err, function(err, res) {
        if (res) {
            //submenu get
            console.log(res[0][0].Id);
            console.log(res[1][1].Id);
            var Menu,submenu;
            Menu = res[0];
            submenu  = res[1];
            
             for(var i=0;i<Menu.length;i++){
                Menu[i].submenu=[];
                
                for(var j=0;j<submenu.length;j++){
                        if(submenu[j].MenuId == Menu[i].Id){
                            Menu[i].submenu.push(submenu[j])
                        }
                    }
             }
            result(null, {
                "flag": 1,
                "message": "Success",
                "data": Menu
            });
        } else {
            result(null, { 
                "flag": 0,
                "message": err,
                "data": []
            });

        }
    })
};

module.exports = menus;

