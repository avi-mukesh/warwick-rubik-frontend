import React from "react"
import Container from "react-bootstrap/Container"
import FooterLink from "./FooterLink"

const Footer = () => {
    return (
        <footer class="bg-dark text-center text-white">
            <Container className="p-2">
                <section class="mb-3">
                    <FooterLink
                        to="https://www.instagram.com/warwickrubik/"
                        brand="instagram"
                    />
                    <FooterLink
                        to="https://www.instagram.com/warwickrubik/"
                        brand="whatsapp"
                    />
                    <FooterLink
                        to="https://www.instagram.com/warwickrubik/"
                        brand="discord"
                    />
                </section>
                <section class="mb-3">
                    <p>Keep cubing.</p>
                </section>
            </Container>

            <div
                class="text-center p-1"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
            >
                <p class="text-white">
                    © 2022 Copyright: Warwick Rubik's Cube Society
                </p>
            </div>
        </footer>
    )
}

export default Footer
