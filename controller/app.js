const express=require("express");
const cookie=require("cookie-parser")
const jwt= require("jsonwebtoken")


const Users=require("../schema/collection")

const Resgitartion=(req,res)=>{
        let user=new Users ({
            username:req.body.username,
            Mobile_No:req.body.Mobile_No,
            Gender:req.body.Gender,
            Age:req.body.Age,
            Email:req.body.Email,
            Password:req.body.Password
            
        })
        user.save()
        .then(user =>{
            res.json({
                message:"user Regsittared successfuly..",
                user:user
            })
        }).catch(error =>{
            res.json({
                message:"An error occured!",
                error:error
            })
            console.log(error);
        })
}

const Login=(req,res)=>{
    var Password=req.body.Password
    var Email=req.body.Email
    Users.findOne({Email:Email},{Password:Password})

    .then(Users =>{
        let token=jwt.sign({id:Users.id}, 'subhashini' ,{expiresIn:"8h"})
        res.cookie("user",token)

        res.json({
            message:"login succesfuly..",
            token
        })
        // }
    })
}

update_UderDetailes=(req,res)=>{
       
            const id=req.params.id
            const result =Users.findByIdAndUpdate(id,{
                $set:{
                    username:req.body.username,
                    Mobile_No:req.body.Mobile_No,
                    Gender:req.body.Gender,
                    Age:req.body.Age,
                    Email:req.body.Email,
                    Password:req.body.Password
                } 
            })
            // res.send(result)
            .then((result)=>{
                res.send({message:"updated successfuly...",result:result

                })

            }).catch((err)=>{
                res.send(err)
            })
        
    }

  

module.exports={Resgitartion,Login,update_UderDetailes}