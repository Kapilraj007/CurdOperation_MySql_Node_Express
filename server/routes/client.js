const express = require("express");
const router = express.Router();
const clientcon=require("../controllers/clientcon");
//view All records
router.get("/",clientcon.view);

//Add New Records
router.get("/adduser",clientcon.adduser);
router.post("/adduser",clientcon.save);

//update user
router.get("/edituser/:id",clientcon.edituser);
router.post("/edituser/:id",clientcon.edit);

//Delete records
router.get("/deleteuser/:id",clientcon.delete);

/*router.get('',(req,res)=>{
    res.render("home");
});*/

module.exports=router;