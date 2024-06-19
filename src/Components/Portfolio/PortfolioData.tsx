import templateImg from "./image/template.jpg"
import video from "../../../public/tft_calculator_demo.mp4"

import {ProjectInfo} from "../../Types"

export const PORTFOLIO_DATA : ProjectInfo[] = [
    {
        "project": "Team Fight Tactics Stats Helper",
        "description": "Teamfight tactics is a online multiplayer auto-battler game made by Riot Games. This webpage is a calculator to determine the power of a select team using pure stats. \
        The goal is to improve in-game decisions using stats",
        "video": video,
        "image": templateImg,
        "link":  "https://www.google.com/",
        "tools": ["Vanilla Js", "Chart.js"]
    },
    {
        "project": "WingspanGo: Bird classifier mobile app",
        "description": "WingspanGo is a mobile bird classifier app inspired by pokemon go and wingspan board game. It uses a basic image classifier running on a raspberryPi expressjs server",
        "image": templateImg,
        "link":  "https://www.google.com/",
        "tools": ["React-Native", "Expressjs", "fastai machine learning","Python", "RasberryPi server"]
    },
    {
        "project": "Blog",
        "description": "This is a collection of blog post detailed diffrent types of work and though processies",
        "image": templateImg,
        "link":  "https://www.google.com/",
        "tools": ["Nextjs", "PostgreSQL"]
    }
] 