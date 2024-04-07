
import { PORTFOLIO_DATA } from "./PortfolioData"
import Card from "../Card/Card"

export default function Portfolio() {
    return (
        <section>
            <h2>Works</h2>
            {PORTFOLIO_DATA.map(port => <Card {...port} /> )}
        </section>
    )
}