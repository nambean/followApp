/*
* GET home page.
*/
 
exports.index = function(req, res){
    var message = '';
  res.render('index',{message: message});
 
};

var moment = require('moment');

exports.apiApp = function(req, res){

    if(req.method == "POST"){
        var post  = req.body;
        var sdt= post.sdt;
        var created_date= moment();
        var update_date= post.update_date;
        var status= post.status;

        var sqlCheckPhone="SELECT id FROM `victim` WHERE `sdt`='"+ sdt +"'";
        db.query(sqlCheckPhone, function(err, results){
            if(results.length){

                var sqlUpdate = "UPDATE `victim` SET `update_date` = '"+ update_date +"', `status` = '" + status + "' WHERE `sdt`='"+ sdt +"'";
                var queryUpdate = db.query(sqlUpdate, function(err, result) {
                    console.log("Succesfully! Your account has been update." + sdt);
                });
            }else{
                var sqlCreated = "INSERT INTO `victim`(`sdt`,`created_date`,`update_date`,`status`) VALUES ('" + sdt + "','" + created_date + "','" + update_date + "','" + status + "')";
                var queryCreated = db.query(sqlCreated, function(err, result) {
                    console.log("Succesfully! Your account has been created." + sdt);
                });
            }
        });
    }
};
