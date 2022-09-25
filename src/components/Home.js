import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import useTitle from "../hooks/useTitle"
import bgImg from "../images/bg.webp"
import BackgroundImage from "./BackgroundImage"
import Header from "./Header"
import MiniCompLeaderboard from "./MiniCompLeaderboard"

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
                    <Col lg={6} md={12}>
                        <SocietyNews />
                    </Col>
                    <Col lg={6} md={12}>
                        <MiniCompLeaderboard />
                    </Col>
                </Row>
                {/* <InstagramPosts /> */}
            </main>
        </>
    )
}

const SocietyNews = () => {
    return (
        <section className="container">
            <h3 className="display-6">Latest society news</h3>
            <p className="lead">
                Your fix for everything Warwick Rubik{" "}
                <FontAwesomeIcon icon="newspaper" />
            </p>

            <article className="list-group flex-md-row flex-column">
                <SocietyNewsExcerpt />
                <SocietyNewsExcerpt />
                <SocietyNewsExcerpt />
            </article>
        </section>
    )
}

const SocietyNewsExcerpt = ({ active }) => {
    return (
        <a
            href="#home"
            className={`list-group-item list-group-item-action flex-column align-items-start ${
                active && "active"
            }`}
        >
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">List group item heading</h5>
                <small>3 days ago</small>
            </div>
            <p className="mb-1">
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
            </p>
        </a>
    )
}

const InstagramPosts = () => {
    return <InstagramPosts />
}

export default Home
