import React from 'react';
import { Col, Image, ListGroup, Row } from "react-bootstrap";

const PostReview = ({review}) => {
    const arr = [0, 0, 0, 0, 0]
    for (let i = 0; i < review.rating; i++) {
        arr[i] = 1
    }

    return (
        <ListGroup.Item style={{display: "flex"}} key={review.name}>
            <Col>
                <Row style={{display: "flex", alignItems: "center"}}>
                    <Image
                        src='https://bonik-react.vercel.app/assets/images/faces/7.png'
                        roundedCircle
                        style={{height: 50, width: 75}}
                    />
                    <div style={{width: `${50}%`, fontWeight: "bolder"}}>
                        <div>
                            {review.name}
                        </div>
                        <div className="rating-mini">
                            {arr.map((rating,index) => {
                                if (rating == 1) {
                                    return <span className="active" key={index}></span>
                                } else {
                                    return <span key={index}></span>
                                }
                            })}
                        </div>
                    </div>
                </Row>
                <Row style={{width: `${50}%`, color: 'rgb(75, 86, 107)'}}>
                    <p style={{fontSize: 14}}>
                        {review.text}
                    </p>
                </Row>
            </Col>
        </ListGroup.Item>
    );
};

export default PostReview;