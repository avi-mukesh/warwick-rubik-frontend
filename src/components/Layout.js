import React from "react"
import { Outlet } from "react-router-dom"
import Container from "react-bootstrap/Container"
import PageNavbar from "./PageNavbar"
import Footer from "./Footer"
import { useTheme } from "../hooks/useTheme"

const Layout = () => {
    const { bgColor, textColor } = useTheme()

    return (
        <Container fluid className={`p-0 text-${textColor} bg-${bgColor}`}>
            <PageNavbar />
            <Outlet />
            <Footer />
        </Container>
    )
}

export default Layout
