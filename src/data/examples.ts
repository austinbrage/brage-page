import modelFileEx from "../assets/model-file-example.png"
import queriesFileEx from "../assets/queries-file-example.png"
import tableSqlFileEx from "../assets/table-sql-file-example.png"
import queriesSqlFileEx from "../assets/queries-sql-file-example.png"
import routersSqlFileEx from "../assets/routers-file-example.png"
import controllersSqlFileEx from "../assets/controllers-file-example.png"
import validationsSqlFileEx from "../assets/validations-file-example.png"
import middlewaresSqlFileEx from "../assets/middlewares-file-example.png"

export type Items = {
    name: string
    imageApp: string
    imageServer: string
}

export const EXAMPLES_ITEMS: Items[] = [
    {
        name: 'SQL queries',
        imageApp: queriesSqlFileEx,
        imageServer: queriesFileEx
    },
    {
        name: 'MYSQL model',
        imageApp: queriesSqlFileEx,
        imageServer: modelFileEx
    },
    {
        name: 'Zod validations',
        imageApp: tableSqlFileEx,
        imageServer: validationsSqlFileEx
    },
    {
        name: 'Express controllers',
        imageApp: queriesSqlFileEx,
        imageServer: controllersSqlFileEx
    },
    {
        name: 'Express middlewares',
        imageApp: tableSqlFileEx,
        imageServer: middlewaresSqlFileEx
    },
    {
        name: 'Express routing',
        imageApp: queriesSqlFileEx,
        imageServer: routersSqlFileEx
    }
]