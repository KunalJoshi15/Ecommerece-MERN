import React,{ useEffect } from 'react'
import { Row,Col } from 'react-bootstrap'
import Product from '../components/Product'
import { listProducts } from '../actions/productActions'
import { useDispatch,useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import ProductCaraousel from '../components/ProductCarousel'
import Meta from '../components/Meta'
import {Link} from 'react-router-dom'
const HomeScreen = ({match}) => {

    const keyword = match.params.keyword
    const pageNumber = match.params.pageNumber || 1
    const dispatch = useDispatch()
    const productList = useSelector(state=>state.productList)
    const {loading,error,products,page,pages} = productList
    
    useEffect(()=>{
        dispatch(listProducts(keyword,pageNumber))
    },[dispatch,keyword,pageNumber])
    return (
        <>
        <Meta/>
        {!keyword ? <ProductCaraousel/>:<Link className='btn btn-light' to='/'>Go Back</Link>}
            <h1>Latest Products</h1>
    {loading?<Loader/>:error?<Message variant='danger'>{error}</Message>:(
        <>
            <Row>
                {products.map((product)=>(
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product}/>
                    </Col>
                ))
                }
            </Row>
            <Paginate pages={pages} page={page}/>
            </>)}

        </>
    )
}
// The error which is thrown is directly visible in the component.
// The events have been fired off as expected we need to use the useDispatch for the dispatching the actions present in the action file.
export default HomeScreen
