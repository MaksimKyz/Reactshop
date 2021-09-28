import React from 'react';
import '../App.css'
import { Button, Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import MyBasket from "./MyBasket";
import {set_auth} from '../state/reducers/auth'
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const MyNavbar = () => {
    const isAuth = useSelector(state=>state.auth.isAuth)
    const dispatch = useDispatch()
    function Login(){
        dispatch(set_auth(true))
    }
    function Logout(){
        dispatch(set_auth(false))
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    <NavLink  className='nav_link'to={'/test'}>REACT</NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {isAuth
                            ?
                            <>
                                <NavLink className='nav_link' to={'/shop'}>Товары</NavLink>
                                <NavLink className='nav_link' to={'/admin'}>Админка</NavLink>
                            </>
                            :
                            <>
                                <NavLink className='nav_link' to={'/shop'}>Товары</NavLink>
                            </>
                            }
                    </Nav>
                    <Nav>
                        {isAuth
                        ?
                            <Button onClick={Logout}>Выйти</Button>
                        :
                            <Button onClick={Login}>Войти</Button>
                        }
                        <MyBasket/>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MyNavbar;