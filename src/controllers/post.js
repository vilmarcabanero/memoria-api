import Post from '../models/Post.js';
import mongoose from 'mongoose';

export const getPosts = async (req, res) => {
	try {
		const postMessages = await Post.find();
		// console.log(postMessages);

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

export const updatePost = async (req, res) => {
	try {
		const { id: _id } = req.params;
		const post = req.body;

		if (!mongoose.Types.ObjectId.isValid(_id))
			res.status(404).send('No post with that id');

		const updatedPost = await Post.findByIdAndUpdate(
			_id,
			{ ...post, _id },
			{ new: true }
		);

		res.json(updatedPost);
	} catch (err) {
		console.log(err);
		res.status(404).json({ message: err.message });
	}
};

export const deletePost = async (req, res) => {
	try {
		const { id } = req.params;

		if (!mongoose.Types.ObjectId.isValid(id))
			res.status(404).send('No post with that id');

		await Post.findByIdAndRemove(id);

		res.json({ message: 'Post deleted successfully.' });
	} catch (err) {
		console.log(err);
		res.status(404).json({ message: err.message });
	}
};

export const likePost = async (req, res) => {
	try {
		const { id } = req.params;

		if (!mongoose.Types.ObjectId.isValid(id))
			res.status(404).send('No post with that id');

		const post = await Post.findById(id);

		const updatedPost = await Post.findByIdAndUpdate(
			id,
			{ likeCount: post.likeCount + 1 },
			{ new: true }
		);

		res.json(updatedPost);
	} catch (err) {
		console.log(err);
		res.status(404).json({ message: err.message });
	}
};
