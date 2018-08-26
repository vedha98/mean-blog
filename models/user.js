const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const config = require('../config/database');

//Schema
const UserSch = mongoose.Schema({
  name:{
    type:String
  },
  random:{
    type:String
  },
  validation:{
    type:Boolean
  },
  email:{
    type:String,
    required:true
  },
  username:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
posts:[{
  name: String,
  body: String }]
})

const User = module.exports = mongoose.model('Users',UserSch);
var userMap = [];

//get all posts function
module.exports.getAllPosts = function (dd,callback) {

  User.find({}, function(err, users) {


    users.forEach(function(user) {
const aa = user.posts;
      aa.forEach((us)=>{

        userMap.push(us);
      })
callback(userMap)
    });
console.log(userMap);
});
  return userMap;
};
module.exports.getUserById = function (id,callback) {
  console.log(id);
  User.findById({_id:id},callback);
};
module.exports.getUserByUsername = function (name,callback) {
  const query = {username:name};

  User.findOne(query,callback);

};

module.exports.addUser = function (newUser,callback) {

  bcryptjs.genSalt(10,(err,salt)=>{
    bcryptjs.hash(newUser.password,salt,(err,hash)=>{
      newUser.password=hash;
      newUser.save(callback)
    })
  })
};

module.exports.comparePassword = function (canditatePass,hash,callback) {
bcryptjs.compare(canditatePass,hash,(err,isMatch)=>{
  if(err) throw err;
  callback(err,isMatch);
})
};

module.exports.Update = function (id,detail,callback) {
  var query = { random: id };

  User.findOneAndUpdate(query, {$push: {"posts":{name:detail.name,
  body:detail.body}}},{safe: true, upsert: true, new: true},(err,user)=>{
  callback(err,this.User)
  } );

};
module.exports.Validate = function (user,callback) {
var query = { random:user.token};
console.log(query);
User.findOneAndUpdate(query,{"validation":true},(err,user)=>{
callback(err,this.User);
} );
return true;
};
module.exports.checkUserExist = function (user,callback) {
const query = {username:user.username}
console.log(user);
email = null;
urname = null;
User.find(query,(err,user)=>{
if(err) throw err;
if(user[0]){

  callback(user)

}else{
  callback(email)
}

  });





};

module.exports.checkEmailExist = function (user,callback) {
const query = {email:user.email}
console.log(user);
email = null;
urname = null;
User.find(query,(err,user)=>{
if(err) throw err;
if(user[0]){

  callback(user)

}else{
  callback(email)
}

  });





};
