const Product = require("../models/productModel")



//create product --Admin
exports.createProduct = async (req,res,next)=>{
    console.log(req.body);
    const product = await Product.create(req.body);

    res.status(201).json({
        success:true,
        product
    })
} 

exports.getAllProducts = (req,res) =>{
    res.status(200).json({message:"Root is working properly"})
}