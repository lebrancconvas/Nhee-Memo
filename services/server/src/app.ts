import express, { Request, Response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { URI } from './config/uri';

// Connect MongoDB. 
mongoose.Promise = global.Promise;
mongoose.connect(URI)
	.then(() => {
		console.log('[success] TASK2: MongoDB connected');
	})
	.catch(err => {
		console.error(err);
		console.log("Can\'t connect to MongoDB"); 
	})

// Create Server. 

const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/', (req: Request, res: Response) => {
	res.send("Test Server");
});

app.use((req: Request, res: Response, next) => {
	const err = new Error('Can\'t find this page');
	// err.status = 404;
	next(err);
});

app.listen(PORT, () => {
	console.log(`[success] TASK 1: Server running on port ${PORT}`);
});