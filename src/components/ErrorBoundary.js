import React from "react"
import Collapse from "react-bootstrap/Collapse"

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = { error: null, errorInfo: null, errorOpen: false }
        this.toggleOpen = this.toggleOpen.bind(this)
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        this.setState({ error, errorInfo })

        // logErrorToMyService(error, errorInfo)
    }

    toggleOpen() {
        this.setState((prev) => ({ ...prev, errorOpen: !prev.errorOpen }))
    }

    render() {
        if (this.state.errorInfo) {
            // You can render any custom fallback UI
            return (
                <div>
                    <h3 className="display-6 mb-2">Something went wrong</h3>
                    <button
                        className="btn btn-outline-danger mt-2"
                        onClick={() => this.toggleOpen()}
                        aria-controls="example-collapse-text"
                        aria-expanded={this.state.open}
                    >
                        {this.state.errorOpen ? "Hide error" : "Show error"}
                    </button>
                    <Collapse in={this.state.errorOpen}>
                        <div id="example-collapse-text">
                            {this.state.error}
                            <br />
                            {this.state.errorInfo.componentStack}
                        </div>
                    </Collapse>
                </div>
            )
        }

        return this.props.children
    }
}

export default ErrorBoundary
