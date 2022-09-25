import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const FooterLink = ({ to, brand, icon }) => {
    const theIcon = brand ? ["fab", brand] : icon

    return (
        <a
            className="btn btn-outline-light btn-large m-1"
            href={to}
            role="button"
        >
            <FontAwesomeIcon icon={theIcon}></FontAwesomeIcon>
        </a>
    )
}

export default FooterLink
