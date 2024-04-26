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
        "tools": ["Vanilla Js, Chart.js"]
    },
    {
        "project": "<project name>",
        "description": "<some description",
        "image": templateImg,
        "link":  "https://www.google.com/",
        "tools": ["React.js, D3.js"]
    },
    {
        "project": "<project name>",
        "description": "<some description",
        "image": templateImg,
        "link":  "https://www.google.com/",
        "tools": ["React.js, Three.js"]
    }
] 