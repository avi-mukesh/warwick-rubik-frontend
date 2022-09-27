import React from "react"
import Container from "react-bootstrap/Container"
import FooterLink from "./FooterLink"

const Footer = () => {
    return (
        <footer className="bg-dark text-center text-light">
            <Container className="p-2">
                <section className="mb-3">
                    <FooterLink
                        to="https://www.instagram.com/warwickrubik/"
                        brand="instagram"
                    />
                    <FooterLink
                        to="https://chat.whatsapp.com/CGqqQTSlbS1KiGOb9bFUDj"
                        brand="whatsapp"
                    />
                    <FooterLink
                        to="https://discord.gg/EeBMnADW"
                        brand="discord"
                    />
                    <FooterLink
                        to="mailto:warwickrubikscube@gmail.com"
                        icon="envelope"
                    />
                </section>
                <section>
                    <p>Keep cubing.</p>
                </section>
            </Container>

            <div
                className="text-center p-1 w-100"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
            >
                <p className="text-white">
                    © 2022 Copyright: Warwick Rubik's Cube Society
                </p>
            </div>
        </footer>
    )
}

export default Footer
