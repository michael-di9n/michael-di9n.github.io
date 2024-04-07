import bioImage from "./Image/michael_profile.jpg"

export default function Bio() {
    return (
        <section>
            <img id="bioImg" src={bioImage}></img>
            <p>About me a programmier</p>
        </section>
    )
}