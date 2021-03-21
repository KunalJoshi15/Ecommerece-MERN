import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { listProductDetails } from '../actions/productActions'

const ProductEditScreen = ({ match, history }) => {
  const userId = match.params.id

  const [name, setName] = useState('')
  const [email, setPrice] = useState(0)
  const [image, setImage] = useState('')
  const [brand, setBrand] = useState('')
  const [category, setCategory] = useState('')
  const [countInStock, setCountInStock] = useState(0)
  const [description, setDescription] = useState(0)

  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails


//   const userUpdate = useSelector((state) => state.userUpdate)
//   const {
//     loading: loadingUpdate,
//     error: errorUpdate,
//     success: successUpdate,
//   } = userUpdate

  useEffect(() =>{
      if (!product.name || product._id !== productId) {
        dispatch(getUserDetails(productId))
      } else {
        setName(product.name)
        setPrice(product.email)
        setImage(product.isAdmin)
        setBrand(product.brand)
        setCountInStock(product.countInStock)
        setDescription(product.description)
      }
  },[dispatch,product,history,productId])

  const submitHandler = (e) => {
    e.preventDefault()
    //Submit Product
  }

  return (
    <>
      <Link to='/admin/productList' className='btn btn-light my-3'>
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit Product</h1>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='name'
                placeholder='Enter name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='price'>
              <Form.Label>Price</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter price value'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='image'>
              <Form.Label>Image</Form.Label>
              <Form.Check
                type='text'
                placholder='Enter Image URL'
                checked={image}
                onChange={(e) => setImage(e.target.checked)}
              ></Form.Check>
            </Form.Group>
            <Form.Group controlId='brand'>
              <Form.Label>Brand</Form.Label>
              <Form.Check
                type='text'
                placholder='Enter brand'
                checked={brand}
                onChange={(e) => setBrand(e.target.checked)}
              ></Form.Check>
            </Form.Group>
            <Form.Group controlId='countInStock'>
              <Form.Label>CountInStock</Form.Label>
              <Form.Check
                type='text'
                placholder='Enter CountInStock'
                checked={countInStock}
                onChange={(e) => setCountInStock(e.target.checked)}
              ></Form.Check>
            </Form.Group>
            <Form.Group controlId='countInStock'>
              <Form.Label>Count In Stock</Form.Label>
              <Form.Check
                type='number'
                placholder='Enter CountInStock'
                checked={countInStock}
                onChange={(e) => setCountInStock(e.target.checked)}
              ></Form.Check>
            </Form.Group>
            <Form.Group controlId='category'>
              <Form.Label>Category</Form.Label>
              <Form.Check
                type='text'
                placholder='Enter category'
                checked={category}
                onChange={(e) => setCategory(e.target.checked)}
              ></Form.Check>
            </Form.Group>

            <Form.Group controlId='description'>
              <Form.Label>Description</Form.Label>
              <Form.Check
                type='text'
                placholder='Enter description'
                checked={description}
                onChange={(e) => setDescription(e.target.checked)}
              ></Form.Check>
            </Form.Group>

            <Button type='submit' variant='primary'>
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  )
}

export default ProductEditScreen

