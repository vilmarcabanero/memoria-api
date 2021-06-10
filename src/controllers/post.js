import Post from '../models/Post.js';
import chalk from 'chalk';

export const getPosts = async (req, res) => {
	try {
		const postMessages = await Post.find();
		console.log(postMessages);

		res.send(postMessages);
	} catch (err) {
		console.log(err);
		res.status(404).json({ message: err.message });
	}
};

export const createPost = async (req, res) => {
	try {
		const post = req.body;

		const newPost = new Post(post);
		await newPost.save();

		res.status(201).json(newPost);
	} catch (err) {
		console.log(err);
		res.status(409).json({ message: err.message });
	}
};
