import React from 'react';
import { Button, Modal, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import useInput from "../hoooks/useInput";
import { useMutation } from "@apollo/client";
import { UPDATE_PRODUCT } from "../Query/products";

const ModalAdmin = ({post}) => {
    const [modalShow, setModalShow] = React.useState(false);
    const name = useInput(post.name)
    const price = useInput(post.price)
    const body = useInput(post.body)

    const [updateProduct] = useMutation(UPDATE_PRODUCT)
    const update = (e) => {
        e.preventDefault()
        updateProduct({
            variables:{
                id:post.id,
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
                <FontAwesomeIcon icon={faEdit}/>
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
                        {post.id}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Label>Название товара</Form.Label>
                    <Form.Control size="sm" type="text" {...name}/>
                    <br/>
                    <Form.Label>Цена</Form.Label>
                    <Form.Control size="sm" type="text" {...price}/>
                    <br/>
                    <Form.Label>Описание</Form.Label>
                    <Form.Control size="sm" type="text" as="textarea" maxlength="600" rows={10} {...body}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={update}>Обновить товар</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalAdmin;