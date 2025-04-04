import brageCmdEx from '../assets/brage-command-example.png'
import brageFilesCmdEx from '../assets/brage-command-files-example.png'
import brageCheckCmdEx from '../assets/brage-check-command-example.png'
import brageCheckFileCmdEx from '../assets/brage-check-command-file-example.png'
import createBrageCmdEx from '../assets/create-brage-command-example-2.png'
import createDatabaseCmdEx from '../assets/create-database-command-example.png'
import createDatabaseFileEx from '../assets/create-database-file-example.png'
import metadataBrageCmdEx from '../assets/metadata-result-files-example.png'
import createBrageFilesCmdEx from '../assets/create-brage-command-files-example-2.png'
import noImage from '../assets/no-image.png'

export type Feats = {
    title: string
    name: string
    imageCommand: string
    imageServer: string
    description: string[]
    isIncluded: boolean
}

export type Products = {
    name: string
    price: string
    suitableFor: string
    endpoint: string
    features: Feats[]
    isAvailable: boolean
}

export const SHARED_FEATURES: Feats[] = [
    {
        isIncluded: true,
        name: 'Template cmd',
        title: 'Brage-Express Template Generator',
        imageCommand: createBrageCmdEx,
        imageServer: createBrageFilesCmdEx,
        description: [
            'The //CREATE// //BRAGE// command allows you to create an Express template made for the brage tools','With all the boilerplate code for app responses, error handling, database connections, environments variables, etc'
        ]
    },
    {
        isIncluded: true,
        name: 'Routes cmd',
        title: 'Express Routes Generator',
        imageCommand: brageCmdEx,
        imageServer: brageFilesCmdEx,
        description: [
            'The //BRAGE// command allows you to create multiple Express routes at once through the SQL files',
            'With all the routing generated as well, working within the app right away'
        ]
    },
    {
        isIncluded: true,
        name: 'Endpoints metadata',
        title: 'Endpoints and Messages Generator',
        imageCommand: brageCmdEx,
        imageServer: metadataBrageCmdEx,
        description: [
            'When using the //BRAGE// command endpoints addresses and messages on them can be created as well',
            'Through comments within the very SQL files that define the Express routes on the app'
        ]
    },
    {
        isIncluded: true,
        name: 'Check flag',
        title: 'SQL Syntax Checker',
        imageCommand: brageCheckCmdEx,
        imageServer: brageCheckFileCmdEx,
        description: [
            'The flag //--check// on the BRAGE command allows you to lint and look for syntax errors on the SQL files',
            'With the additional flag //--showexpected// to see the characters expected on the error line'
        ]
    },
    {
        isIncluded: true,
        name: 'Database flag',
        title: 'Database Tables Generator',
        imageCommand: createDatabaseCmdEx,
        imageServer: createDatabaseFileEx,
        description: [
            'The flag //--dbcreate// on the BRAGE command allows you to recreate MySQL databases on all environments',
            'Through the tables on the SQL files and the credentials on the .env file'
        ]
    },
    {
        isIncluded: true,
        name: 'Fullstack version',
        title: 'Frontend Api Calls Generator',
        imageCommand: noImage,
        imageServer: noImage,
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
        price: 'Free product',
        suitableFor: 'beginners',
        endpoint: '/javascript/basic',
        features: getFeatures(3),
        isAvailable: true
    },
    {
        name: 'SQL safer',
        price: '',
        suitableFor: 'freelancers',
        endpoint: '/javascript/sql',
        features: getFeatures(4),
        isAvailable: false
    },
    {
        name: 'Database generator',
        price: '',
        suitableFor: 'freelancers',
        endpoint: '/javascript/db',
        features: getFeatures(5),
        isAvailable: false
    },
    {
        name: 'Fullstack generator',
        price: '',
        suitableFor: 'companies',
        endpoint: '/javascript/full',
        features: getFeatures(6),
        isAvailable: false
    },
]

export const TYPESCRIPT_PRODUCTS: Products[] = [
    {
        name: 'Basic (ts)',
        price: '',
        suitableFor: 'beginners',
        endpoint: '/typescript/basic',
        features: getFeatures(3),
        isAvailable: false
    },
    {
        name: 'SQL safer (ts)',
        price: '',
        suitableFor: 'freelancers',
        endpoint: '/typescript/sql',
        features: getFeatures(4),
        isAvailable: false
    },
    {
        name: 'Database generator (ts)',
        price: '',
        suitableFor: 'freelancers',
        endpoint: '/typescript/db',
        features: getFeatures(5),
        isAvailable: false
    },
    {
        name: 'Fullstack generator (ts)',
        price: '',
        suitableFor: 'companies',
        endpoint: '/typescript/full',
        features: getFeatures(6),
        isAvailable: false
    },
]