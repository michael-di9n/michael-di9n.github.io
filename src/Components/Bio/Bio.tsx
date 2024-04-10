import bioImage from "./Image/michael_profile.jpg"
import "./Bio.css"

export default function Bio() {
    return (
        <section className="centre-column">
            <div className="flex-vert" id="bio-container">
                <img id="bioImg" src={bioImage}></img>
                <p className="roboto-mono">About me a programmier</p>
            </div>
        </section>
    )
}