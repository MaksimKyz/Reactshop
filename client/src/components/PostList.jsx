import React, { useEffect, useMemo, useState } from 'react';
import PostItem from "./PostItem";
import { Button, Row } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { GET_ALL_PRODUCTS } from "../Query/products";
import useInput from "../hoooks/useInput";

const PostList = () => {
     const [limit,setLimit] = useState(12)
    const LoadMore = () => {
        setLimit(limit+12)
    }


    const {data, loading, error} = useQuery(GET_ALL_PRODUCTS,{variables:{
        limit:limit
        }})
    const query = useInput('')
    const [productData, setProductData] = useState([])

    useEffect(() => {
        if (!loading) {
            setProductData(data.products)
        }
    }, [data])

    const searchPost = useMemo(() => {
        return productData.filter(post => post.name.toLowerCase().includes(query.value.toLowerCase()))
    }, [query, productData])

    const sortPriceUp = ()=>{
        setProductData([...productData].sort((a,b)=>a.price-b.price))
    }
    const sortPriceDown = ()=>{
        setProductData([...productData].sort((a,b)=>b.price-a.price))
    }
    const sortPriceTitle = ()=>{
        setProductData([...productData].sort((a,b)=>a.name.localeCompare(b.name)))
    }


    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
            <div style={{display: "flex", justifyContent: "space-between",padding:10}}>
                <div className='sort'>
                    Сортировать:
                    <button className="sort_items" onClick={sortPriceTitle}>по названию</button>
                    <button className="sort_items" onClick={sortPriceUp}>сначала дешевые</button>
                    <button className="sort_items" onClick={sortPriceDown}>сначала дорогие</button>
                </div>
                <div>
                    <input
                        placeholder="введите название товара"
                        {...query}
                        style={{width: 250}}
                    />
                </div>
            </div>
            <Row xs={1} md={4}>
                {searchPost.map(post => {
                    return <PostItem key={post.id} post={post}/>
                })}
            </Row>
            <Button style={{marginTop: 10}} onClick={LoadMore}>Load more</Button>
        </div>
    );
};

export default PostList;