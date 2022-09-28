import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useTheme } from "../hooks/useTheme"

const FooterLink = ({ to, brand, icon }) => {
    const { bgColor } = useTheme()
    const theIcon = brand ? ["fab", brand] : icon

    return (
        <a
            className={`btn btn-outline-${bgColor} btn-large m-1`}
            href={to}
            role="button"
            target="blank"
        >
            <FontAwesomeIcon icon={theIcon}></FontAwesomeIcon>
        </a>
    )
}

export default FooterLink
