import "./Card.css"
import {ProjectInfo} from "../../Types"

export default function Card({ project, description, image, video, tools, children, link }: ProjectInfo) {
    return (<div className="card g-col-6 g-col-md-4">
        {video && <video autoPlay muted loop><source src={video} type="video/mp4"/></video>}
        {!video && image && <img src={image} className="card-img-top"></img>}
        <div className="card-body">
            <h5 className="card-tite roboto-bold">{project}</h5>
            <p className="card-text roboto-mono">{description}</p>
            <ul>
                {tools.map((tool: string) => <li className="roboto-light">{tool}</li>)}
            </ul>
            <a href={link} className="btn btn-primary">Investigate</a>
            {children}
        </div>
    </div>)
}