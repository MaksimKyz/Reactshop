import React, { useEffect, useMemo, useState } from 'react';
import { Container, ListGroup, Button, Modal, Row } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { GET_ALL_PRODUCTS } from "../Query/products";
import useInput from "../hoooks/useInput";
import ModalAdmin from "../components/ModalAdmin";
import AddProduct from "../components/AddProduct";

const Admin = () => {
    const {data, loading, error} = useQuery(GET_ALL_PRODUCTS,{pollInterval:500})
    const [productData, setProductData] = useState([])
    const query = useInput('')

    const searchPost = useMemo(() => {
        return productData.filter(post => post.name.toLowerCase().includes(query.value.toLowerCase()))
    }, [query, productData])


    useEffect(() => {
        if (!loading) {
            setProductData(data.products)
        }
    }, [data])

    return (
        <Container>
            <div style={{display:"flex",justifyContent:"space-between",marginTop:10}}>
                <input
                    placeholder="введите название товара"
                    {...query}
                    style={{width: 250}}
                />
                <AddProduct/>
            </div>
            <ListGroup>
                {searchPost.map((post)=>{
                    return <ListGroup.Item key={post.id} variant="primary" style={{display:'flex',justifyContent:"space-between",alignItems:"center"}}>
                        <div>
                            <span>{post.name}</span>
                            <span style={{marginLeft:10}}>{post.price}₽</span>
                        </div>
                        <div>
                            <ModalAdmin post={post}/>
                        </div>
                    </ListGroup.Item>
                })}
            </ListGroup>
        </Container>
    );
};

export default Admin;