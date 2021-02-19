const pool = require('../config/database');



//checkEmail - Email alredy registered or not ---rout(user/register)
module.exports.checkEmail =(email, callback) =>{
  const qry = "select user_id from user where email=?";

  pool.query(qry,[email], (err,result) => {
    if (err){
      return callback(err,null);
    }
    if(result[0]==null){
          return  callback(null,false);    //email not registered
        }else{
          return callback(null,true);  //email already registered
        }
      });
}
