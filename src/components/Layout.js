import React from "react"
import { Outlet } from "react-router-dom"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import PageNavbar from "./PageNavbar"
import Footer from "./Footer"

const Layout = () => {
    return (
        <Container fluid>
            <Row>
                <PageNavbar />
            </Row>
            <Row>
                <Outlet />
            </Row>
            <Row>
                <Footer />
            </Row>
        </Container>
    )
}

export default Layout
