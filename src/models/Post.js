import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	quantity: {
		type: Number,
		required: true,
	},
	seller: {
		type: String,
		required: true,
	},
	isActive: {
		type: Boolean,
		default: true,
	},
	createdOn: {
		type: String,
		// default: new Date(),
	},
});

export default mongoose.model('Post', PostSchema);
