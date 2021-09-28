import React, { useRef } from 'react';
import { Container, Form, ListGroup, Tab, Tabs } from "react-bootstrap";
import PostReview from "./PostReview";
import { useSelector } from "react-redux";
import useInput from "../../hoooks/useInput";
import useHover from "../../hoooks/useHover";

const PostDescription = ({feature, review}) => {
    const isAuth = useSelector(state => state.auth.isAuth)
    const textArea = useInput()
    const rating = useRef()
    const isHovering = useHover(rating)

    return (
        <Container>
            <Tabs defaultActiveKey="Description" className="mb-3">
                <Tab eventKey="Description" title="Description">
                    <ListGroup>
                        {feature.map(spec => {
                            return (
                                <ListGroup.Item style={{display: "flex"}} key={spec.name}>
                                    <div style={{width: `${50}%`}}>{spec.name}:</div>
                                    <div style={{width: `${50}%`}}>{spec.value}</div>
                                </ListGroup.Item>)
                        })}
                    </ListGroup>
                </Tab>
                <Tab eventKey="Review" title="Review">
                    <ListGroup>
                        {review.map(review => {
                            return (<PostReview review={review} key={review.name}/>)
                        })}
                    </ListGroup>
                    <Form>
                        <h2 style={{marginTop: 30}}>Write a Review for this product</h2>
                        <Form.Group className="mb-3">
                            <div>Your Rating *</div>
                            <div className="rating-mini">
                                <span ref={rating}></span>
                                <span ref={rating}></span>
                                <span ref={rating}></span>
                                <span ref={rating}></span>
                                <span ref={rating}></span>
                            </div>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Your Review *</Form.Label>
                            <Form.Control as="textarea" {...textArea}/>
                        </Form.Group>
                    </Form>
                </Tab>
            </Tabs>

        </Container>
    );
};

export default PostDescription;