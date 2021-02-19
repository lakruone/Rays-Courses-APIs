const express = require("express");
const router = express.Router();
const Admin = require('../models/admin_query');

//localhost:5600/admin/login
router.post('/login',(req,res) =>{

    var admin_name = req.body.admin_name;
    var password = req.body.password;

    Admin.checkLoginCredentials(admin_name,password, (error,result) => {
      if(error){
        console.log(error);
      }else {
        console.log(result);
        return  res.status(200).json({result});
      }
    });

});


module.exports = router;
