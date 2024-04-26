import "./Slideshow.css"


export default function Slideshow({ mode, ...props }: { mode: string, props: object }) {
    return (<div className="slideshow" {...props}>
        {mode}
    </div>)
}