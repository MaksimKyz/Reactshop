import React, { useEffect, useState } from 'react';
import { Button, ListGroup, Offcanvas } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from "react-redux";
import ShopCart from "./ShopCart";

const MyBasket = () => {
    const [show, setShow] = useState(false);
    const Shop_list = useSelector(state => state.cart.cart)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [totalPrice,setTotalPrice] = useState(0)

    useEffect(()=>{
        setTotalPrice(Shop_list.reduce((previousValue,currentValue)=>previousValue + (currentValue.count*currentValue.price),0))
        localStorage.setItem('cart',JSON.stringify(Shop_list))
    },[Shop_list])




    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                <FontAwesomeIcon icon={faShoppingCart}/>
            </Button>

            <Offcanvas show={show} onHide={handleClose} placement={"end"} scroll={true}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Ваша корзина</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ListGroup>
                        {Shop_list.map(cart => {
                            return <ShopCart key={cart.id} cart={cart}></ShopCart>
                        })}
                    </ListGroup>
                </Offcanvas.Body>
                <div style={{height: 70}}>
                    <span>Total price:</span>
                    <span>{totalPrice}</span>
                </div>
            </Offcanvas>
        </>
    );
};

export default MyBasket;