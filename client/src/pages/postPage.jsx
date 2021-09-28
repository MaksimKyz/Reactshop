import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { add_cart } from "../state/reducers/cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPlus } from "@fortawesome/free-solid-svg-icons";
import PostImg from "../components/PostPage/PostImg";
import PostDescription from "../components/PostPage/PostDescription";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT } from "../Query/products";
import { useParams } from "react-router-dom";


const PostPage = () => {
    const {id} = useParams()
    const {data, loading, error} = useQuery(GET_PRODUCT,{variables:{id:id}})
    const [productData, setProductData] = useState([])
    const [feature,setFeature] = useState([])
    const [review,setReview] = useState([])
    useEffect(() => {
        if (!loading) {
            setProductData(data.product)
            setFeature(data.product.feature)
            setReview(data.product.review)
        }
    }, [data])


    const dispatch = useDispatch()
    const items = useSelector(state => state.cart.cart)
    const isItemsInCart = items.some(item => item.id === productData.id)
    const AddToCart = (e) => {
        e.stopPropagation()
        if (!isItemsInCart) {
            dispatch(add_cart(productData))
        }
    }
    if (loading){
        return (
            <Spinner style={{position:"absolute",top:`${50}%`,left:`${50}%`}} animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        )
    }
    return (
        <Container style={{paddingTop: 20}}>
            <Row>
                <Col>
                    <PostImg/>
                </Col>
                <Col>
                    <h2 style={{fontWeight: "bold"}}>{productData.name}</h2>
                    <div style={{color:'rgb(125, 135, 156)',fontSize:14}}>Brand: <span style={{color:"black",fontWeight:"bolder"}}>{productData.brand}</span></div>
                    <div style={{fontWeight: "bolder", color: '#e94560',fontSize:22}}>${productData.price}</div>
                    <div style={{fontSize:13}}>{productData.body}</div>
                    <Button variant="primary" size={"sm"} onClick={AddToCart} style={{marginTop:20}}>
                        {isItemsInCart
                            ?
                            <FontAwesomeIcon icon={faCheck}/>
                            :
                            <FontAwesomeIcon icon={faPlus}/>
                        }
                    </Button>
                </Col>
            </Row>
            <Row>
                <PostDescription feature={feature} review={review}/>
            </Row>
        </Container>
    );
};

export default PostPage;