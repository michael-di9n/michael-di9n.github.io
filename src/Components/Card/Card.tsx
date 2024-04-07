

export default function Card( { project, description, image, tools, children, link } : 
    { project: string, description: string, image: {templateImg : string}, tools: string[], children? : React.ReactNode, link: string } ) {
    return (<div className="card">
        <img src={image.templateImg} className="card-img-top"></img>
        <div className="card-body">
        <h5 className="card-tite">{project}</h5>
        <p className="card-text">{description}</p>
        <ul>
            {tools.map( (tool : string) => <li>{tool}</li>)}
        </ul>
        <a href={link} className="btn btn-primary">Investigate</a>
        {children}
        </div>
    </div>)
}