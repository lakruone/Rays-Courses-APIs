const pool = require('../config/database');
const bcrypt = require('bcryptjs');



//checkEmail - Email alredy registered or not ---rout(user/register)
module.exports.checkLoginCredentials =(admin,password, callback) =>{
  const qry = "select * from admin where admin=$1";

  pool.query(qry, [admin], (err,result) => {
    if (err){
      
      return callback(err,null);
    }
    if(result.rows[0]==null){
          console.log("invalid username")
          return  callback(null,false);    //Invalid credentials
        }else{
          // console.log(result.rows)
          bcrypt.compare(password,result.rows[0].password, (err,res)=>{
            if(err) {
              console.log(err)
            }

            if(res==true){
              return  callback(null,result.rows[0]);    //send admin details
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
  const qry = "SELECT * FROM course,university WHERE course.uni_id =university.university_id AND course.status='ACTIVE'";

  pool.query(qry, (err,result) => {
    if(err){
      return callback(err,null);
    }
    if(result.rows==null){
      return callback(null,false);
    }else {
      return callback(null,result.rows);
    }
  });
}

//SaveCourse
module.exports.SaveCourse = (courseName,courseDescription,universityName,country, callback) => {
  const qry1 = 'INSERT INTO university (country,university_name) VALUES($1,$2)';
  const qry2 = 'SELECT university_id FROM university WHERE university_name=$1 AND country=$2 ';
  const qry3 = 'INSERT INTO course (uni_id,course_name,course_description,status) VALUES($1,$2,$3,$4)';

  pool.query(qry1, [country,universityName], (err1,res1) => {
    if(err1){
      console.log(err1);
    }else{
      pool.query(qry2, [universityName,country], (err2,res2) => {
        if(err2){
          console.log(err2);
          console.log("tets 33")

        }else {
          pool.query(qry3, [res2.rows[0].university_id,courseName,courseDescription,"ACTIVE"], (err3,res3) => {
            if(err3){
              console.log(err3);
            }else {
              return callback(null,res3.rows);
            }
          })
        }
      });
    }
  })
}


//DeleteCourseById
module.exports.DeleteCourseById = (course_id, callback) => {
  const qry = "UPDATE course SET status='DISSABLE' WHERE course_id=$1";

  pool.query(qry, [course_id], (err,res) => {
    if(err){
      return callback(err,null);
    }else{
      return callback(null,true);
    }
  });
}
