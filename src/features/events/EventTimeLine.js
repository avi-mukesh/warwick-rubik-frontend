import React from "react"
import Col from "react-bootstrap/Col"
import EventItem from "./EventItem"
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
            ids?.length &&
            ids.map((id) => (
                <Col key={id} md={4} lg={3}>
                    <EventItem eventId={id} />
                </Col>
            ))
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

export default EventTimeLine
