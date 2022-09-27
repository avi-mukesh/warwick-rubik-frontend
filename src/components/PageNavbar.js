import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { useTheme } from "../hooks/useTheme"

import logo from "../images/logo.png"

const PageNavbar = () => {
    const { isDarkTheme, toggleTheme, bgColor, textColor } = useTheme()

    return (
        <Navbar bg={bgColor} variant={bgColor} expand="lg">
            <Container>
                <Navbar.Brand href="/home">
                    <img
                        alt="Brev"
                        src={logo}
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                    />{" "}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/events">Events</Nav.Link>
                        <Nav.Link href="/exec">Exec</Nav.Link>
                        {/* <Nav.Link href="/minicomps">Mini Comps</Nav.Link> */}
                        {/* <Nav.Link href="/virtual-cube">Virtual Cube</Nav.Link> */}
                        <Nav.Link
                            href="https://www.warwicksu.com/societies-sports/societies/59946/"
                            target="_blank"
                        >
                            SU page
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <button
                            className={`btn btn-outline-${textColor}`}
                            onClick={toggleTheme}
                        >
                            Switch to {isDarkTheme ? "light" : "dark"} mode
                        </button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default PageNavbar
