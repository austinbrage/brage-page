import express, { json, Router }  from "express";
import { APP, RESOURCES } from "./endpoints.js";
import corsMiddleware from "../global/middlewares/cors.js";
import errorMiddleware from "../global/middlewares/error.js";
import createHealthcareRouter from "./healthcare/healthcare.router.js";
import { notFoundHandler } from "../global/services/notFoundHandler.js";

const createApp = ({ pingPool }) => {
    const app = express();
    const mainRouter = Router();

    app.use(json());
    app.use(corsMiddleware());
    app.disable('x-powered-by');

    app.use(APP.VERSION_1, mainRouter);
    mainRouter.use(RESOURCES.PING, createHealthcareRouter({ pingPool }));

    app.all('*', notFoundHandler);
    app.use(errorMiddleware);

    return app;
}

export default createApp;