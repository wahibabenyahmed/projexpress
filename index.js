const express =require('express');
const path=require('path');
const {testDate}=require ('./middelwar/testdate')
const app = express();
app.set('view engine','pug');
app.set('views','view');
app.use(express.static(path.join(__dirname,'stylesheet')))

app.get('/',testDate,(req,res)=>{
    res.render('home')
})

app.get('/contacts',testDate,(req,res)=>{
    res.render('contacts');
    });
    app.get('/our-service',testDate,(req,res)=>{
        res.render('our-service');
        });
app.listen(3001)