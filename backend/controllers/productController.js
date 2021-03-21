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

// @desc Create a product
// @route POST /api/products/
// @access Private/admin
const createProduct =asyncHandler(async(req,res)=>{
    const product = new Product({
        name: 'Sample name',
        price:0,
        user: req.user._id,
        image: '/images/sample.jpg',
        brand:'Sample Brand',
        category: 'Sample Category',
        countInStock:0,
        numReviews:0,
        description:'Sample Description'
    })

    const createProduct = await product.save()
    res.status(201).json(product)

})

// @desc Update a product
// @route PUT /api/products/:id
// @access Private/admin
const updateProduct = asyncHandler(async(req,res)=>{
    const {name,price,description,image,brand,category,countInStock} = req.body

    const product = await Product.findById(req.params.id)

    if(product){
        product.name = name;
        product.price = price;
        product.description = description;
        product.image = image;
        product.brand = brand;
        product.category = category;
        product.countInStock = countInStock;

        const updatedProduct = await product.save()
        res.json(updatedProduct)
    }else{
        res.status(404)
        throw new Error('Product not found')
    }
    
})

export {
    getProducts,
    getProductById,
    deleteProduct,
    createProduct,
    updateProduct
}