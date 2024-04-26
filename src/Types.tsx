export interface ProjectInfo {
    project: string,
    description: string,
    tools: string[],
    link: string,
    image?: string,
    video?: string,
    children?: React.ReactNode
}