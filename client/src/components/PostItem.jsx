import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Col } from "react-bootstrap";
import { add_cart } from "../state/reducers/cart";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPlus, faCheck } from '@fortawesome/free-solid-svg-icons'
import { POST_PAGE_ROUTE } from "../utils/consts";
import { useHistory } from "react-router-dom";


const PostItem = ({post}) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const items = useSelector(state=>state.cart.cart)
    const isItemsInCart = items.some(item=>item.id === post.id)
    const AddToCart = (e) => {
        e.stopPropagation()
        if (!isItemsInCart){
            dispatch(add_cart(post))
        }
    }


    return (
        <Col>
            <Card style={{marginTop:10}}>
                <Card.Img height={150} variant="top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22410%22%20height%3D%22160%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20410%20160%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17bf07a6674%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A21pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17bf07a6674%22%3E%3Crect%20width%3D%22410%22%20height%3D%22160%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22152.8828125%22%20y%3D%2291.2828125%22%3E410x160%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" />
                <Card.Body>
                    <Card.Title style={{overflow: "hidden",whiteSpace:"nowrap"}}>{post.name}</Card.Title>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                        {post.price}₽
                        <Button onClick={AddToCart} variant="primary" size={"sm"}>
                            {isItemsInCart
                                ?
                                <FontAwesomeIcon icon={faCheck} />
                                :
                                <FontAwesomeIcon icon={faPlus} />
                            }
                        </Button>
                    </div>
                    <Button style={{marginTop:10,width:`${100}%`}} onClick={()=>history.push(POST_PAGE_ROUTE + '/' + post.id)}>Просмотр товара</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default PostItem;