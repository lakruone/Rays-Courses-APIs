const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const User = require('./routes/User');



//Body parser middleware
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())



//routes
app.use("/",User);





const port = process.env.PORT ||5600;

app.listen(port, () =>{
	console.log(`server listening on port ${port}`);
});
