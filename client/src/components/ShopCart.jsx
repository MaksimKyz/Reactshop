import React from 'react';
import { Button, CloseButton, ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import {delete_count, add_count, delete_cart } from "../state/reducers/cart";

const ShopCart = ({cart}) => {
    const dispatch = useDispatch()

    function Decrement() {
        dispatch(add_count(cart))
    }
    function Increment() {
        if (cart.count<=1){
        }
        else {
            dispatch(delete_count(cart))
        }
        }
    function deletePost() {
        dispatch(delete_cart(cart))
    }

    return (
        <div>
            <ListGroup.Item style={{display: "flex", alignItems: "center", height: `${100}%`}}>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <Button size="sm" style={{borderRadius: 20}} onClick={Decrement}>
                        <FontAwesomeIcon icon={faPlus}/>
                    </Button>
                    {cart.count}
                    <Button size="sm" style={{borderRadius: 20}} onClick={Increment}>
                        <FontAwesomeIcon icon={faMinus}/>
                    </Button>
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: `${100}%`,
                    alignItems: "center",
                    marginLeft: 10
                }}>
                    <div style={{display:"flex"}}>
                        <div>
                            <img width={80} height={80} src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22410%22%20height%3D%22160%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20410%20160%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17bf07a6674%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A21pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17bf07a6674%22%3E%3Crect%20width%3D%22410%22%20height%3D%22160%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22152.8828125%22%20y%3D%2291.2828125%22%3E410x160%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt=""/>
                        </div>
                        <div style={{display:"flex",flexDirection:"column",marginLeft:10}}>
                            <span style={{fontWeight:"bold"}}>
                                {cart.name}
                            </span>
                            <span style={{fontSize:10}}>
                                {cart.price}*{cart.count}
                            </span>
                            <span>
                                {cart.price*cart.count}₽
                            </span>
                        </div>
                    </div>

                    <CloseButton onClick={deletePost}/>
                </div>

            </ListGroup.Item>

        </div>
    );
};

export default ShopCart;