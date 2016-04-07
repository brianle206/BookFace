var User = require('../datasets/users.js');
var fs = require('fs-extra');
var path = require('path');

module.exports.updatePhoto = function(req,res){
	var file = req.files.file;
	var userId = req.body.userId;

	console.log("User " + userId + " is submitting", file);
	var uploadDate = Date();
	var tempPath = file.path;
	var targetPath = path.join(__dirname, "../../uploads/" + userId + uploadDate + file.name);
	var savePath = "/uploads/" + userId + uploadDate + file.name;
	fs.rename(tempPath, targetPath, function(err){
		if(err){
			console.log(err);
		} else {
			User.findById(userId, function(err, userData){
				var user = userData
				user.image = savePath;				}
			})
		}
	})
}