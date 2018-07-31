/*
* GET home page.
*/
var mkdirp = require('mkdirp');
var moment = require('moment');

exports.index = function(req, res){
    var message = 'RESTful Api';
  res.render('api',{message: message});
};

exports.apiApp = function(req, res){

    if(req.method == "POST"){
        var post  = req.body;
        var sdt = post.sdt;
        var created_date= moment().format();
        var update_date= moment().format();
        var status= post.status;

        console.log(post);

        var dir = 'public/phone/'+sdt;
        mkdirp(dir, function (err) {
            if (err) console.error(err)
            else console.log('Dir folder url : ' + dir);
        });

        var sqlCheckPhone="SELECT id FROM `victim` WHERE `sdt`="+sdt+"";
        db.query(sqlCheckPhone, function(err, results){
            if(err){
                res.send(JSON.stringify({"status": 500, "error": err, "response": null}));
                //If there is error, we send the error in the error section with 500 status
            }else{
                if(results.length > 0){
                    var sqlUpdate = "UPDATE `victim` SET `update_date` = '"+ update_date +"', `status` = '" + status + "' WHERE `sdt`='"+ sdt +"'";
                    var queryUpdate = db.query(sqlUpdate, function(err, result) {
                        console.log("Succesfully! Your account has been update." + sdt);
                    });
                    res.send(JSON.stringify({"status": 200, "error": null, "response": results, "type": "Update"}));
                }else{
                    var sqlCreated = "INSERT INTO `victim`(`sdt`,`created_date`,`update_date`,`status`) VALUES ('" + sdt + "','" + created_date + "','" + update_date + "','" + status + "')";
                    var queryCreated = db.query(sqlCreated, function(err, result) {
                        console.log("Succesfully! Your account has been created." + sdt);
                    });
                    res.send(JSON.stringify({"status": 200, "error": null, "response": results, "type": "Created" }));
                }
            }

        });
    }
};
