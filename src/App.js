import { Routes, Route } from "react-router-dom"
import Exec from "./features/exec/Exec"
import Events from "./features/events/Events"
import Home from "./components/Home"
import Layout from "./components/Layout"
import VirtualCube from "./components/VirtualCube"
import NotFound from "./components/NotFound"
import { useFontAwesome } from "./hooks/useFontAwesome"

const App = () => {
    useFontAwesome()
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="events" element={<Events />} />
                <Route path="exec" element={<Exec />} />
                <Route path="virtual-cube" element={<VirtualCube />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default App
