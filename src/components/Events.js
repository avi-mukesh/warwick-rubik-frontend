import React from "react"
import useTitle from "../hooks/useTitle"

const Events = () => {
    useTitle("Events")

    return (
        <>
            <header>
                <h1>Events</h1>
            </header>
            <main>
                <h2>Chill Cube</h2>
                <p>Regular weekly sessions running in ... every ... at ...</p>
                <section>
                    <h3>Event calendar</h3>
                    <p>[insert caneldar here]</p>
                </section>
            </main>
        </>
    )
}

export default Events
