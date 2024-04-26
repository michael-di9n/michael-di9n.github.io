
import { PORTFOLIO_DATA } from "./PortfolioData"
import Card from "../Card/Card"
import "./Portfolio.css"

export default function Portfolio() {
    return (
        <section className="centre-column">
            <div className="portfolio-container">
                <div className="grid portfolio">
                    {PORTFOLIO_DATA.map(p => <Card {...p} />)}
                </div>
            </div>
        </section >
    )
}