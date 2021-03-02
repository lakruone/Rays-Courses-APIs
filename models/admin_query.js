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

//getAllCourses
module.exports.getAllCourses = (callback)=>{
  const qry = 'SELECT * FROM course,university WHERE course.uni_id =university.university_id AND course.status="ACTIVE"';

  pool.query(qry, (err,result) => {
    if(err){
      return callback(err,null);
    }
    if(result[0]==null){
      return callback(null,false);
    }else {
      return callback(null,result);
    }
  });
}

//SaveCourse
module.exports.SaveCourse = (courseName,courseDescription,universityName,country, callback) => {
  const qry1 = 'INSERT INTO university (country,university_name) VALUES(?,?)';
  const qry2 = 'SELECT university_id FROM university WHERE university_name=? && country=? ';
  const qry3 = 'INSERT INTO course (uni_id,course_name,course_description,status) VALUES(?,?,?,?)';

  pool.query(qry1, [country,universityName], (err1,res1) => {
    if(err1){
      console.log(err1);
    }else{
      // console.log(res1);
      pool.query(qry2, [universityName,country], (err2,res2) => {
        if(err2){
          console.log(err2);
        }else {
          pool.query(qry3, [res2[0].university_id,courseName,courseDescription,"ACTIVE"], (err3,res3) => {
            if(err3){
              console.log(err3);
            }else {
              return callback(null,res3);
            }
          })
        }
      });
    }
  })
}
