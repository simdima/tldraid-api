import { CorsOptions } from 'cors';

const { APP_URL } = process.env;
const allowedOrigins = [APP_URL, 'http://localhost:3000'];

export default {
  origin: (origin, callback) => {
    if ((origin && allowedOrigins.includes(origin)) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
} as CorsOptions;
