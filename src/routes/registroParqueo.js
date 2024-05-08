const express = require("express");
const router = express.Router();
const parqueoSchema = require("../models/parqueo");
//create registro
router.post('/registroParqueo',( req,res)=>{
const parqueo = parqueoSchema(req.body);
parqueo
    .save()
    .then((data) => res.json(data))
    .catch((error)=> res.json({message: error}));
});


module.exports = router;