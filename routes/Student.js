const express = require("express");
const router = express.Router();




router.get('/user',(req,res) =>{

    var firstName = "Lakruwan";
    var lastName = "Priyankara";
    var email = "lakruone@gmail.com";

      return  res.status(200).json({firstName,lastName,email});

});



module.exports = router;
