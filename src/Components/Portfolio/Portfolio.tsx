
import { PORTFOLIO_DATA } from "./PortfolioData"
import Card from "../Card/Card"

export default function Portfolio() {
    return (
        <section>
            <h2>Works</h2>
            <div className="container">
            {PORTFOLIO_DATA.map(port => <Card {...port} /> )}
            </div>

        </section>
    )
}