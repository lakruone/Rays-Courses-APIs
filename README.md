# Rays-Courses-APIs
NodeJS, MySQL application. online course registration system

<b>Project requirments</b>
node 13.0 or higher version
mysql server

<b>Follow the setup guidline</b>

1. clone the project into your folder.
2. open terminal in the project folder and install node modules
    >npm install

3. create a database with name > "rays_database"
4. Then create the tables according to the following scrypt.


CREATE TABLE admin ( 
admin_id int(255) NOT NULL AUTO_INCREMENT,
admin varchar(255) NOT NULL, 
password varchar(255) NOT NULL , 
PRIMARY KEY (admin_id) );

CREATE TABLE university( 
university_id int(255) NOT NULL AUTO_INCREMENT, 
university_name varchar(255) NOT NULL, 
country varchar(255) NOT NULL , 
PRIMARY KEY (admin_id) );

CREATE TABLE course ( 
course_id int(255) NOT NULL AUTO_INCREMENT, 
uni_id int(255) NOT NULL, 
course_name varchar(255) NOT NULL , 
course_description varchar(255) NOT NULL , 
status varchar(20) NOT NULL , 
PRIMARY KEY (course_id), 
FOREIGN KEY (uni_id) REFERENCES university(university_id) );

CREATE TABLE student ( 
student_id int(255) NOT NULL AUTO_INCREMENT,
course_id int(255) NOT NULL,
first_name varchar(255) NOT NULL , 
last_name varchar(255) NOT NULL , 
email varchar(255) NOT NULL , 
contact_number varchar(20) NOT NULL , 
timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (student_id), 
FOREIGN KEY (course_id) REFERENCES course(course_id) );

5. start the with following command
  >npx nodemon
  
The app will run on localhost 5600


