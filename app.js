const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const Student = require('./routes/Student');
const Admin = require('./routes/Admin');

//cross origin resource sharing
app.use(cors())

//Body parser middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


//routes
app.use("/student", Student);
app.use("/admin", Admin);

const port = process.env.PORT || 5600;

app.listen(port, () =>{
	console.log(`server listening on port ${port}`);
});
