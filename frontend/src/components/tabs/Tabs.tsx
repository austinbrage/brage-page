import { useState } from 'react'
import './tabs.css'

const TABS_INFO = [
    {
        name: 'What is it?',
        title: 'NodeJS code generator for Express and React',
        description: 'Based on the chokidar and fs-write packages, this generator reads SQL files (tables and queries) and writes the JavaScript files needed to execute those queries on Express endpoints and also call them in a React application'
    },
    {
        name: 'Why do I need it?',
        title: 'Time is your most valuable asset, let’s save it',
        description: 'Instead of manually writing all your endpoints with validations, responses, and routing for each query, let BRAGE generate all of that automatically just by reading your SQL tables and queries'
    },
    {
        name: 'What do I use it?',
        title: 'NodeJS package with a complete CLI',
        description: 'Download it, install the dependencies with pnpm, install it globally on your machine, and run the basic commands "create-brage-js" and "brage-js" to generate the template and routes based on the SQL files'
    },
]

export function Tabs() {

    const [currentTabIndex, setCurrentTabIndex] = useState<number>(1)

    return (
        <div className="tabs-section">

            <div className="tabs-section-header">
                {TABS_INFO.map((tab, index) => (
                    <div 
                        key={tab.name}
                        onClick={() => setCurrentTabIndex(index)}
                        className={index === currentTabIndex ? 'selected' : ''}
                    >
                        {tab.name}
                    </div>
                ))}
            </div>

            <div className="tabs-section-body">
                {TABS_INFO.map((tab, index) => (
                    <div
                        key={tab.title}
                        className={index === currentTabIndex ? 'selected' : ''}
                    >
                        <div className="tabs-section-body-title">{tab.title}</div>
                        <div className="tabs-section-body-description">{tab.description}</div>
                    </div>
                ))}
            </div>

        </div>
    )
}