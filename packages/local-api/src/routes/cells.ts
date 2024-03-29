import express from 'express';
import fs from 'fs/promises';
import path from 'path';

interface Cell {
  id: string;
  content: string;
  type: 'text' | 'code';
}

export const createCellsRouter = (filename: string, dir: string) => {
  const router = express.Router();
  router.use(express.json());

  const fullPath = path.join(dir, filename);

  router.get('/cells', async (req, res) => {
    //Read file
    try {
      const result = await fs.readFile(fullPath, {encoding: 'utf-8'});

      res.send(JSON.parse(result));
    } catch (error) {
      if (error.code === 'ENOENT') {
        await fs.writeFile(fullPath, '[]', 'utf-8');
        res.send([]);
      } else {
        throw error;
      }
    }


  });

  router.post('/cells', async (req, res) => {
    
    const { cells }: {cells: Cell[]} = req.body;

    // take list of cells from request obj

    // serialize them to safely write into file

    // write cells into the file
    await fs.writeFile(fullPath, JSON.stringify(cells), 'utf-8')

    res.send({ status: 'ok'});
  });
  
  return router;

}