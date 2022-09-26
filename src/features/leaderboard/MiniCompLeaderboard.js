import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import Table from "react-bootstrap/Table"
import { useTheme } from "../../hooks/useTheme"

const MiniCompLeaderboard = () => {
    const { bgColor } = useTheme()
    return (
        <section className="container">
            <h3 className="display-6">Previous minicomp results</h3>
            <p className="lead">
                Well done to ... for getting first place!{" "}
                <FontAwesomeIcon icon="trophy" /> Check out the events page to
                see when the next minicomp is.
            </p>

            <Table striped bordered hover variant={bgColor}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Avi</td>
                        <td>10.2</td>
                    </tr>
                </tbody>
            </Table>
        </section>
    )
}

export default MiniCompLeaderboard
