# Rays-Courses-APIs
NodeJS, MySQL application. online course registration system
Project requirments node 13.0 or higher version, postgresql server

Follow the setup guidline

1. clone the project into your folder.

2. open terminal in the project folder and install node modules

  >npm install

3. create a database with name > "rays_database"

4. Then create the tables according to the following scrypt.

CREATE TABLE admin ( 
admin_id serial primary key, 
admin varchar(255) NOT NULL, 
password varchar(255) NOT NULL  )

CREATE TABLE university( 
university_id serial primary key, 
university_name varchar(255) NOT NULL, 
country varchar(255) NOT NULL )

CREATE TABLE course ( 
course_id serial primary key ,
uni_id int NOT NULL, 
course_name varchar(255) NOT NULL , 
course_description varchar(255) NOT NULL , 
status varchar(20) NOT NULL ,  
FOREIGN KEY (uni_id) REFERENCES university(university_id) )

CREATE TABLE student ( 
student_id serial primary key,
course_id int NOT NULL,
first_name varchar(255) NOT NULL , 
last_name varchar(255) NOT NULL , 
email varchar(255) NOT NULL , 
contact_number varchar(20) NOT NULL , 
timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
FOREIGN KEY (course_id) REFERENCES course(course_id) )

5. start the with following command
  >npx nodemon

The app will run on localhost 5600

The front end of this application is built with React Js. The front end repositary is available in the following link 
https://github.com/lakruone/Rays-Courses---Frontend-ReactJS

There is another version of backend app, which is connected to mysql database. So you can clone it from folling repository.
https://github.com/lakruone/Rays-Courses-APIs/
