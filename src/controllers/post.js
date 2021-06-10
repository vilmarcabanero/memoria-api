import Post from '../models/Post.js';
import chalk from 'chalk';

export const getPosts = (req, res) => {
	try {
    
		res.send('Hello');
	} catch (err) {
		console.log(err);
		res.send(err.message);
	}
};
