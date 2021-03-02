const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const Token = require('../config/token')

const Admin = require('../models/admin');

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
        return res.status(200).json({result});
      }
    })
});

router.post('/add-new-course',Token.verifyToken, (req,res)=>{

  const courseName = req.body.courseName;
  const courseDescription = req.body.courseDescription;
  const universityName = req.body.universityName;
  const country = req.body.country;

  Admin.SaveCourse(courseName,courseDescription,universityName,country, (err,result) => {
    if(err){
      console.log(err);
    }else{
      return res.status(200).json({'msg':'success'});
    }
  });
});

router.delete('/delete-course/:id', Token.verifyToken, (req,res) => {
  // console.log(req.params.id+ 'course id');
  // console.log(req.body);
  const course_id = req.params.id;
  Admin.DeleteCourseById(course_id, (err, result) => {
    if(err){
      console.log(err);
    }else {
      return res.status(200).json({'msg':'success'});
    }
  })
});


module.exports = router;
