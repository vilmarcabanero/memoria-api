import express from 'express';
const router = express.Router();
import * as p from '../controllers/post.js';

router.get('/', p.getPosts);
router.post('/', p.createPost);
router.patch('/:id', p.updatePost);
router.patch('/likePost/:id', p.likePost);
router.delete('/:id', p.deletePost);

export default router;
