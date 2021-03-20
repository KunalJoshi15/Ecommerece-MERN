import Product from '../models/productModel.js'
import asyncHandler from 'express-async-handler'

// @desc Fetch all products
// @route GET /api/products
// @access Public 
const getProducts = asyncHandler(async(req,res)=>{
    const products = await Product.find({})
    // This will fetch us all the products
    res.json(products)
})

// @desc Fetch particular product
// @route GET /api/products/:id
// @access Public
const getProductById =asyncHandler(async(req,res)=>{
    const product = await Product.findById(req.params.id)

    if(product)
    {
        res.json(product)
    }
    else{
        res.status(404)
        throw new Error('Product Not Found')
    }
    res.json(product)
})

// @desc Delete a product
// @route DELETE /api/products/:id
// @access Private/admin
const deleteProduct =asyncHandler(async(req,res)=>{
    const product = await Product.findById(req.params.id)

    if(product)
    {
        await product.remove()
        res.json({message:'Product Removed'})
    }
    else{
        res.status(404)
        throw new Error('Product Not Found')
    }
    res.json(product)
})

export {
    getProducts,
    getProductById,
    deleteProduct
}