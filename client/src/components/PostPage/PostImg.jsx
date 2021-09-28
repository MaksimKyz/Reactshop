import React from 'react';
import { Nav, Row, Tab } from "react-bootstrap";

const PostImg = () => {
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Tab.Content style={{display: "flex", justifyContent: "center"}}>
                    <Tab.Pane eventKey="first">
                        1
                        <img src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22410%22%20height%3D%22160%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20410%20160%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17bf07a6674%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A21pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17bf07a6674%22%3E%3Crect%20width%3D%22410%22%20height%3D%22160%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22152.8828125%22%20y%3D%2291.2828125%22%3E410x160%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="" width={300} height={300}/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        2
                        <img src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22410%22%20height%3D%22160%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20410%20160%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17bf07a6674%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A21pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17bf07a6674%22%3E%3Crect%20width%3D%22410%22%20height%3D%22160%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22152.8828125%22%20y%3D%2291.2828125%22%3E410x160%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="" width={300} height={300}/>
                    </Tab.Pane>
                </Tab.Content>
            </Row>
            <Row>
                <Nav variant="pills" style={{display: "flex", justifyContent: "center"}}>
                    <Nav.Item>
                        <Nav.Link eventKey="first" style={{cursor: "pointer"}}>Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="second" style={{cursor: "pointer"}}>Tab 2</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Row>
        </Tab.Container>
    );
};

export default PostImg;