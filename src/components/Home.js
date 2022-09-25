import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import useTitle from "../hooks/useTitle"
import bgImg from "../images/bg.webp"
import BackgroundImage from "./BackgroundImage"
import Header from "./Header"

import MiniCompLeaderboard from "../features/leaderboard/MiniCompLeaderboard"
import SocietyNews from "../features/news/SocietyNews"

const Home = () => {
    useTitle("Home")
    return (
        <>
            <BackgroundImage img={bgImg}>
                <Header title="Warwick Rubik's Cube Society">
                    <p className="lead">
                        Whether you are a cubing veteran or have never touched a
                        cube before, there is room for everyone{" "}
                        <FontAwesomeIcon icon="face-smile" />
                    </p>
                </Header>
            </BackgroundImage>

            <main>
                <section>
                    <h2 className="display-4">Welcome Freshers!</h2>
                    <p className="lead">
                        Congratulations on getting the results you wanted! We
                        are excited to have you on board.{" "}
                        <FontAwesomeIcon icon="champagne-glasses" />
                    </p>
                </section>
                <section>
                    <h3 className="display-6">Weekly scramble</h3>
                    <p className="lead">
                        R' D2 L' U' L' D2 F R2 B U' R2 U2 B2 L2 U2 B2 U' R2 U2
                        F2
                    </p>
                </section>
                <Row className="m-4">
                    <Col xxl={6} lg={12}>
                        <SocietyNews />
                    </Col>
                    <Col xxl={6} lg={12}>
                        <MiniCompLeaderboard />
                    </Col>
                </Row>
                {/* <InstagramPosts /> */}
            </main>
        </>
    )
}

const InstagramPosts = () => {
    return <InstagramPosts />
}

export default Home
