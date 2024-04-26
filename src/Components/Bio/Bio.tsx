import bioImage from "./Image/michael_profile.jpg"
import "./Bio.css"

export default function Bio() {
    return (
        <section className="centre-column">
            <div className="flex-vert" id="bio-container">
                <img id="bioImg" src={bioImage}></img>
                <p className="roboto-mono" id="bio-text">Hi I am a programmer who will create your website for you or create the program that you need to make
                    work more effient and focus on other difficult tasks. I have been programming for more than 6 years in C++/C# javascript and HTML,
                    I can use my knowledge of Chart.js and D3.js to create visualizations for you that will provide insights to your business. I can incorporate
                    machine learning and AI to your current business to utilize the large amounts of data you have collected and make it work for you.</p>
            </div>
        </section>
    )
}