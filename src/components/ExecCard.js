import React from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
const ExecCard = ({ exec }) => {
    return (
        <Card className="align-self-center">
            <Card.Img variant="top" src={exec.img.src} />
            <Card.Body>
                <Card.Title>{exec.name}</Card.Title>
                <Card.Text>{exec.description}</Card.Text>
                <Button variant="primary">Contact me</Button>
            </Card.Body>
        </Card>
    )
}

export default ExecCard
