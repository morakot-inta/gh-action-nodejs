import express,{Request, Response} from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { getProject, getProjectById } from './routes/project';

const app = express();

app.use(morgan('dev'));

app.use('/projects', getProject);
app.use('/projects/:id', getProjectById);

if (process.env.NODE_ENV) {
  process.env.NODE_ENV = 'dev';
  dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
} else {
  dotenv.config();
}

const port = process.env.PORT || 3000; 

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'api version 1.0.0' });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

export default app;