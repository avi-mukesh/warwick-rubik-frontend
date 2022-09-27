import React from "react"
import useTitle from "../../hooks/useTitle"
import EventTimeLine from "./EventTimeLine"
import BackgroundImage from "../../components/BackgroundImage"
import Header from "../../components/Header"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ErrorBoundary from "../../components/ErrorBoundary"

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
                            <ErrorBoundary>
                                <EventTimeLine />
                            </ErrorBoundary>
                        </Row>
                    </Container>
                </section>
            </main>
        </>
    )
}

export default Events
