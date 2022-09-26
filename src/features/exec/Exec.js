import React from "react"

import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import useTitle from "../../hooks/useTitle"
import { execMembers } from "../../util/Exec"
import BackgroundImage from "../../components/BackgroundImage"
import Header from "../../components/Header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ExecCard from "./ExecCard"

const Exec = () => {
    useTitle("Exec")

    return (
        <>
            <BackgroundImage>
                <Header title="Exec">
                    <p className="lead">
                        The beautiful people who run the show{" "}
                        <FontAwesomeIcon icon="people-group" />
                    </p>
                </Header>
            </BackgroundImage>
            <main>
                <section>
                    <h3 className="display-4">Meet the Exec!</h3>
                </section>
                <Container>
                    <Row className="justify-content-center align-items-center m-4">
                        {execMembers.map((execMember) => (
                            <Col
                                lg={4}
                                sm={12}
                                className="text-center m-lg-0 m-2"
                                key={execMember.name}
                            >
                                <ExecCard
                                    exec={execMember}
                                    key={execMember.name}
                                />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </main>
        </>
    )
}

export default Exec
