const express = require('express')
const usermodel1 = require('./module/user')



const app = express()
app.set('view engine','ejs')
app.use(express.json())

app.use(express.urlencoded({extended:true}))


app.get('/',async (req ,res)=>{
    let alluser =await usermodel1.find()
res.render('home',{alluser})
})
app.get('/create',(req ,res)=>{
res.render('form')
// res.render('home')
})
app.post('/create',async (req ,res)=>{

    let user_created =await usermodel1.create({
        name:req.body.username,
        email:req.body.useremail,
        image:req.body.userimage_url
    })
    // res.send(user_created)
res.redirect('/create')
})

app.listen(8000,()=>{
    console.log("server runing at 8000")
})