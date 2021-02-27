const pool = require('../config/database');
const bcrypt = require('bcryptjs');



//checkEmail - Email alredy registered or not ---rout(user/register)
module.exports.checkLoginCredentials =(admin,password, callback) =>{
  const qry = "select * from admin where admin=?";

  pool.query(qry, [admin], (err,result) => {
    if (err){
      return callback(err,null);
    }
    if(result[0]==null){
          return  callback(null,false);    //Invalid credentials
        }else{
          bcrypt.compare(password,result[0].password, (err,res)=>{
            if(err) throw err;
            if(res==true){
              return  callback(null,result[0]);    //send admin details
            }
            if(res==false){
              return  callback(null,false);    //Invalid credentials
            }
          })
        }
      });
}
