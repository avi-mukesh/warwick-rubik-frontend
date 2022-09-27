import Card from "react-bootstrap/Card"
import { useTheme } from "../hooks/useTheme"

const ExecCard = ({ exec }) => {
    const { bgColor, textColor } = useTheme()
    return (
        <Card
            variant={bgColor}
            bg={bgColor}
            className={`m-auto text-${textColor}`}
        >
            <Card.Img variant="top" src={exec.img.src} />
            <Card.Body>
                <Card.Title>
                    {exec.name}, {exec.role}
                </Card.Title>
                <Card.Text>{exec.description}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <Card.Text>
                    <a className="nav-link" href={`mailto:${exec.email}`}>
                        {exec.email}
                    </a>
                </Card.Text>
            </Card.Footer>
        </Card>
    )
}

export default ExecCard
