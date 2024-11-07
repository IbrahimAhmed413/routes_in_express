const express = require("express");
const app = express();
const middleware = require('./custommiddleware');

app.route('/users/api/:id')
.all((req, res, next)=>{
    console.log('all middleware');
    next();
})
.get((req, res, next)=>{
    console.log("get middleware");
    next();
})
.patch((req, res, next)=>{
    console.log("patch ho gya");
    next();
})
.delete((req, res, next )=>{
    console.log("delete fn");
    next();
})

app.get('/', middleware("kia bat hy"));
app.use(middleware("good sir"));

app.listen(8000, ()=>{
    console.log("chal rha hy on http://localhost:8000");
})