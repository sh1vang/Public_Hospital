const express= require("express")
const hbs= require("hbs")

const app = express()
const mongoose = require("mongoose")

const bodyParser= require('body-parser')

const routes=require('./routes/main')

const Detail= require("./models/detail")

const Slider= require("./models/slider")

const Service= require("./models/service")

app.use(bodyParser.urlencoded({
    extended:true
}))

app.use('/static',express.static("public"))
app.use('',routes)

//template engine
app.set('view engine','hbs')
//files kha hai use set krenge mtlb page ka code
app.set('views','views')
hbs.registerPartials("views/partials")



//db connection
mongoose.connect("mongodb://127.0.0.1:27017/website_tut",{useNewUrlParser:true,
useUnifiedTopology:true}).then(() => {
console.log('db connetion done')

// Service.create([
//     {
//         icon:'fa fa-user-plus',
//         title:'Hospital Emergency Services',
//         description:'The first point of contact for any critically ill patient, needing immediate medical attention.',
//         linkText:'https://www.google.com',
//         link:'Check'
//     }
// ])




//  Slider.create([
//     {
//         title:'Medical Office Specialist',
//         subTitle:'Here is the main office of medicine',
//         imageUrl:'static/images/c1.jpg'
//     },
//     {
//         title:'A perfect Doctor',
//         subTitle:'We have a best specialist Doctor',
//         imageUrl:'static/images/c2.jpg'
//     },
//     {
//         title:'Best Quality Medicine',
//         subTitle:'we have a best quality and best company medicine',
//         imageUrl:'static/images/c3.jpg'
//     }
//  ])



//  Detail.create({
//     brandName:"Info Medicine",
//     brandIconUrl:"static/images/medicinelogo.jpg",
//     links: [
//        {
//         label:"Home",
//         url:"/"
//        },
//        {
//         label:"Services",
//         url: "/Services"
//        },
//        {
//         label:"Gallery",
//         url: "/gallery"
//        },
//        {
//         label:"About",
//         url: "/about"
//        },
//        {
//         label:"Contact Us",
//         url: "/contact-us"
//        }
    
//     ]
//  })

})

app.listen(process.env.PORT | 5556,()=>{
    console.log("server started")
})