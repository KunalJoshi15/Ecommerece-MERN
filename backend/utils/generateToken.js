import jwt from 'jsonwebtoken'
// THis particular secret key for the JSONWeb token is in env file.
const generateToken = (id)=>{
    return jwt.sign({ id },process.env.JWT_SECRET,{
        expiresIn:'30d'
    })
}

export default generateToken