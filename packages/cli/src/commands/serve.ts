import path from 'path';
import { Command } from 'commander';
import { serve } from '@flintstrike-editor/local-api';

/*
our production flag, if running in production we will change all of the node processes to production, 
this will manually override a user having "development" environment set.
*/

 const isProduction = process.env.NODE_ENV === 'production';

export const serveCommand = new Command()
  .command('serve [filename]')
  .description('Open a file for editing')
  .option('-p, --port <number>', 'port to run server on', '4005')
  .action(async (filename ='notebook.js', options: {port: string}) => {
    try {
      const dir = path.join(process.cwd(), path.dirname(filename));
      await serve(parseInt(options.port), path.basename(filename), dir, !isProduction);
      console.log(
        `Opened ${filename}. Navigate to http://localhost:${options.port} to edit the file`
      )
    } catch (error) {
      if (error.code === 'EADDRINUSE') {
        console.error(`Port ${options.port} is already in use. Please try running on a different port with the -p or --port command`);
      } else {
        console.log('There was a problem', error.message);
        
      }

      process.exit(1);
    }
  });