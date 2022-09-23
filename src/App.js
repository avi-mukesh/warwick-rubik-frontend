import { Routes, Route } from "react-router-dom"
import Exec from "./components/Exec"
import Events from "./components/Events"
import Home from "./components/Home"
import Layout from "./components/Layout"

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="events" element={<Events />} />
                <Route path="exec" element={<Exec />} />
            </Route>
        </Routes>
    )
}

export default App
