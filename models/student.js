const pool = require('../config/database');


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

//SaveStudent
module.exports.SaveStudent = (firstName,lastName,email,contactNumber,courseId,callback) => {
  const qry = 'INSERT INTO student (course_id,first_name,last_name,email,contact_number) VALUES(?,?,?,?,?)';

  pool.query(qry, [courseId,firstName,lastName,email,contactNumber], (err,res) => {
    if(err){
      return callback(err,null);
    }else{
      return callback(null,res);
    }
  });
}
