import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
// @desc Auth user and get Token
// @route GET /api/users/login
// @access Public 
const authUser =asyncHandler(async(req,res)=>{
    const { email,password } = req.body

    const user = await User.findOne({email:email})
// This is cleaner all is done in user model
    if(user && await user.matchPassword(password))
    {
        res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin: user.isAdmin,
            token:generateToken(user._id)
        })
    }
    else{
        // We are able to perform our basic authentication with it.
        res.status(401)
        throw new Error("Invalid Email and password")
    }
})
// @desc Register a new user
// @route GET /api/users/
// @access Public 
const registerUser =asyncHandler(async(req,res)=>{
    const { name,email,password } = req.body

    const userExists = await User.findOne({email:email})
    if(userExists)
    {
        res.status(400)
        throw new Error('User Already Exists')
    }

    const user = await User.create({
        name,
        email,
        password
    })
    if(user)
    {
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin: user.isAdmin,
            token:generateToken(user._id)
        })
    } else{
        res.status(400)
        throw new Error('User not found')
    }
})

// @desc Auth user and get Token
// @route GET /api/users/profile
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)
  
    if (user) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      })
    } else {
      res.status(404)
      throw new Error('User not found')
    }
  })
// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)
  
    if (user) {
      user.name = req.body.name || user.name
      user.email = req.body.email || user.email
      if (req.body.password) {
        user.password = req.body.password
      }
  
      const updatedUser = await user.save()
  
      res.json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
        token: generateToken(updatedUser._id),
      })
    } else {
      res.status(404)
      throw new Error('User not found')
    }
  })

export {
    registerUser,
    authUser,
    getUserProfile,
    updateUserProfile
};
