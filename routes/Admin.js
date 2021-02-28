const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const Token = require('../config/token')

const Admin = require('../models/admin_query');

//localhost:5600/admin/login
router.post('/login', (req,res) => {

    // console.log(req.body.username);
    var admin_name = req.body.username;
    var password = req.body.password;
    // var token = "ajdnajianjaisd";

    Admin.checkLoginCredentials(admin_name,password, (error,result) => {
      if(error) {
        console.log(error);
      } else if(result==false) {
        // console.log(result);
        return res.status(200).json({result});
      }else{
        jwt.sign({result}, 'LakruSecret', {expiresIn: '24h'}, (err,token) => {
          if(err){
            console.log(err);
          }

          if(token){
            return res.status(200).json({result,token});
          }
        });
      }
    });

});

router.get('/courses',Token.verifyToken, (req,res)=>{
    Admin.getAllCourses((err,result) => {
      if(err){
        console.log(err);
      }else{
        console.log(result);
        return res.status(200).json({result});
      }
    })
});


module.exports = router;
