import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import Table from "react-bootstrap/Table"
import { useTheme } from "../../hooks/useTheme"

const MiniCompLeaderboard = () => {
    const { bgColor } = useTheme()
    return (
        <section className="container">
            <h3 className="display-6">Previous minicomp 3x3 final results</h3>
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
                        <th>Ao5</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Elian Beguec</td>
                        <td>8.17</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Atharva Vadayer</td>
                        <td>10.24</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Robin Allen</td>
                        <td>10.80</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Sophies Davies</td>
                        <td>11.55</td>
                    </tr>
                </tbody>
            </Table>
        </section>
    )
}

export default MiniCompLeaderboard
