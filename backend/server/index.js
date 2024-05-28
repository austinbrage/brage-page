import createApp from "./routes/app.js";
import { PORT, ENVIRONMENT } from "./global/utils/config.js";
import { createPoolConnection } from "./global/services/database.js";

const pingPool = createPoolConnection({ wait: true, cLimit: 1, qLimit: 0 });

const app = createApp({ pingPool });

const server = app.listen(PORT[ENVIRONMENT], () => {
    console.log(`Server running on Port: ${PORT[ENVIRONMENT]}`);
})

export { app, server, pingPool };