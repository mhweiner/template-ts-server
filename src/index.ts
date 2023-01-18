import {loadConf} from 'lambdaconf';
import express from 'express';
import cors from 'cors';
import {logRequest} from 'jsout-express';
import bodyParser from 'body-parser';
import notFoundMiddleware from './express/middleware/notFound.middleware';
import errorMiddleware from './express/middleware/error.middleware';
import {router} from './routes/router';

function initExpress(): void {

    const app = express();

    app.use(cors());
    app.use(bodyParser.json()); // any application/json will be available as `req.body`
    app.use(router);
    app.use(notFoundMiddleware);
    app.use(errorMiddleware);
    app.use(logRequest);

    const port = process.env.PORT || 3000;

    app.listen(port, () => console.log(`App running on port ${port}`));

}

loadConf()
    .then(initExpress)
    .catch(console.log.bind(console));
