import express, { Router } from 'express';
import {createProxyMiddleware} from 'http-proxy-middleware';
import path from 'path';
import { createCellsRouter } from './routes/cells';

// this is our express set up in the local api, it runs the server and is passed for use to the CLI, which users run their code editor form, or load one into
export const serve = (port: number, filename: string, dir: string, useProxy: boolean) => {
  const app = express();
  
  app.use(createCellsRouter(filename, dir));

  if (useProxy) {
    /*
    This proxy is only for developing the app on the local machine, when the app is running on a users machine, we need to serve up the build files below, and is 
    derived from the useProxy that is passed in during runtime of our serve function.
    */
    app.use(createProxyMiddleware({
      target: 'http://localhost:3000',
      ws: true,
      logLevel: 'silent',
    }));
  } else {
     /* Serviing up build files for when it is a user running our app without the react local dev server on our machine. This is how the app was intended to be ran.
    it does not work to try to load the build direct form the node modules, we get a cannot get error. So we have to try to utilyze node to find the correct path
    we are then trying to get just the directory name of the path (we actually do not need the index.html, we just want the build directory of our local client)
    */
    const packagePath = require.resolve('@flint-editor/local-client/build/index.html')
    app.use(express.static(path.dirname(packagePath)));
  }

  
  
  
  /* we are returning a promise wrapped around our resolution of the express server, on resolve we listen on the required port, on error we reject. 
  The actual error handling and messaging is handled in our CLI file to try to extract use cases where the user will actually see the erors
  */
  
  return new Promise<void>((resolve, reject) => {
    app.listen(port, resolve).on('error', reject);
  });
  
  
};

