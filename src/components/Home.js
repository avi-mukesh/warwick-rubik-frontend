import React from "react"
import useTitle from "../hooks/useTitle"

const Home = () => {
    useTitle("Home")
    return (
        <>
            <header>
                <h1>Warwick Rubik's Cube Society</h1>
            </header>
            <main>
                <h2>Welcome Freshers!</h2>
                <p>
                    Congratulations on getting the results you wanted! We are
                    excited to have you.
                </p>
                <article>
                    <h3>Latest society news</h3>
                    <p></p>
                </article>
            </main>
        </>
    )
}

export default Home
