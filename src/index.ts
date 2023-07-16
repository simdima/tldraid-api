import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import getLanguages from '@src/routes/getLanguages';
import getUtilities from '@src/routes/getUtilities';
import getUtility from '@src/routes/getUtility';

import MORGAN_CONFIG from '@src/config/morgan';
import CORS_OPTIONS from '@src/config/cors';

const app = express();

// middleware
app.use(cors(CORS_OPTIONS));
app.use(helmet());
app.use(morgan(MORGAN_CONFIG));

// routes
app.get('/languages', getLanguages);
app.get('/utilities', getUtilities);
app.get('/utility', getUtility);

// start the server
app.listen(process.env.PORT);
