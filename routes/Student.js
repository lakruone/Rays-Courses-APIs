const express = require("express");
const router = express.Router();
const Student = require('../models/student');

router.get('/courses', (req,res) =>{
  Student.getAllCourses((err,result) => {
    if(err){
      console.log(err);
    }else{
      return res.status(200).json({result});
    }
  });
});


router.post('/register-course', (req,res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const contactNumber = req.body.contactNumber;
  const courseId = req.body.courseId;

  Student.SaveStudent(firstName,lastName,email,contactNumber,courseId, (err,result) => {
    if(err){
      console.log(err);
    }else{
      return res.status(200).json({'msg':'success'});
    }
  });

});


module.exports = router;
