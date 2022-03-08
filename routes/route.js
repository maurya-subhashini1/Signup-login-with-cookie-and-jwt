const express=require("express")
const {authentication}=require("../Middlewere/Auth")

const router=express.Router()

const {Resgitartion, Login, update_UderDetailes}=require("../controller/app")

router.post("/api/Resgitartion",Resgitartion)
router.post("/login",Login)
router.put("/update/:id",authentication,update_UderDetailes)


module.exports=router