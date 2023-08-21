const Product = require("../models/productModel")
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHander = require("../utils/errorhandler");
const ApiFeatures = require("../utils/apifeatures");

//create product --Admin
exports.createProduct = catchAsyncErrors(async (req,res,next)=>{
    console.log(req.body);
    const product = await Product.create(req.body);

    res.status(201).json({
        success:true,
        product
    });
});


//get all products
exports.getAllProducts = catchAsyncErrors(async (req,res) =>{

    const resultPerPage =  10;
    const productCount = await Product.countDocuments();

    const apiFeatures = new ApiFeatures(Product.find(), req.query)
        .search()
        .filter()
        .pagination(resultPerPage);

    const products = await apiFeatures.query;
    res.status(201).json({
        success:true,
        products,
        productCount
    });
});


//get product details
exports.getProductDetails = catchAsyncErrors(async (req,res,next) =>{

    
    const product = await Product.findById(req.params.id)
      
    if(!product){
        return next(new ErrorHander("Product not found",404));
    }



    res.status(201).json({
        success:true,
        product
    })
})


//Update product --Admin
exports.updateProduct = catchAsyncErrors( async (req,res,next) =>{

    let product = await Product.findById(req.params.id);

    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product not found"
        })
    }

    product = await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    });

    res.status(200).json({
        success:true,
        product 
    })
})


//Delete product --Admin

exports.deleteProduct = catchAsyncErrors(async(req,res,next)=>{

    const product = await Product.findByIdAndDelete(req.params.id);

    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product not found"
        });
    }

    

    res.status(200).json({
        success:true,
        message:"Product Daleted Successfully"
    })
})