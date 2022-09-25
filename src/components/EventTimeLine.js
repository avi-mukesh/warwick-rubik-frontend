import React from "react"
import Col from "react-bootstrap/Col"

const EventTimeLine = () => {
    return (
        <>
            <h3 className="display-4">Event timeline</h3>
            <ul className="row list-inline events">
                <EventItem
                    date="28/09/2022"
                    title="Societies Fair"
                    text="Come join us in the Sports Hub from 10am to 5pm, stall 72"
                />
                <EventItem
                    date="29/09/2022"
                    title="Taster Session"
                    text="Itching to know what we're about? Come to our taster session in FAB0.22."
                />
                <EventItem
                    date="01/10/2022"
                    title="Social"
                    text="Cubes and booze. 6pm in the Dirty duck."
                />
                <EventItem
                    date="01/10/2022"
                    title="Weekly Cubing"
                    text="Regular cubing event. Come to relax and solve some Rubik's cubes!"
                />
            </ul>
        </>
    )
}

const EventItem = ({ date, title, text }) => (
    <Col md={4} lg={3}>
        <li className="list-inline-item text-center event-list">
            <div className="bg-soft-primary text-primary event-date">
                {date}
            </div>
            <h5>{title}</h5>
            <p className="text-muted">{text}</p>
        </li>
    </Col>
)

export default EventTimeLine
