import React from "react"

import Col from "react-bootstrap/Col"
import useTitle from "../hooks/useTitle"
import { execMembers } from "../util/Exec"
import ExecCard from "./ExecCard"

const Exec = () => {
    useTitle("Exec")

    return (
        <>
            <>
                <header>
                    <h1>Meet the exec!</h1>
                </header>
                <main className="row">
                    {execMembers.map((execMember) => (
                        <Col>
                            <ExecCard exec={execMember} key={execMember.name} />
                        </Col>
                    ))}
                </main>
            </>
        </>
    )
}

export default Exec
