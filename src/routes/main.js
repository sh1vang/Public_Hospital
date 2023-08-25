const express= require('express')
const { route } = require('express/lib/application')

const Detail= require("../models/detail")
const slider = require('../models/slider')
const Service = require('../models/service')
const async = require('hbs/lib/async')

const Contact= require('../models/contact')



const routes= express.Router()

routes.get("/", async (req,res)=>{

   const details=await Detail.findOne({"_id":"6497223fb47e7ab66e76403c"}) 
   const slides=await slider.find()
   const services=await Service.find()
    //  console.log(slides)
   //console.log(details)

    res.render("index",{
        details:details,
        slides:slides,
        services:services
        
    })



})

routes.get("/gallery", async (req,res) =>   
{
    const details=await Detail.findOne({"_id":"6497223fb47e7ab66e76403c"}) 
    

    res.render("gallery",{
        details:details
    })
})


    // process contact form
routes.post("/process-contact-form",async (request,response) =>{
    console.log("form is submitted")
    console.log(request.body)
    //save the data to the db

    try{
        
        const data=await Contact.create(request.body)
        console.log(data)
        response.redirect("/")    //data submit hone k bad direct home page par 

    }catch(e)
    {
        console.log(e)
        response.redirect("/")
    }
})

module.exports=routes