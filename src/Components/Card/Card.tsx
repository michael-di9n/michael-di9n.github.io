import "./Card.css"

export default function Card({ project, description, image, tools, children, link }:
    { project: string, description: string, image: { templateImg: string }, tools: string[], children?: React.ReactNode, link: string }) {
    return (<div className="card g-col-6 g-col-md-4">
        <img src={image.templateImg} className="card-img-top"></img>
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