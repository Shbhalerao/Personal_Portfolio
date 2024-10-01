const express = require('express');
const mongoose = require('mongoose');
const resumeHeaderRoute = require('./routes/resumeHeader');
const PORT = 3000;

const app = express();
app.use(express.json());

app.use((req, res, next)=>{
    console.log(req.path, req.method);
    next();
});

app.use('/api/resume-headers', resumeHeaderRoute);

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    //Listen for requests
    app.listen(process.env.PORT, () => {
    console.log('Connected to DB & Listening on port', process.env.PORT);
    });

})
.catch((error) => {
    console.log(error);
}) ;

app.listen(PORT);