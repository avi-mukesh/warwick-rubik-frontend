import { useGetEventsQuery } from "./eventsApiSlice"

const EventItem = ({ eventId }) => {
    const { event } = useGetEventsQuery("eventsList", {
        selectFromResult: ({ data }) => ({
            event: data?.entities[eventId],
        }),
    })
    return (
        <li className="list-inline-item text-center event-list">
            <div className="bg-soft-primary text-primary event-date">
                {new Intl.DateTimeFormat("en-GB", {
                    dateStyle: "long",
                }).format(new Date(event.date))}
            </div>
            <h5>{event.title}</h5>
            <p className="text-muted">{event.text}</p>
        </li>
    )
}

export default EventItem
