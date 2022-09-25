import React from "react"
import Container from "react-bootstrap/Container"

const Header = ({ title, children }) => {
    return (
        <Container>
            <header>
                <h1 className="display-1">{title}</h1>
                {children}
            </header>
        </Container>
    )
}

export default Header
