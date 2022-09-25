import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import Header from "./Header"

const NotFound = () => {
    return (
        <Header title="Corner Twist!">
            <p className="lead">404 Not Found <FontAwesomeIcon icon="sad-cry"/></p>
        </Header>
    )
}

export default NotFound
