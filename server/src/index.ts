import express from 'express';
import { Env } from './config/env.config';
import cors, { CorsOptions } from 'cors';
import { UnauthorizedException } from './utils/app-error';
import helmet from 'helmet';
import { asyncHandler } from './middlewares/asyncHandler.middleware';
import { HTTPSTATUS } from './config/http.config';
import { NextFunction, Request, Response } from 'express';
import { errorHandler } from './middlewares/errorHandler.middleware';
const app = express();

const allowedOrigins = Env.ALLOWED_ORIGINS?.split(',');

const corsOptions: CorsOptions = {
  credentials: true,
  origin(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      const errorMsg = `CORS error: Origin ${origin} is not allowed`;
      callback(new UnauthorizedException(errorMsg), false);
    }
  },
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

app.get(
  '/',
  asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    res.status(HTTPSTATUS.OK).json({
      message: 'Hello Subscribe to the channe-----l',
    });
  }),
);

app.use(errorHandler);

async function startServer() {
  try {
    // await connectDatabase();
    const server = app.listen(Env.PORT, () => {
      console.info(
        `Server listening on port ${Env.PORT} in ${Env.NODE_ENV} mode`,
      );
    });

    const shutdownSignals = ['SIGTERM', 'SIGINT'];

    shutdownSignals.forEach((signal) => {
      process.on(signal, async () => {
        console.warn(`${signal} recieved: shutting down gracefully`);

        try {
          server.close(() => {
            console.warn('HTTP server closed');
          });
          //disconnect db
          // await disconnectDatabase();

          // await logTail.flush();

          process.exit(0);
        } catch (error) {
          console.error(`Error occured during shutting down`, error);
          process.exit(1);
        }
      });
    });
  } catch (error) {
    console.error(`Failed to start server`, error);
    process.exit(1);
  }
}

startServer();
