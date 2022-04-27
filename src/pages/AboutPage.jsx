import { Link } from "react-router-dom"
import Card from "../components/shared/Card"

function AboutPage() {
    return (
        <div className="container">
        <Card>
            <div className="about">
                <h1>About Feedback UI</h1>
                <p>This is React app too leave feedback</p>
                <p>Version : 1.0.0</p>
                <p>
                    <Link to="/">Back to Home</Link>
                </p>
            </div>
        </Card>
        </div>
    )
}

export default AboutPage
