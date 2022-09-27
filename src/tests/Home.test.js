import { render, screen } from "./test-utils"
import Home from "../components/Home"

test("header title should be on page", () => {
    render(<Home />)
    const headerEl = screen.getByText("Warwick Rubik's Cube Society")
    expect(headerEl).toBeInTheDocument()
})
