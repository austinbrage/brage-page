import brageCmdEx from '../assets/brage-command-example.png'
import brageFilesCmdEx from '../assets/brage-command-files-example.png'
import brageCheckCmdEx from '../assets/brage-check-command-example.png'
import brageCheckFileCmdEx from '../assets/brage-check-command-file-example.png'
import createBrageCmdEx from '../assets/create-brage-command-example.png'
import createBrageFilesCmdEx from '../assets/create-brage-command-files-example.png'

export type Feats = {
    title: string
    description: string[]
    exampleImages: string[]
    isIncluded: boolean
}

export type Products = {
    name: string
    price: number
    suitableFor: string
    features: Feats[]
}

export const SHARED_FEATURES: Feats[] = [
    {
        isIncluded: true,
        title: 'Brage-Express Template Generator',
        exampleImages: [createBrageCmdEx, createBrageFilesCmdEx],
        description: [
            'The CREATE-BRAGE command allows you to create an Express template made for the brage tools','With all the boilerplate code for app responses, error handling, database connections, environments variables, etc'
        ]
    },
    {
        isIncluded: true,
        title: 'Express Routes Generator',
        exampleImages: [brageCmdEx, brageFilesCmdEx],
        description: [
            'The BRAGE command allows you to create multiple Express routes at once through the SQL files',
            'With all the routing generated as well, working within the app right away'
        ]
    },
    {
        isIncluded: true,
        title: 'Endpoints and Messages Generator',
        exampleImages: [brageCmdEx],
        description: [
            'When using the BRAGE command endpoints addresses and messages on them can be created as well',
            'Through comments within the very SQL files that define the Express routes on the app'
        ]
    },
    {
        isIncluded: true,
        title: 'SQL Syntax Checker',
        exampleImages: [brageCheckCmdEx, brageCheckFileCmdEx],
        description: [
            'The flag --check on the BRAGE command allows you to lint and look for syntax errors on the SQL files',
            'With the additional flag --showexpected to see the characters expected on the error line'
        ]
    },
    {
        isIncluded: true,
        title: 'Database Tables Generator',
        exampleImages: [createBrageCmdEx],
        description: [
            'The flag --dbcreate on the BRAGE command allows you to recreate MySQL databases on all environments',
            'Through the tables on the SQL files and the credentials on the .env file'
        ]
    },
    {
        isIncluded: true,
        title: 'Frontend Api Calls Generator',
        exampleImages: [createBrageCmdEx],
        description: ['No information available yet']
    }
]

function getFeatures(count: number) {
    return SHARED_FEATURES.map((feature, index) => ({
        ...feature,
        isIncluded: index < count
    }))
}

export const JAVASCRIPT_PRODUCTS: Products[] = [
    {
        name: 'Basic',
        price: 94.55,
        suitableFor: 'beginners',
        features: getFeatures(3)
    },
    {
        name: 'SQL safer',
        price: 124.55,
        suitableFor: 'freelancers',
        features: getFeatures(4)
    },
    {
        name: 'Database generator',
        price: 154.55,
        suitableFor: 'freelancers',
        features: getFeatures(5)
    },
    {
        name: 'Fullstack generator',
        price: 184.55,
        suitableFor: 'companies',
        features: getFeatures(6)
    },
]

export const TYPESCRIPT_PRODUCTS: Products[] = [
    {
        name: 'Basic (ts)',
        price: 114.55,
        suitableFor: 'beginners',
        features: getFeatures(3)
    },
    {
        name: 'SQL safer (ts)',
        price: 144.55,
        suitableFor: 'freelancers',
        features: getFeatures(4)
    },
    {
        name: 'Database generator (ts)',
        price: 174.55,
        suitableFor: 'freelancers',
        features: getFeatures(5)
    },
    {
        name: 'Fullstack generator (ts)',
        price: 204.55,
        suitableFor: 'companies',
        features: getFeatures(6)
    },
]