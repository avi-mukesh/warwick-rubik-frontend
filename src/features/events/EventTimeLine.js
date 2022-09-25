import React from "react"
import Col from "react-bootstrap/Col"
import { useGetEventsQuery } from "./eventsApiSlice"

const EventTimeLine = () => {
    const {
        data: events,
        isFetching,
        isSuccess,
        isError,
        error,
    } = useGetEventsQuery("eventsList", {
        pollingInterval: 30 * 60 * 1000,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true,
    })

    let eventItems
    if (isFetching) {
        eventItems = <p>Loading...</p>
    } else if (isSuccess) {
        const { ids } = events
        eventItems =
            ids?.length && ids.map((id) => <EventItem key={id} eventId={id} />)
    } else if (isError) {
        eventItems = <p>{error}</p>
    }
    return (
        <>
            <h3 className="display-4">Event timeline</h3>
            <ul className="row list-inline events">{eventItems}</ul>
        </>
    )
}

const EventItem = ({ eventId }) => {
    const { event } = useGetEventsQuery("eventsList", {
        selectFromResult: ({ data }) => ({
            event: data?.entities[eventId],
        }),
    })
    return (
        <Col md={4} lg={3}>
            <li className="list-inline-item text-center event-list">
                <div className="bg-soft-primary text-primary event-date">
                    {new Intl.DateTimeFormat("en-GB", {
                        dateStyle: "long",
                    }).format(new Date(event.date))}
                </div>
                <h5>{event.title}</h5>
                <p className="text-muted">{event.text}</p>
            </li>
        </Col>
    )
}

export default EventTimeLine
