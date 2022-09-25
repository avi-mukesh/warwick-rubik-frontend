import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css"
import App from "./App"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import {
    faFaceSmile,
    faChampagneGlasses,
    faEnvelope,
    faPeopleGroup,
    faNewspaper,
    faTrophy,
    faCalendarDay,
} from "@fortawesome/free-solid-svg-icons"

library.add(
    fab,
    faFaceSmile,
    faChampagneGlasses,
    faEnvelope,
    faPeopleGroup,
    faNewspaper,
    faTrophy,
    faCalendarDay
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/*" element={<App />} />
            </Routes>
        </Router>
    </React.StrictMode>
)
