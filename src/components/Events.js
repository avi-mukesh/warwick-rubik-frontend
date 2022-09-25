import React from "react"
import useTitle from "../hooks/useTitle"
import EventTimeLine from "./EventTimeLine"
import "react-calendar/dist/Calendar.css"
import BackgroundImage from "./BackgroundImage"
import Header from "./Header"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Events = () => {
    useTitle("Events")

    return (
        <>
            <BackgroundImage>
                <Header title="Events">
                    <p className="lead">
                        Regular weekly sessions running in{" "}
                        <strong>FAB0.23</strong> every <strong>Thursday</strong>{" "}
                        at <strong>6pm</strong>{" "}
                        <FontAwesomeIcon icon="calendar-day" />
                    </p>
                </Header>
            </BackgroundImage>

            <main>
                <section>
                    <Container>
                        <Row className="m-4">
                            <EventTimeLine />
                        </Row>
                    </Container>
                </section>
            </main>
        </>
    )
}

export default Events
