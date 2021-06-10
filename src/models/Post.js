import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema(
	{
		title: String,
		message: String,
		creator: String,
		tags: [String],
		selectedFile: String,
		likeCount: {
			type: Number,
			default: 0,
		},
	},
	{
		timestamps: true,
	}
);

export default mongoose.model('Post', PostSchema);
