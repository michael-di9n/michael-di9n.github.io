

export default function Card( { project, description, image, tools, children } : 
    { project: string, description: string, image: {templateImg : string}, tools: string[], children? : React.ReactNode } ) {
    return (<div>
        <img src={image.templateImg}></img>
        <h2>{project}</h2>
        <p>{description}</p>
        <ul>
            {tools.map( (tool : string) => <li>{tool}</li>)}
        </ul>
        {children}
    </div>)
}