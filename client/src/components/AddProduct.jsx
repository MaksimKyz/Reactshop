import React from 'react';
import { Button, Form, Modal } from "react-bootstrap";
import useInput from "../hoooks/useInput";
import { useMutation } from "@apollo/client";
import { ADD_PRODUCT, UPDATE_PRODUCT } from "../Query/products";

const AddProduct = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const name = useInput('')
    const price = useInput('')
    const body = useInput('')

    const [addProduct] = useMutation(ADD_PRODUCT)
    const add = (e) => {
        e.preventDefault()
        addProduct({
            variables:{
                name:name.value,
                body:body.value,
                price:Number(price.value),
            },
        }).then(({post})=>{
            console.log(post)
        })
    }



    return (
        <>
            <Button size={"sm"} onClick={() => setModalShow(true)}>
                Добавить товар
            </Button>
            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form >
                        <Form.Label>Название товара</Form.Label>
                        <Form.Control size="sm" type="text" {...name}/>
                        <br/>
                        <Form.Label>Цена</Form.Label>
                        <Form.Control size="sm" type="text" {...price}/>
                        <br/>
                        <Form.Label>Описание</Form.Label>
                        <Form.Control size="sm" type="text" as="textarea" rows={10} {...body}/>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={add}>Добавить</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default AddProduct;