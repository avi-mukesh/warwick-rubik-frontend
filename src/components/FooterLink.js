import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const FooterLink = ({ to, brand }) => {
    console.log(brand)
    return (
        <a class="btn btn-outline-light m-1" href={to} role="button">
            <FontAwesomeIcon icon={["fab", brand]}></FontAwesomeIcon>
        </a>
    )
}

export default FooterLink
