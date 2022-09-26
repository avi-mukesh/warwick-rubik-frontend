import React from "react"
import bgImg from "../images/bg.webp"

const BackgroundImage = ({ img = bgImg, children }) => {
    return (
        <div
            className="w-100 p-0 bg"
            style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div
                className="mask h-100 text-light d-flex align-items-center"
                style={{
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                }}
            >
                {children}
            </div>
        </div>
    )
}

export default BackgroundImage
