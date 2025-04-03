import React, { useState } from "react";

import {Container, Navbar, Nav} from "react-bootstrap"
import {ReactComponent as Logo} from "../../assets/svg/logo.svg"
import Cart from "../Cart/Cart";
import "./TopMenu.scss"

export default function TopMenu(props) {
    const {productsCart, getProductsCart, products} = props
    return (
        <Navbar bg="dark" variant="dark" className="top-menu">
             <Container>
                <BrandNav />
                <Cart productsCart={productsCart} getProductsCart={getProductsCart} products={products}/>
            </Container>
        </Navbar>
    )
}

function BrandNav() {
    return(
        <Navbar.Brand>
            <Logo />
            <h1>La casa de los helados</h1>
        </Navbar.Brand>
    )
}

function MenuNav() {
    return (
        <Nav className="mr-auto">
            <Nav.Link href="#">Aperitivos</Nav.Link>
            <Nav.Link href="#">Helados</Nav.Link>
            <Nav.Link href="#">Mascotas</Nav.Link>
        </Nav>
    )
}